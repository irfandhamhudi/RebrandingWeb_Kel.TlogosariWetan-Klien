// src/api.js
import axios from "axios";

// const API_URL = "http://localhost:5000/api/v1/galeri";
const API_URL = "https://apiwebsite-production.up.railway.app/api/v1/galeri";

export const uploadPhoto = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getPhotoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get/${id}`);
    return response.data.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAllPhoto = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deletePhoto = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
