import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  IconButton
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import api from '../services/api';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetchRecipe();
    checkFavorite();
  }, [id]);

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/recipes/${id}`);
      setRecipe(response.data);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkFavorite = async () => {
    if (!userId) return;
    
    try {
      const response = await api.get(`/users/${userId}`);
      const favorites = response.data.preferences?.favoriteRecipes || [];
      setIsFavorite(favorites.includes(parseInt(id)));
    } catch (error) {
      console.error('Error checking favorite:', error);
    }
  };

  const handleFavoriteToggle = async () => {
    if (!userId) {
      // Utwórz nowego użytkownika jeśli nie istnieje
      try {
        const response = await api.post('/users');
        const newUserId = response.data.id;
        setUserId(newUserId);
        localStorage.setItem('userId', newUserId);
        await api.post(`/users/${newUserId}/favorites`, { recipeId: parseInt(id) });
        setIsFavorite(true);
      } catch (error) {
        console.error('Error creating user:', error);
      }
      return;
    }

    try {
      if (isFavorite) {
        await api.delete(`/users/${userId}/favorites/${id}`);
        setIsFavorite(false);
      } else {
        await api.post(`/users/${userId}/favorites`, { recipeId: parseInt(id) });
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const handleStartTimer = () => {
    navigate(`/timer/${id}`);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  if (!recipe) {
    return <Typography>{t('common.error')}</Typography>;
  }

  const ingredients = Array.isArray(recipe.ingredients) 
    ? recipe.ingredients 
    : typeof recipe.ingredients === 'string' 
      ? recipe.ingredients.split(',').map(i => i.trim())
      : [];

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4">{recipe.title}</Typography>
          <IconButton onClick={handleFavoriteToggle} color={isFavorite ? 'error' : 'default'}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>

        <Box mb={2}>
          <Typography variant="body1" color="textSecondary">
            {t('recipes.cookingTime')}: {Math.floor(recipe.cookingTime / 60)} {t('common.minutes')}
          </Typography>
          {recipe.temperature && (
            <Typography variant="body1" color="textSecondary">
              {t('recipes.temperature')}: {recipe.temperature} {t('common.degrees')}
            </Typography>
          )}
          {recipe.restTime && (
            <Typography variant="body1" color="textSecondary">
              {t('recipes.restTime')}: {Math.floor(recipe.restTime / 60)} {t('common.minutes')}
            </Typography>
          )}
          <Typography variant="body1" color="textSecondary">
            {t('recipes.cookingMethod')}: {recipe.cookingMethod}
          </Typography>
        </Box>

        <Typography variant="h6" gutterBottom>
          {t('recipes.ingredients')}
        </Typography>
        <List>
          {ingredients.map((ingredient, index) => (
            <ListItem key={index}>
              <ListItemText primary={ingredient} />
            </ListItem>
          ))}
        </List>

        {recipe.products && recipe.products.length > 0 && (
          <Box mb={2}>
            <Typography variant="subtitle2" gutterBottom>
              {t('products.title')}:
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {recipe.products.map(product => (
                <Chip key={product.id} label={product.name} size="small" />
              ))}
            </Box>
          </Box>
        )}

        <Typography variant="h6" gutterBottom>
          {t('recipes.instructions')}
        </Typography>
        <Typography variant="body1" paragraph>
          {recipe.instructions}
        </Typography>

        {recipe.preparationSteps && Array.isArray(recipe.preparationSteps) && (
          <Box mt={2}>
            <Typography variant="h6" gutterBottom>
              {t('recipes.instructions')}
            </Typography>
            <List>
              {recipe.preparationSteps.map((step, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${index + 1}. ${step}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleStartTimer}
            fullWidth
          >
            {t('recipes.startTimer')}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeDetails;
