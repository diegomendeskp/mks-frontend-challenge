import axios from 'axios';

export const productService = axios.create({
  baseURL: 'https://mks-frontend-challenge-api.herokuapp.com',
});