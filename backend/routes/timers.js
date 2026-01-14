const express = require('express');
const router = express.Router();
const { Timer, Recipe, User } = require('../models');

// Utwórz nowy timer
router.post('/', async (req, res) => {
  try {
    const { recipeId, duration, userId } = req.body;

    if (!recipeId || !duration) {
      return res.status(400).json({ error: 'Recipe ID and duration are required' });
    }

    const timer = await Timer.create({
      recipeId,
      duration: parseInt(duration),
      startTime: new Date(),
      status: 'running',
      userId: userId || null
    });

    const timerWithRelations = await Timer.findByPk(timer.id, {
      include: [
        { model: Recipe, as: 'recipe' },
        { model: User, as: 'user', required: false }
      ]
    });

    res.status(201).json(timerWithRelations);
  } catch (error) {
    console.error('Error creating timer:', error);
    res.status(500).json({ error: 'Failed to create timer' });
  }
});

// Pobierz wszystkie timery użytkownika
router.get('/', async (req, res) => {
  try {
    const { userId, status } = req.query;
    const where = {};

    if (userId) {
      where.userId = userId;
    }

    if (status) {
      where.status = status;
    }

    const timers = await Timer.findAll({
      where,
      include: [
        { model: Recipe, as: 'recipe' },
        { model: User, as: 'user', required: false }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.json(timers);
  } catch (error) {
    console.error('Error fetching timers:', error);
    res.status(500).json({ error: 'Failed to fetch timers' });
  }
});

// Pobierz timer po ID
router.get('/:id', async (req, res) => {
  try {
    const timer = await Timer.findByPk(req.params.id, {
      include: [
        { model: Recipe, as: 'recipe' },
        { model: User, as: 'user', required: false }
      ]
    });

    if (!timer) {
      return res.status(404).json({ error: 'Timer not found' });
    }

    res.json(timer);
  } catch (error) {
    console.error('Error fetching timer:', error);
    res.status(500).json({ error: 'Failed to fetch timer' });
  }
});

// Zaktualizuj status timera
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;

    const timer = await Timer.findByPk(req.params.id);
    if (!timer) {
      return res.status(404).json({ error: 'Timer not found' });
    }

    if (status) {
      timer.status = status;
      if (status === 'completed') {
        timer.endTime = new Date();
      }
      await timer.save();
    }

    res.json(timer);
  } catch (error) {
    console.error('Error updating timer:', error);
    res.status(500).json({ error: 'Failed to update timer' });
  }
});

module.exports = router;
