import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', 
});

API.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
