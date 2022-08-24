import { Typography, Grid, Button, IconButton } from '@mui/material';
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
  .itemList::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 400px) {
    width: 85%;
  }
`;
export const CartItem = styled(Grid)`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  gap: 10px;
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
  justify-content: flex-start;
  width: 90%;
  height: 90px;
  border-radius: 8px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.24);
  position: relative;
  img {
    margin-left: 20px;
  }
  @media (max-width: 400px) {
    width: 80%;
    height: 170px;
    margin-left: 28px;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    img {
      width: 80px;
      top: 0px;
      right: 75px;
      position: absolute;
    }
  }
`;

export const Title = styled(Typography)`
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 30px;
  width: 160px;
`;
export const Btn = styled(IconButton)`
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
    opacity: 0.8;
    background: #000;
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
export const DeletBtn = styled(IconButton)`
  position: absolute;
  right: -7px;
  top: 19px;
  border: none;
  margin-top: -30px;
  border-radius: 50%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  font-size: 28px;
  font-weight: 400;
  line-height: 15px;
  cursor: pointer;
  color: #ffffff;
  :hover {
    opacity: 0.8;
    background: #000;
  }
  @media (max-width: 400px) {
    background: none;
    right: 10px;
    top: 40px;
    color: black;
  }
`;
export const NameItem = styled(Grid)`
  width: 140px;
  position: absolute;
  left: 75px;
  @media (max-width: 400px) {
    position: none;
    bottom: 50px;
    width: 100%;
    left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
  }
`;
export const PriceItem = styled(Grid)`
  position: absolute;
  right: 30px;
  font-weight: 700;

  @media (max-width: 400px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 10px;
    background: #373737;
    color: #fff;
    width: 80px;
    height: 32px;
    border-radius: 5px;
  }
`;

export const Count = styled(Grid)`
  display: flex;
  width: 50px;
  gap: 5px;
  align-items: center;
  position: absolute;
  justify-content: center;
  right: 110px;
  border: 1px solid black;
  border-radius: 5px;
  .count-btn {
    border: none;
    cursor: pointer;
    background: none;
    width: 10px;
  }
  @media (max-width: 400px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    bottom: 10px;
    color: #fff;
    width: 70px;
    height: 32px;
    border-radius: 5px;
    border: none;
    color: black;
    left: 30px;
  }
`;
