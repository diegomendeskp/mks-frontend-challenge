import { Item } from '../../interface/Item';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {
  Cards,
  StyleButton,
  Title,
  Text,
  Price,
  Descript,
} from './styles';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

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
