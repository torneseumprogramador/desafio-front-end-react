import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000, // tempo limite de 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
