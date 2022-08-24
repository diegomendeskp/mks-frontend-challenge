import React from 'react';
import { Grid } from '@mui/material';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Products } from '../components/Cards/items';
import { NextPage } from 'next';
import Cart from '../components/Cart';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <Grid display="flex" direction="column">
        <NavBar />
        <Cart />
        <Products />
        <Footer />
      </Grid>
    </>
  );
};

export default Home;
