import React from 'react';
import { Container, Text, Sub, Btn, CartLength } from './styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Grid } from '@mui/material';
import { OpenMenu } from '../../store/cartMenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function NavBar() {
  const { cartTotalQuantity } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <Grid display="flex">
        <Text ml={10}>MKS</Text>
        <Sub ml={1}>sistemas</Sub>
      </Grid>
      <Btn onClick={() => dispatch(OpenMenu())}>
        <ShoppingCartOutlinedIcon />
        <CartLength>{cartTotalQuantity}</CartLength>
      </Btn>
    </Container>
  );
}

export default NavBar;
