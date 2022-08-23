import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import Card from '.';
import { Item } from '../../interface/Item';
import { apiProducts } from '../../pages/api';
import { CardContainer } from './styles';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const data = await apiProducts.get(
      '/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
    );
    setProducts(data?.data.products);
  };
  useEffect(() => {
    setLoading(true);
    getData().finally(() => setLoading(false));
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
            products.map((product: Item, key) => {
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
