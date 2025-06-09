// src/api.js
import axios from "axios";

const API_URL = "https://apiwebsite-production.up.railway.app/api/v1/slider"; // Sesuaikan dengan URL backend
// const API_URL = "http://localhost:5000/api/v1/slider";
export const getAllSlider = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`, {});
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
