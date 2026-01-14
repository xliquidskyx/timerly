const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { Admin, Recipe, Product, Cookware } = require('../models');
const auth = require('../middleware/auth');

// Logowanie admina
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const admin = await Admin.findOne({ where: { username } });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValid = await admin.validatePassword(password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin.id, username: admin.username, permissionLevel: admin.permissionLevel },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ token, admin: { id: admin.id, username: admin.username, permissionLevel: admin.permissionLevel } });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

// Dodaj nowy przepis (wymaga autentykacji)
router.post('/recipes', auth, async (req, res) => {
  try {
    const { title, ingredients, instructions, preparationSteps, cookingTime, cookingMethod, temperature, restTime, productIds, cookwareIds } = req.body;

    if (!title || !ingredients || !instructions || !cookingTime || !cookingMethod) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const recipe = await Recipe.create({
      title,
      ingredients: Array.isArray(ingredients) ? ingredients : JSON.parse(ingredients),
      instructions,
      preparationSteps: preparationSteps ? (Array.isArray(preparationSteps) ? preparationSteps : JSON.parse(preparationSteps)) : null,
      cookingTime: parseInt(cookingTime),
      cookingMethod,
      temperature: temperature ? parseInt(temperature) : null,
      restTime: restTime ? parseInt(restTime) : null,
      source: 'manual'
    });

    if (productIds && productIds.length > 0) {
      await recipe.setProducts(productIds);
    }

    if (cookwareIds && cookwareIds.length > 0) {
      await recipe.setCookware(cookwareIds);
    }

    const recipeWithRelations = await Recipe.findByPk(recipe.id, {
      include: [
        { model: Product, as: 'products' },
        { model: Cookware, as: 'cookware' }
      ]
    });

    res.status(201).json(recipeWithRelations);
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ error: 'Failed to create recipe' });
  }
});

// Zaktualizuj przepis
router.put('/recipes/:id', auth, async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    const { title, ingredients, instructions, preparationSteps, cookingTime, cookingMethod, temperature, restTime, productIds, cookwareIds } = req.body;

    if (title) recipe.title = title;
    if (ingredients) recipe.ingredients = Array.isArray(ingredients) ? ingredients : JSON.parse(ingredients);
    if (instructions) recipe.instructions = instructions;
    if (preparationSteps) recipe.preparationSteps = Array.isArray(preparationSteps) ? preparationSteps : JSON.parse(preparationSteps);
    if (cookingTime) recipe.cookingTime = parseInt(cookingTime);
    if (cookingMethod) recipe.cookingMethod = cookingMethod;
    if (temperature) recipe.temperature = parseInt(temperature);
    if (restTime) recipe.restTime = parseInt(restTime);

    await recipe.save();

    if (productIds) {
      await recipe.setProducts(productIds);
    }

    if (cookwareIds) {
      await recipe.setCookware(cookwareIds);
    }

    const recipeWithRelations = await Recipe.findByPk(recipe.id, {
      include: [
        { model: Product, as: 'products' },
        { model: Cookware, as: 'cookware' }
      ]
    });

    res.json(recipeWithRelations);
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).json({ error: 'Failed to update recipe' });
  }
});

// Usuń przepis
router.delete('/recipes/:id', auth, async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    await recipe.destroy();
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
});

// Dodaj produkt
router.post('/products', auth, async (req, res) => {
  try {
    const { name, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({ error: 'Name and category are required' });
    }

    const product = await Product.create({ name, category });
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Zaktualizuj produkt
router.put('/products/:id', auth, async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const { name, category } = req.body;
    if (name) product.name = name;
    if (category) product.category = category;

    await product.save();
    res.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Usuń produkt
router.delete('/products/:id', auth, async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// Pobierz statystyki systemu
router.get('/stats', auth, async (req, res) => {
  try {
    const recipeCount = await Recipe.count();
    const productCount = await Product.count();
    const cookwareCount = await Cookware.count();

    res.json({
      recipes: recipeCount,
      products: productCount,
      cookware: cookwareCount
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

module.exports = router;
