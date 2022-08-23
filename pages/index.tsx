import React from 'react';
import { Grid } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Products } from '../components/Cards/items';

const Home: React.FC = () => (
  <>
    <Grid display="flex" direction="column">
      <Header />
      <Products />
      <Footer />
    </Grid>
  </>
);

export default Home;
