import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-front.daniloaparecido.com.br',
  timeout: 10000, // tempo limite de 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
