require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Import models i synchronizacja bazy danych
const db = require('./models');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/products', require('./routes/products'));
app.use('/api/timers', require('./routes/timers'));
app.use('/api/users', require('./routes/users'));
app.use('/api/admin', require('./routes/admin'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Timerly API is running' });
});

// Synchronizacja bazy danych (tylko w development)
if (process.env.NODE_ENV !== 'production') {
  db.sequelize.sync({ alter: true }).then(() => {
    console.log('Database synchronized');
  }).catch(err => {
    console.error('Error synchronizing database:', err);
  });
}

app.listen(port, () => {
  console.log(`Timerly server running on http://localhost:${port}`);
});
