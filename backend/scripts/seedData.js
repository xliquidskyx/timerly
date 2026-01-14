const { Recipe, Product, Cookware } = require('../models');
const db = require('../models');

// Skrypt do dodania przykładowych danych
async function seedData() {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection established.');

    await db.sequelize.sync({ alter: true });

    // Dodaj przykładowe produkty
    const products = await Product.bulkCreate([
      { name: 'Chicken', category: 'meat' },
      { name: 'Tomato', category: 'vegetable' },
      { name: 'Pasta', category: 'grain' },
      { name: 'Cheese', category: 'dairy' },
      { name: 'Salt', category: 'spice' },
      { name: 'Pepper', category: 'spice' },
      { name: 'Onion', category: 'vegetable' },
      { name: 'Garlic', category: 'vegetable' },
      { name: 'Rice', category: 'grain' },
      { name: 'Beef', category: 'meat' }
    ], { ignoreDuplicates: true });

    console.log('Products created:', products.length);

    // Dodaj przykładowe przepisy
    const recipes = await Recipe.bulkCreate([
      {
        title: 'Grilled Chicken',
        ingredients: ['Chicken', 'Salt', 'Pepper', 'Garlic'],
        instructions: 'Season chicken with salt, pepper, and garlic. Grill for 20-25 minutes until cooked through.',
        cookingTime: 1500, // 25 minut
        cookingMethod: 'grilling',
        temperature: 200,
        restTime: 300 // 5 minut
      },
      {
        title: 'Pasta with Tomato Sauce',
        ingredients: ['Pasta', 'Tomato', 'Onion', 'Garlic', 'Cheese'],
        instructions: 'Cook pasta according to package. Sauté onion and garlic, add tomatoes. Combine with pasta and top with cheese.',
        cookingTime: 1200, // 20 minut
        cookingMethod: 'boiling'
      },
      {
        title: 'Roasted Beef',
        ingredients: ['Beef', 'Salt', 'Pepper'],
        instructions: 'Season beef with salt and pepper. Roast in oven at 180°C for 45 minutes. Let rest for 10 minutes.',
        cookingTime: 2700, // 45 minut
        cookingMethod: 'roasting',
        temperature: 180,
        restTime: 600 // 10 minut
      }
    ], { ignoreDuplicates: true });

    console.log('Recipes created:', recipes.length);

    // Połącz przepisy z produktami
    if (recipes.length > 0 && products.length > 0) {
      const chicken = products.find(p => p.name === 'Chicken');
      const salt = products.find(p => p.name === 'Salt');
      const pepper = products.find(p => p.name === 'Pepper');
      const garlic = products.find(p => p.name === 'Garlic');
      const pasta = products.find(p => p.name === 'Pasta');
      const tomato = products.find(p => p.name === 'Tomato');
      const onion = products.find(p => p.name === 'Onion');
      const cheese = products.find(p => p.name === 'Cheese');
      const beef = products.find(p => p.name === 'Beef');

      if (recipes[0] && chicken && salt && pepper && garlic) {
        await recipes[0].setProducts([chicken.id, salt.id, pepper.id, garlic.id]);
      }
      if (recipes[1] && pasta && tomato && onion && garlic && cheese) {
        await recipes[1].setProducts([pasta.id, tomato.id, onion.id, garlic.id, cheese.id]);
      }
      if (recipes[2] && beef && salt && pepper) {
        await recipes[2].setProducts([beef.id, salt.id, pepper.id]);
      }
    }

    console.log('Data seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedData();
