import axios from 'axios';

const baseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333',
});

export default baseApi;
