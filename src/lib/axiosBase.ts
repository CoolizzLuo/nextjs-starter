import axios, { type AxiosRequestConfig } from 'axios';

export const createBaseAxios = (config?: AxiosRequestConfig) => {
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    ...config,
  });

  instance.interceptors.request.use(
    (req) => req,
    (err) => {
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      return Promise.reject(err);
    }
  );

  return instance;
};
