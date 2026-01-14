import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Tabs,
  Tab
} from '@mui/material';
import api from '../services/api';

const AdminPanel = () => {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [recipeDialogOpen, setRecipeDialogOpen] = useState(false);
  const [productDialogOpen, setProductDialogOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [recipeForm, setRecipeForm] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    preparationSteps: '',
    cookingTime: '',
    cookingMethod: '',
    temperature: '',
    restTime: ''
  });

  const [productForm, setProductForm] = useState({
    name: '',
    category: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const [recipesRes, productsRes, statsRes] = await Promise.all([
        api.get('/recipes'),
        api.get('/products'),
        api.get('/admin/stats')
      ]);
      setRecipes(recipesRes.data);
      setProducts(productsRes.data);
      setStats(statsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/admin/login', { username, password });
      localStorage.setItem('adminToken', response.data.token);
      setIsAuthenticated(true);
      setError('');
      fetchData();
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  const handleRecipeSubmit = async () => {
    try {
      const recipeData = {
        ...recipeForm,
        ingredients: recipeForm.ingredients.split(',').map(i => i.trim()),
        preparationSteps: recipeForm.preparationSteps ? recipeForm.preparationSteps.split('\n').filter(s => s.trim()) : [],
        cookingTime: parseInt(recipeForm.cookingTime) * 60,
        temperature: recipeForm.temperature ? parseInt(recipeForm.temperature) : null,
        restTime: recipeForm.restTime ? parseInt(recipeForm.restTime) * 60 : null
      };

      if (editingRecipe) {
        await api.put(`/admin/recipes/${editingRecipe.id}`, recipeData);
        setSuccess('Recipe updated successfully');
      } else {
        await api.post('/admin/recipes', recipeData);
        setSuccess('Recipe created successfully');
      }

      setRecipeDialogOpen(false);
      setEditingRecipe(null);
      setRecipeForm({
        title: '',
        ingredients: '',
        instructions: '',
        preparationSteps: '',
        cookingTime: '',
        cookingMethod: '',
        temperature: '',
        restTime: ''
      });
      fetchData();
    } catch (error) {
      setError('Failed to save recipe');
    }
  };

  const handleProductSubmit = async () => {
    try {
      if (editingProduct) {
        await api.put(`/admin/products/${editingProduct.id}`, productForm);
        setSuccess('Product updated successfully');
      } else {
        await api.post('/admin/products', productForm);
        setSuccess('Product created successfully');
      }

      setProductDialogOpen(false);
      setEditingProduct(null);
      setProductForm({ name: '', category: '' });
      fetchData();
    } catch (error) {
      setError('Failed to save product');
    }
  };

  const handleDeleteRecipe = async (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        await api.delete(`/admin/recipes/${id}`);
        setSuccess('Recipe deleted successfully');
        fetchData();
      } catch (error) {
        setError('Failed to delete recipe');
      }
    }
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.delete(`/admin/products/${id}`);
        setSuccess('Product deleted successfully');
        fetchData();
      } catch (error) {
        setError('Failed to delete product');
      }
    }
  };

  const openEditRecipe = (recipe) => {
    setEditingRecipe(recipe);
    setRecipeForm({
      title: recipe.title,
      ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients,
      instructions: recipe.instructions,
      preparationSteps: Array.isArray(recipe.preparationSteps) ? recipe.preparationSteps.join('\n') : '',
      cookingTime: Math.floor(recipe.cookingTime / 60).toString(),
      cookingMethod: recipe.cookingMethod,
      temperature: recipe.temperature ? recipe.temperature.toString() : '',
      restTime: recipe.restTime ? Math.floor(recipe.restTime / 60).toString() : ''
    });
    setRecipeDialogOpen(true);
  };

  const openEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      category: product.category
    });
    setProductDialogOpen(true);
  };

  if (!isAuthenticated) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {t('admin.title')}
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label={t('admin.username')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              type="password"
              label={t('admin.password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              {t('admin.login')}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">{t('admin.title')}</Typography>
        <Button variant="outlined" onClick={handleLogout}>
          {t('admin.logout')}
        </Button>
      </Box>

      {error && <Alert severity="error" onClose={() => setError('')}>{error}</Alert>}
      {success && <Alert severity="success" onClose={() => setSuccess('')}>{success}</Alert>}

      {stats && (
        <Box mb={3}>
          <Typography variant="h6">{t('admin.stats')}</Typography>
          <Typography>Recipes: {stats.recipes}</Typography>
          <Typography>Products: {stats.products}</Typography>
          <Typography>Cookware: {stats.cookware}</Typography>
        </Box>
      )}

      <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
        <Tab label={t('admin.recipes')} />
        <Tab label={t('admin.products')} />
      </Tabs>

      {tabValue === 0 && (
        <Box mt={2}>
          <Button variant="contained" onClick={() => { setEditingRecipe(null); setRecipeDialogOpen(true); }} sx={{ mb: 2 }}>
            {t('admin.addRecipe')}
          </Button>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Cooking Time</TableCell>
                  <TableCell>Method</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recipes.map(recipe => (
                  <TableRow key={recipe.id}>
                    <TableCell>{recipe.title}</TableCell>
                    <TableCell>{Math.floor(recipe.cookingTime / 60)} min</TableCell>
                    <TableCell>{recipe.cookingMethod}</TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => openEditRecipe(recipe)}>{t('admin.editRecipe')}</Button>
                      <Button size="small" color="error" onClick={() => handleDeleteRecipe(recipe.id)}>{t('admin.deleteRecipe')}</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {tabValue === 1 && (
        <Box mt={2}>
          <Button variant="contained" onClick={() => { setEditingProduct(null); setProductDialogOpen(true); }} sx={{ mb: 2 }}>
            {t('admin.addProduct')}
          </Button>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(product => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <Button size="small" onClick={() => openEditProduct(product)}>{t('admin.editProduct')}</Button>
                      <Button size="small" color="error" onClick={() => handleDeleteProduct(product.id)}>{t('admin.deleteProduct')}</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {/* Recipe Dialog */}
      <Dialog open={recipeDialogOpen} onClose={() => setRecipeDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{editingRecipe ? t('admin.editRecipe') : t('admin.addRecipe')}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Title"
            value={recipeForm.title}
            onChange={(e) => setRecipeForm({ ...recipeForm, title: e.target.value })}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Ingredients (comma separated)"
            value={recipeForm.ingredients}
            onChange={(e) => setRecipeForm({ ...recipeForm, ingredients: e.target.value })}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Instructions"
            value={recipeForm.instructions}
            onChange={(e) => setRecipeForm({ ...recipeForm, instructions: e.target.value })}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Preparation Steps (one per line)"
            value={recipeForm.preparationSteps}
            onChange={(e) => setRecipeForm({ ...recipeForm, preparationSteps: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            type="number"
            label="Cooking Time (minutes)"
            value={recipeForm.cookingTime}
            onChange={(e) => setRecipeForm({ ...recipeForm, cookingTime: e.target.value })}
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Cooking Method</InputLabel>
            <Select
              value={recipeForm.cookingMethod}
              onChange={(e) => setRecipeForm({ ...recipeForm, cookingMethod: e.target.value })}
              label="Cooking Method"
              required
            >
              <MenuItem value="boiling">Boiling</MenuItem>
              <MenuItem value="baking">Baking</MenuItem>
              <MenuItem value="grilling">Grilling</MenuItem>
              <MenuItem value="steaming">Steaming</MenuItem>
              <MenuItem value="frying">Frying</MenuItem>
              <MenuItem value="roasting">Roasting</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            type="number"
            label="Temperature (°C)"
            value={recipeForm.temperature}
            onChange={(e) => setRecipeForm({ ...recipeForm, temperature: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            type="number"
            label="Rest Time (minutes)"
            value={recipeForm.restTime}
            onChange={(e) => setRecipeForm({ ...recipeForm, restTime: e.target.value })}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRecipeDialogOpen(false)}>{t('admin.cancel')}</Button>
          <Button onClick={handleRecipeSubmit} variant="contained">{t('admin.save')}</Button>
        </DialogActions>
      </Dialog>

      {/* Product Dialog */}
      <Dialog open={productDialogOpen} onClose={() => setProductDialogOpen(false)}>
        <DialogTitle>{editingProduct ? t('admin.editProduct') : t('admin.addProduct')}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            value={productForm.name}
            onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              value={productForm.category}
              onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
              label="Category"
              required
            >
              <MenuItem value="meat">Meat</MenuItem>
              <MenuItem value="vegetable">Vegetable</MenuItem>
              <MenuItem value="grain">Grain</MenuItem>
              <MenuItem value="dairy">Dairy</MenuItem>
              <MenuItem value="spice">Spice</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setProductDialogOpen(false)}>{t('admin.cancel')}</Button>
          <Button onClick={handleProductSubmit} variant="contained">{t('admin.save')}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminPanel;
