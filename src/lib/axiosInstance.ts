import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const onSend = async (config: InternalAxiosRequestConfig) => {
  return config;
};

const onFulfilled = (response: AxiosResponse) => {
  return response;
};

const onRejected = (error: AxiosError<{ message: string }>) => {
  return Promise.reject(error?.response?.data?.message || error.message);
};

axiosInstance.interceptors.request.use(onSend);
axiosInstance.interceptors.response.use(onFulfilled, onRejected);

export default axiosInstance;
