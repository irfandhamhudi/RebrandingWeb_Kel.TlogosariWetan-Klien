// src/api.js
import axios from "axios";

const API_URL = "https://apiwebsite-production.up.railway.app/api/v1/bidang";
// const API_URL = "http://localhost:5000/api/v1/bidang";

export const createBidang = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAllBidang = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`, {});
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
