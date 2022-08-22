import React from 'react';
import { Grid } from '@mui/material';
import { Products } from '../components/Cards/items';

const Home: React.FC = () => (
  <>
    <Grid display="flex" direction="column">
      <Products />
    </Grid>
  </>
);

export default Home;
