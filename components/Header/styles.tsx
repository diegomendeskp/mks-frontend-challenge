import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  background: #0f52ba;
  width: 100%;
  height: 101px;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 400px) {
    height: 60px;
  }
`;
export const Text = styled(Typography)`
  font-style: normal;
  font-weight: 600px;
  font-size: 46px;
  line-height: 19px;
  color: #ffffff;
  @media (max-width: 400px) {
    font-size: 35px;
  }
`;
export const Sub = styled(Typography)`
  font-style: normal;
  font-weight: 250px;
  font-size: 20px;
  line-height: 19px;
  color: #ffffff;
  @media (max-width: 400px) {
    font-size: 17px;
  }
`;

export const Btn = styled(Button)`
  background: #ffffff;
  width: 90px;
  height: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
  color: #000000;
  @media (max-width: 400px) {
    margin-right: 30px;
    width: 52px;
    height: 30px;
  }
  :hover {
    background: #fffa;
  }
`;
