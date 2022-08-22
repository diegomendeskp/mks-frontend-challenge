import { useEffect, useState } from 'react';
import Card from '.';
import { apiProducts } from '../../pages/api';
import { CardContainer } from './styles';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const data = await apiProducts.get(
      '/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
    );
    setProducts(data?.data.products);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <CardContainer>
        {products.map((product, key) => {
          return (
            <Card
              id={product?.id}
              photo={product?.photo}
              name={product?.name}
              description={product?.description}
              price={product?.price}
            />
          );
        })}
      </CardContainer>
    </>
  );
};
