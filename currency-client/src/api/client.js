import axios from 'axios';

const baseURL = process.env.VITE_API_URL || 'http://localhost:5000/api';

export default axios.create({
  baseURL,
  baseURL,
});
