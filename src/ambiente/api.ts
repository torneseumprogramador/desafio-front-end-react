import axios from 'axios';

const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIwOTQ3OTMxLCJleHAiOjE3MjEwMzQzMzF9.PeCIS2Y4vuy5C5TmKwQ2v_HUDJZ3dylwhYhBKFZyaVI";
const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000, // tempo limite de 10 segundos
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
});

export default api;
