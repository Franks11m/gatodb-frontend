// src/api/api.ts
import axios from 'axios';

// Usar la IP local de tu máquina
const api = axios.create({
  baseURL: 'http://10.0.5.219:3000/api',  // Conéctate a la IP local de tu computadora
});

export default api;
