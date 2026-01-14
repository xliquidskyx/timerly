import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Card, CardContent } from '@mui/material';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`/api/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.log(error));
  }, [id]);

  const startTimer = () => {
    // Start the timer functionality
    console.log('Timer started');
  };

  if (!recipe) return <Typography>Loading...</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{recipe.title}</Typography>
        <Typography variant="h6">Ingredients:</Typography>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <Typography variant="body1">{recipe.instructions}</Typography>
        <Button onClick={startTimer} variant="contained" color="primary">
          Start Timer
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeDetails;
