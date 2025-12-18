import axios from 'axios';

const API_BASE_URL = 'https://cofex-2.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const productAPI = {
  getAllProducts: () => api.get('/products'),
  getProductById: (id) => api.get(`/products/${id}`),
  createProduct: (product) => api.post('/products', product),
  updateProduct: (id, product) => api.put(`/products/${id}`, product),
  deleteProduct: (id) => api.delete(`/products/${id}`)
};

export default api;
