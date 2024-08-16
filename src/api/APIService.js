import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL || "https://api.example.com",
  timeout: 10000,
  headers: {
    "ug-proxy": "support",
  },
});

apiClient.interceptors.request.use(
  function (config) {
    const authObject = JSON.parse(localStorage.getItem("supportConfig"));
    if (authObject && authObject.token) {
      config.headers.authorization = `Bearer ${authObject.token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => handleApiError(error)
);

const handleApiError = (error) => {
  if (error.response) {
    console.error("API Error:", error.response.data);
  } else if (error.request) {
    console.error("Network Error:", error.request);
  } else {
    console.error("Error:", error.message);
  }
  return Promise.reject(error);
};

export const get = (url, config = {}) => apiClient.get(url, config);

export const post = (url, payload, config = {}) =>
  apiClient.post(url, payload, config);

export const put = (url, data, config = {}) => apiClient.put(url, data, config);

export const del = (url, config = {}) => apiClient.delete(url, config);

export default {
  get,
  post,
  put,
  del,
};
