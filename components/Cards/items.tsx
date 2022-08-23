import { Skeleton } from '@mui/material';
import Card from '.';
import { Item } from '../../interface/Item';
import { CardContainer } from './styles';
import { getProducts } from '../../store/productSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/hooks';

export const Products = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector(
    (state: RootState) => state.products.loading
  );
  const products = useSelector(
    (state: RootState) => state.products.products
  );
  const error = useSelector(
    (state: RootState) => state.products.error
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
            products.map((product: Item, key: number) => {
              return (
                <Card
                  key={key}
                  id={product?.id}
                  name={product?.name}
                  photo={product?.photo}
                  description={product?.description}
                  price={product?.price}
                />
              );
            })}
        </>
      </CardContainer>
    </>
  );
};
