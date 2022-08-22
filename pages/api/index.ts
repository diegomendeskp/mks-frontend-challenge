import axios from 'axios';

export const apiProducts = axios.create({
  baseURL: 'https://mks-frontend-challenge-api.herokuapp.com',
});