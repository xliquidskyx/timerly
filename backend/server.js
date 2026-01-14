const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Mock data for recipes
const recipes = [
  { id: 1, title: 'Pasta', ingredients: ['Pasta', 'Tomato sauce', 'Cheese'], instructions: 'Boil pasta, add sauce.' },
  { id: 2, title: 'Grilled Chicken', ingredients: ['Chicken', 'Salt', 'Pepper'], instructions: 'Grill chicken with seasoning.' },
];

// Routes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.get('/api/recipes/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  res.json(recipe);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
