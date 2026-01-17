require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Try to load mealdb route with error handling
try {
    const mealdbRouter = require('./routes/mealdb');
    app.use('/api/mealdb', mealdbRouter);
    console.log('MealDB route loaded successfully');
} catch (error) {
    console.error('Error loading MealDB route:', error);
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Timerly API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error', message: err.message });
});

// Start server
const server = app.listen(port, () => {
  console.log(`Timerly server running on http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
});

// Handle server errors
server.on('error', (error) => {
    console.error('Server error:', error);
});

// Keep process alive
process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled rejection at:', promise, 'reason:', reason);
});
