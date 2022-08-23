import { useEffect, useState } from 'react';
import Card from '.';
import { Item } from '../../interface/Item';
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
    console.log(products);
  }, []);
  return (
    <>
      <CardContainer>
        {products.map((product: Item, key) => {
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
      </CardContainer>
    </>
  );
};
