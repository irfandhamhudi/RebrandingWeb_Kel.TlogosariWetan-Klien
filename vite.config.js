import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Ganti dengan port yang Anda inginkan
    host: "0.0.0.0", // Ini memungkinkan akses dari jaringan luar (opsional)
  },
});
