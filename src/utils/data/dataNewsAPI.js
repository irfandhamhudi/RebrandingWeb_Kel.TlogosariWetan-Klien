// src/api.js
import axios from "axios";

const API_URL = "https://apiwebsite-production.up.railway.app/api/v1/data"; // Sesuaikan dengan URL backend
// const API_URL = "http://localhost:5000/api/v1/data";

export const createData = async (formData) => {
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

export const getAllData = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`, {});
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getDataByBidang = async (bidang) => {
  try {
    const response = await axios.get(`${API_URL}/bidang/${bidang}`, {});
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getLatestData = async () => {
  try {
    const response = await axios.get(`${API_URL}/latest`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getDatabySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/slug/${slug}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
