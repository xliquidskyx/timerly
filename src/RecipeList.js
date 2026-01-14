import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/api/recipes')  // Backend endpoint to fetch recipes
      .then(response => setRecipes(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Grid container spacing={2}>
      {recipes.map(recipe => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{recipe.title}</Typography>
              <Typography variant="body2">{recipe.description}</Typography>
              <Link to={`/recipe/${recipe.id}`}>
                <Button variant="contained">View Recipe</Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
