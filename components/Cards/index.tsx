import { Item } from '../../interface/Item';
import {
  Cards,
  StyleButton,
  Title,
  Text,
  Price,
  Descript,
} from './styles';

export default function Card({
  id,
  photo,
  name,
  description,
  price,
}: Item) {
  console.log(photo);
  return (
    <Cards key={id}>
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
