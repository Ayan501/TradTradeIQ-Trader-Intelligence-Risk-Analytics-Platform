import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://tradtradeiq-trader-intelligence-risk.onrender.com",
});

export default api;
