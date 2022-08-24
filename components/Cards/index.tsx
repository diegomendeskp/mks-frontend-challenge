import { Item } from '../../interface/Item';
import { Cards, Title, Text, Price, Descript } from './styles';

export default function Card({
  key,
  photo,
  name,
  description,
  price,
}: Item) {
  return (
    <Cards key={key}>
      <img src={photo} width="200" height="150" />
      <Text>
        <Title>{name}</Title>
        <Price>{price}</Price>
        <Descript>{description}</Descript>
      </Text>
    </Cards>
  );
}
