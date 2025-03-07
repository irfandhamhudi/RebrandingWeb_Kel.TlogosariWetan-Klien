// src/api.js
import axios from "axios";

const API_URL = "https://api-website-nine.vercel.app/api/v1/slider"; // Sesuaikan dengan URL backend

export const getAllSlider = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
