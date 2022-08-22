import {
  Cards,
  StyleButton,
  CardContainer,
  Title,
  Text,
  Price,
  Descript,
} from './styles';

export interface CardProps {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: string;
}
export default function Card({
  id,
  photo,
  name,
  description,
  price,
}: CardProps) {
  console.log(photo);
  return (
    <Cards>
      <img src={photo} width="200" height="150" />
      <Text>
        <Title>{name}</Title>
        <Price>{price}</Price>
        <Descript>{description}</Descript>
      </Text>
      <StyleButton>Comprar</StyleButton>
    </Cards>
  );
}
