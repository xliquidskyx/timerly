import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
  CircularProgress
} from '@mui/material';
import api from '../services/api';

const RecipeList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [maxCookingTime, setMaxCookingTime] = useState('');
  const [cookingMethod, setCookingMethod] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [selectedProducts, searchQuery, maxCookingTime, cookingMethod]);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const params = {};
      
      if (selectedProducts.length > 0) {
        params.products = selectedProducts.join(',');
      }
      
      if (searchQuery) {
        params.search = searchQuery;
      }
      
      if (maxCookingTime) {
        params.cookingTime = parseInt(maxCookingTime) * 60; // konwersja na sekundy
      }
      
      if (cookingMethod) {
        params.method = cookingMethod;
      }

      const response = await api.get('/recipes', { params });
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleProductToggle = (productId) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const cookingMethods = [
    { value: 'boiling', label: 'Boiling' },
    { value: 'baking', label: 'Baking' },
    { value: 'grilling', label: 'Grilling' },
    { value: 'steaming', label: 'Steaming' },
    { value: 'frying', label: 'Frying' },
    { value: 'roasting', label: 'Roasting' }
  ];

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t('recipes.title')}
      </Typography>

      {/* Filtry */}
      <Box mb={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label={t('recipes.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="number"
              label={t('recipes.filterByTime')}
              value={maxCookingTime}
              onChange={(e) => setMaxCookingTime(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>{t('recipes.filterByMethod')}</InputLabel>
              <Select
                value={cookingMethod}
                onChange={(e) => setCookingMethod(e.target.value)}
                label={t('recipes.filterByMethod')}
              >
                <MenuItem value="">{t('products.all')}</MenuItem>
                {cookingMethods.map(method => (
                  <MenuItem key={method.value} value={method.value}>
                    {method.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box mt={2}>
          <Typography variant="subtitle2" gutterBottom>
            {t('products.selectProducts')}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {products.map(product => (
              <Chip
                key={product.id}
                label={product.name}
                onClick={() => handleProductToggle(product.id)}
                color={selectedProducts.includes(product.id) ? 'primary' : 'default'}
                variant={selectedProducts.includes(product.id) ? 'filled' : 'outlined'}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Lista przepisów */}
      {recipes.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          {t('recipes.noRecipes')}
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {recipes.map(recipe => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {recipe.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {t('recipes.cookingTime')}: {Math.floor(recipe.cookingTime / 60)} {t('common.minutes')}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {t('recipes.cookingMethod')}: {recipe.cookingMethod}
                  </Typography>
                  {recipe.products && recipe.products.length > 0 && (
                    <Box mt={1}>
                      {recipe.products.slice(0, 3).map(product => (
                        <Chip
                          key={product.id}
                          label={product.name}
                          size="small"
                          style={{ marginRight: 4, marginTop: 4 }}
                        />
                      ))}
                    </Box>
                  )}
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  >
                    {t('recipes.viewRecipe')}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default RecipeList;
