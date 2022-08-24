import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Grid)`
  display: flex;
  align-content: flex-end;
  justify-content: center;
  width: 100%;
  height: 35px;
  align-items: center;
  background: #eeeeee;
  bottom: 0;
  z-index: 1;
  @media (max-width: 500px) {
    background: #e5e5e5;
    position: fixed;
    bottom: 0%;
  }
`;
export const Text = styled(Typography)`
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
