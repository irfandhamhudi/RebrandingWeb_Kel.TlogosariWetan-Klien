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

// Fungsi untuk mendapatkan data berdasarkan title
export const getDataByTitle = async (title) => {
  try {
    // Validasi input
    if (!title || typeof title !== "string") {
      throw new Error("Judul tidak valid. Harap masukkan judul yang benar.");
    }

    // Format title: ganti spasi dengan tanda hubung (-)
    const formattedTitle = title.trim().replace(/\s+/g, "-");

    // Kirim request ke backend
    const response = await axios.get(`${API_URL}/${formattedTitle}`, {});

    // Jika data ditemukan, kembalikan data
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message || "Data tidak ditemukan.");
    }
  } catch (error) {
    // Tangani error dengan lebih spesifik
    if (error.response) {
      // Error dari server (contoh: 404, 500)
      throw new Error(
        error.response.data.message || "Terjadi kesalahan pada server."
      );
    } else if (error.request) {
      // Tidak ada respons dari server
      throw new Error(
        "Tidak ada respons dari server. Periksa koneksi internet Anda."
      );
    } else {
      // Error lainnya (contoh: validasi input)
      throw new Error(error.message || "Terjadi kesalahan.");
    }
  }
};
