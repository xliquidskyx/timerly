import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Timer from './components/Timer';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AdminPanel from './components/AdminPanel';
import LanguageSelector from './components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              {t('app.title')}
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/">
              {t('recipes.title')}
            </Button>
            <Button color="inherit" component={Link} to="/admin">
              {t('admin.title')}
            </Button>
            <LanguageSelector />
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/timer/:id" element={<Timer />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
