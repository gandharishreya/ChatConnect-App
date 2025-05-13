import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE==="development" ? "http://localhost:5001/api" :"/api",
  //baseURL: import.meta.env.MODE==="development" ? "https://chatconnect-app-backend.onrender.com" : "/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );