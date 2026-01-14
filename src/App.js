import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Timer from './components/Timer';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { Container, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <Typography variant="h3" gutterBottom>
          Timerly - Cooking Assistant
        </Typography>
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/recipe/:id" component={RecipeDetails} />
          <Route path="/timer" component={Timer} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
