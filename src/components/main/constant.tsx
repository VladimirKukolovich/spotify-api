import axios, { AxiosHeaders } from 'axios';

const token = localStorage.getItem('token');

export const axiosApiInstance = axios.create();
axiosApiInstance.interceptors.request.use(
  async (config) => {
    if (token) {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
