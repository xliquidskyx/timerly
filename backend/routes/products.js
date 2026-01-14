const express = require('express');
const router = express.Router();
const { Product, Sequelize } = require('../models');
const { Op } = Sequelize;

// Pobierz wszystkie produkty
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    const where = {};

    if (category) {
      where.category = category;
    }

    if (search) {
      where.name = { [Op.like]: `%${search}%` };
    }

    const products = await Product.findAll({
      where,
      order: [['name', 'ASC']]
    });

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Pobierz produkt po ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{
        model: require('../models').Recipe,
        as: 'recipes',
        through: { attributes: [] }
      }]
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

module.exports = router;
