// services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getPosts = async () => {
  const res = await axios.get(`${API_URL}/posts`);
  return res.data;
};

export const getPostById = async (id) => {
  const res = await axios.get(`${API_URL}/posts/${id}`);
  return res.data;
};
