import axios from 'axios';
import environment from 'config/environment';

const axiosInstance = axios.create({
  baseURL: `${environment?.VITE_API_BASE_URL}`,
});

//  Interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.authorId = `1234567890`;

    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
