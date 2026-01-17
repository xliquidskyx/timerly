# Recipe API Setup Guide

## DummyJSON Recipe API - NO API KEY REQUIRED! ✅

The backend now uses **DummyJSON Recipe API** which works perfectly without any API key or authentication!

### Features
- ✅ No API key needed
- ✅ No registration required
- ✅ Free and unlimited
- ✅ 50+ recipes with full data
- ✅ Search by name
- ✅ Get recipe by ID
- ✅ Includes ingredients, instructions, and images

### What You Get
- Recipe names and descriptions
- Full ingredient lists
- Step-by-step cooking instructions
- Recipe images
- Cuisine types and meal types
- Cooking times and servings

### API Documentation
- Website: https://dummyjson.com/docs/recipes
- Example search: https://dummyjson.com/recipes/search?q=pizza
- Example by ID: https://dummyjson.com/recipes/1

### Testing the API

Once the backend is running, test it:

```bash
# Search for pasta recipes
curl "http://localhost:5000/api/mealdb/search?s=pasta"

# Get recipe by ID
curl "http://localhost:5000/api/mealdb/lookup?i=1"
```

Or open in browser:
```
http://localhost:5000/api/mealdb/search?s=pasta
http://localhost:5000/api/mealdb/lookup?i=1
```

## Alternative APIs (if you need more recipes)

### Option 1: Spoonacular (More features, requires free API key)
- Website: https://spoonacular.com/food-api
- Free tier: 150 points/day
- Features: 365,000+ recipes, nutrition, meal planning, diet filters
- Get API key: https://spoonacular.com/food-api/console

### Option 2: Edamam (Largest database, requires free API key)
- Website: https://developer.edamam.com/edamam-recipe-api
- Free tier: 10,000 calls/month
- Features: 2M+ recipes, nutrition analysis
- Get API key: https://developer.edamam.com/edamam-recipe-api

### Option 3: Open Food Facts (No key, but product-focused)
- Website: https://world.openfoodfacts.org/data
- No API key required
- Features: Nutritional facts, ingredients, allergens
- Note: More about packaged foods than cooking recipes
