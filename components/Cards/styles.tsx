import {
  Container,
  Typography,
  Card,
  Button,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Cards = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 280px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  text-align: center;
  background: #ffffff;
  border-radius: 8px;
`;
export const StyleButton = styled(Button)`
  background: #0f52ba;
  border-radius: 0px 0px 8px 8px;
  width: auto;
  height: 32px;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  :hover {
    background: #3973cc;
  }
`;

export const Title = styled(Typography)`
  display: flex;
  justify-content: flex-start;
  margin-left: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 100px;
  color: #2c2c2c;
  height: 3px;
`;

export const Text = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

export const Price = styled(Typography)`
  background: #373737;
  border-radius: 5px;
  width: 65px;
  height: 27px;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
`;

export const Descript = styled(Typography)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2c2c2c;
`;

export const CardContainer = styled(Grid)`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 10%;
  margin-right: 10%;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  width: 80%;
`;
