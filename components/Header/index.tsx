import React from 'react';
import { Container, Text, Sub, Btn } from './styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Grid } from '@mui/material';

function Header() {
  return (
    <Container>
      <Grid display="flex">
        <Text ml={10}>MKS</Text>
        <Sub ml={1}>sistemas</Sub>
      </Grid>
      <Btn>
        <ShoppingCartOutlinedIcon />
      </Btn>
    </Container>
  );
}

export default Header;
