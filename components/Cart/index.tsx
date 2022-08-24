import React, { useEffect } from 'react';
import {
  Div,
  Title,
  Btn,
  Container,
  PurchaseBtn,
  TotalPrice,
  Total,
  Price,
  CartItem,
  ItemCard,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { CloseMenu } from '../../store/cartMenuSlice';
import type { RootState } from '../../store/store';
import { Grid, Typography } from '@mui/material';
import { decreaseCart, subTotals } from '../../store/cartSlice';
function Cart() {
  const menu = useSelector(
    (state: RootState) => state.cartMenu.state
  );
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  useEffect(() => {
    dispatch(subTotals());
  }, [cart, dispatch]);
  return (
    <Container display={menu}>
      <CartItem>
        <Div>
          <Title>Carrinho de Compras</Title>

          <Btn onClick={() => dispatch(CloseMenu())}>x</Btn>
        </Div>
        {cart.cartItems.length === 0 ? (
          <div>
            <Typography fontSize={25} color="white">
              O seu Carrinho esta vazio
            </Typography>
          </div>
        ) : (
          <>
            <Grid width="90%">
              {cart.cartItems?.map((cartItem) => (
                <Grid
                  display="flex"
                  mt={1}
                  className="cart-item"
                  key={cartItem.id}
                >
                  <ItemCard>
                    <img width={50} src={cartItem.photo} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <div className="quantidade">
                        <button
                          onClick={() => handleDecreaseCart(cartItem)}
                        >
                          -
                        </button>
                        {cartItem.cartQuantity}
                        <button>+</button>
                      </div>
                    </div>
                    <div>
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                    <div>
                      <button>x</button>
                    </div>
                  </ItemCard>
                </Grid>
              ))}
            </Grid>
          </>
        )}
        <TotalPrice>
          <Total>Total:</Total>
          <Price>${cart.cartTotalAmont}</Price>
        </TotalPrice>
      </CartItem>
      <PurchaseBtn>Finalizar Compra</PurchaseBtn>
    </Container>
  );
}

export default Cart;
