const express = require('express');
const router = express.Router();
const { Recipe, Product, Cookware, Sequelize } = require('../models');
const { Op } = Sequelize;
const axios = require('axios');

// Pobierz wszystkie przepisy z możliwością filtrowania
router.get('/', async (req, res) => {
  try {
    const { products, cookingTime, method, search } = req.query;
    const where = {};

    if (cookingTime) {
      where.cookingTime = { [Op.lte]: parseInt(cookingTime) };
    }

    if (method) {
      where.cookingMethod = method;
    }

    if (search) {
      where.title = { [Op.like]: `%${search}%` };
    }

    const include = [];
    
    if (products) {
      const productIds = Array.isArray(products) ? products : products.split(',');
      include.push({
        model: Product,
        as: 'products',
        where: { id: { [Op.in]: productIds } },
        through: { attributes: [] }
      });
    } else {
      include.push({
        model: Product,
        as: 'products',
        through: { attributes: [] }
      });
    }

    include.push({
      model: Cookware,
      as: 'cookware',
      through: { attributes: [] },
      required: false
    });

    const recipes = await Recipe.findAll({
      where,
      include,
      order: [['createdAt', 'DESC']]
    });

    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// Pobierz przepis po ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          as: 'products',
          through: { attributes: [] }
        },
        {
          model: Cookware,
          as: 'cookware',
          through: { attributes: [] }
        }
      ]
    });

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
});

// Wyszukaj przepisy w Google Recipes API
router.get('/search/api', async (req, res) => {
  try {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    // Google Recipes Results API - przykładowa implementacja
    // W rzeczywistości wymaga to klucza API i odpowiedniej konfiguracji
    const apiKey = process.env.GOOGLE_RECIPES_API_KEY || '';
    
    if (!apiKey) {
      // Fallback - zwróć przykładowe dane
      return res.json({
        recipes: [
          {
            title: `Recipe for ${query}`,
            ingredients: ['Ingredient 1', 'Ingredient 2'],
            instructions: 'Cook according to package instructions',
            cookingTime: 1800,
            cookingMethod: 'boiling'
          }
        ]
      });
    }

    // Tutaj byłoby prawdziwe wywołanie API
    // const response = await axios.get(`https://api.example.com/recipes?q=${query}&key=${apiKey}`);
    
    res.json({ message: 'API integration placeholder' });
  } catch (error) {
    console.error('Error searching recipes:', error);
    res.status(500).json({ error: 'Failed to search recipes' });
  }
});

module.exports = router;
