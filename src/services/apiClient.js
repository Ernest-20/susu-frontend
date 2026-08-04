import axios from "axios";

// VITE_API_BASE_URL will come from .env file once the backend exists.
const apiClient = axios.create({
    baseURL: import.meta.env.VIITE_API_BASE_URL || "http://localhost:5173/api",
    headers:{
        "Content-Type": "application/json",
    },
});

export default apiClient;