import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  withCredentials: true,
  withXSRFToken: true,
});

// export const setCSRF = async () => API.get("/sanctum/csrf-cookie");

export default API;
