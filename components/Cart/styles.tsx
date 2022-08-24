import { Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
export const Container = styled(Grid)`
  right: 0px;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  width: 35%;
  height: 100%;
  background: #0f52ba;
  right: 0;
  z-index: 5;
  box-shadow: 1px 1px 5px;
  position: fixed;
  backdrop-filter: blur(4px);
  @media (max-width: 400px) {
    width: 90%;
  }
`;
export const CartItem = styled(Grid)`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  gap: 20px;
`;

export const Div = styled(Grid)`
  width: 90%;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 400px) {
    margin-top: 30px;
  }
`;

export const ItemCard = styled(Grid)`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 70px;
  gap: 5px;
  border-radius: 8px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.24);
`;

export const Title = styled(Typography)`
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 30px;
  width: 160px;
`;
export const Btn = styled(Grid)`
  border: none;
  margin-top: -30px;
  border-radius: 50%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  font-size: 28px;
  font-weight: 400;
  line-height: 15px;
  cursor: pointer;
  color: #ffffff;
  :hover {
    opacity: 0.9;
  }
`;

export const TotalPrice = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  bottom: 0px;
  position: absolute;
  color: #fff;
`;
export const Total = styled(Typography)`
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
`;
export const Price = styled(Typography)`
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
`;

export const PurchaseBtn = styled(Button)`
  position: fixed;
  display: flex;
  bottom: 0px;
  background: black;
  width: 100%;
  height: 80px;
  border-radius: 0;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  :hover {
    background: #000000da;
  }
`;
