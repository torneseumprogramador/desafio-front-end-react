import axios from 'axios';

const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIwODY0NDE5LCJleHAiOjE3MjA5NTA4MTl9.gnHm5g3ACEwmgl9SMpqdQVgw0J-GYqRRABjH-Om0m18";
const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000, // tempo limite de 10 segundos
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
});

export default api;
