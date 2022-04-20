import React from 'react';
import './App.css';
import Hotel from './components/search';
import Favorites from './view/page/favorites';
import Grid from '@mui/material/Grid';
import Page from './view/page';

function App() {
  return (
    <div className='App'>
      <h1>Hotel</h1>
      <Grid>
        <Page/>
      </Grid>
    </div>
  );
}

export default App;
