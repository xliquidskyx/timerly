const express = require('express');
const router = express.Router();
const axios = require('axios');

// DummyJSON Recipe API - No authentication required!
const DUMMYJSON_URL = 'https://dummyjson.com/recipes';

// Proxy endpoint for Recipe API search
router.get('/search', async (req, res) => {
    try {
        const query = req.query.s;
        
        if (!query) {
            return res.status(400).json({ error: 'Query parameter "s" is required' });
        }

        // Fetch all recipes from DummyJSON
        const response = await axios.get(`${DUMMYJSON_URL}/search`, {
            params: { q: query }
        });

        // Transform DummyJSON format to match TheMealDB format for compatibility
        const meals = response.data.recipes.map((recipe) => {
            // Parse ingredients into TheMealDB format
            const ingredientFields = {};
            recipe.ingredients.forEach((ingredient, index) => {
                if (index < 20) {
                    ingredientFields[`strIngredient${index + 1}`] = ingredient;
                    ingredientFields[`strMeasure${index + 1}`] = ''; // DummyJSON doesn't have measures
                }
            });
            
            // Fill remaining ingredient slots
            for (let i = recipe.ingredients.length; i < 20; i++) {
                ingredientFields[`strIngredient${i + 1}`] = '';
                ingredientFields[`strMeasure${i + 1}`] = '';
            }

            return {
                idMeal: recipe.id.toString(),
                strMeal: recipe.name,
                strCategory: recipe.mealType && recipe.mealType.length > 0 ? recipe.mealType[0] : 'General',
                strArea: recipe.cuisine || 'International',
                strInstructions: recipe.instructions.join('\n'),
                strMealThumb: recipe.image,
                strTags: recipe.tags ? recipe.tags.join(', ') : '',
                strYoutube: '',
                strSource: '',
                ...ingredientFields
            };
        });

        // Return in TheMealDB-compatible format
        res.json({ meals: meals.length > 0 ? meals : null });
    } catch (error) {
        console.error('Error fetching from Recipe API:', error.message);
        res.status(500).json({ 
            error: 'Failed to fetch from Recipe API',
            message: error.message 
        });
    }
});

// Proxy endpoint for Recipe API lookup by ID
router.get('/lookup', async (req, res) => {
    try {
        const id = req.query.i;
        
        if (!id) {
            return res.status(400).json({ error: 'Query parameter "i" is required' });
        }

        // Fetch recipe by ID from DummyJSON
        const response = await axios.get(`${DUMMYJSON_URL}/${id}`);
        const recipe = response.data;

        // Parse ingredients into TheMealDB format
        const ingredientFields = {};
        recipe.ingredients.forEach((ingredient, index) => {
            if (index < 20) {
                ingredientFields[`strIngredient${index + 1}`] = ingredient;
                ingredientFields[`strMeasure${index + 1}`] = '';
            }
        });
        
        // Fill remaining ingredient slots
        for (let i = recipe.ingredients.length; i < 20; i++) {
            ingredientFields[`strIngredient${i + 1}`] = '';
            ingredientFields[`strMeasure${i + 1}`] = '';
        }

        const meal = {
            idMeal: recipe.id.toString(),
            strMeal: recipe.name,
            strCategory: recipe.mealType && recipe.mealType.length > 0 ? recipe.mealType[0] : 'General',
            strArea: recipe.cuisine || 'International',
            strInstructions: recipe.instructions.join('\n'),
            strMealThumb: recipe.image,
            strTags: recipe.tags ? recipe.tags.join(', ') : '',
            strYoutube: '',
            strSource: '',
            ...ingredientFields
        };

        res.json({ meals: [meal] });
    } catch (error) {
        console.error('Error fetching recipe by ID:', error.message);
        res.status(500).json({ 
            error: 'Failed to fetch recipe',
            message: error.message 
        });
    }
});

module.exports = router;
