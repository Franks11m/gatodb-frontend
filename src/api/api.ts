import axios from 'axios';

// Crear una instancia de axios con la URL base de tu backend
const api = axios.create({
<<<<<<< Updated upstream
  baseURL: 'http://10.0.6.239:3000',  // Cambié localhost por tu IP local
=======
  baseURL: 'http://10.0.7.9:3000',  // Cambié localhost por tu IP local
>>>>>>> Stashed changes
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
