import { Skeleton } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Card from '.';
import { CardContainer, CardItem, StyleButton } from './styles';
import { getProducts } from '../../store/productSlice';
import { useEffect } from 'react';
import { RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToCart, CartItem } from '../../store/cartSlice';

export const Products = () => {
  const dispatch = useAppDispatch();
  const hadleAddToCard = (product: CartItem) => {
    dispatch(addToCart(product));
  };
  const loading = useAppSelector(
    (state: RootState) => state.products.loading
  );
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <CardContainer>
        <>
          {loading &&
            new Array(8)
              .fill(null)
              .map((key) => (
                <Skeleton
                  key={key}
                  animation="wave"
                  variant="rounded"
                  width={200}
                  height={280}
                />
              ))}
          {!loading &&
            products.map((product) => {
              return (
                <CardItem key={0}>
                  <Card
                    key={product?.id}
                    name={product?.name}
                    photo={product?.photo}
                    description={product?.description}
                    price={product?.price}
                    id={0}
                  />
                  <StyleButton
                    onClick={() => {
                      hadleAddToCard(product as CartItem);
                    }}
                  >
                    <LocalMallIcon fontSize="small" />
                    Comprar
                  </StyleButton>
                </CardItem>
              );
            })}
        </>
      </CardContainer>
    </>
  );
};
