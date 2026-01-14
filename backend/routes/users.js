const express = require('express');
const router = express.Router();
const { User, Recipe } = require('../models');

// Utwórz lub pobierz użytkownika
router.post('/', async (req, res) => {
  try {
    const { preferences } = req.body;
    
    const user = await User.create({
      preferences: preferences || { language: 'en', favoriteRecipes: [] }
    });

    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Pobierz użytkownika po ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Pobierz ulubione przepisy jeśli istnieją
    const favoriteIds = user.preferences?.favoriteRecipes || [];
    let favoriteRecipes = [];
    if (favoriteIds.length > 0) {
      favoriteRecipes = await Recipe.findAll({
        where: { id: favoriteIds }
      });
    }

    const userData = user.toJSON();
    userData.favoriteRecipes = favoriteRecipes;

    res.json(userData);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Zaktualizuj preferencje użytkownika
router.patch('/:id/preferences', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { preferences } = req.body;
    user.preferences = { ...user.preferences, ...preferences };
    await user.save();

    res.json(user);
  } catch (error) {
    console.error('Error updating user preferences:', error);
    res.status(500).json({ error: 'Failed to update preferences' });
  }
});

// Dodaj przepis do ulubionych
router.post('/:id/favorites', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { recipeId } = req.body;
    if (!recipeId) {
      return res.status(400).json({ error: 'Recipe ID is required' });
    }

    const favorites = user.preferences?.favoriteRecipes || [];
    if (!favorites.includes(recipeId)) {
      favorites.push(recipeId);
      user.preferences = { ...user.preferences, favoriteRecipes: favorites };
      await user.save();
    }

    res.json(user);
  } catch (error) {
    console.error('Error adding favorite:', error);
    res.status(500).json({ error: 'Failed to add favorite' });
  }
});

// Usuń przepis z ulubionych
router.delete('/:id/favorites/:recipeId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const favorites = user.preferences?.favoriteRecipes || [];
    user.preferences = {
      ...user.preferences,
      favoriteRecipes: favorites.filter(id => id !== parseInt(req.params.recipeId))
    };
    await user.save();

    res.json(user);
  } catch (error) {
    console.error('Error removing favorite:', error);
    res.status(500).json({ error: 'Failed to remove favorite' });
  }
});

module.exports = router;
