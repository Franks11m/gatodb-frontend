import axios from 'axios';

// Crear una instancia de axios con la URL base de tu backend
const api = axios.create({
  baseURL: 'http://10.0.2.130:3000',  // Cambié localhost por tu IP local
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
