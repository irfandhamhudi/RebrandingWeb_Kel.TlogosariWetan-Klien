/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C0392B",
        secondary: "#C70909",
        bg1: "#F9F9F9",
        bg2: "#E5E5E5",
        font1: "#242424",
        font2: "#565656",
        font3: "#C7C7C7",
      },
    },
  },
  plugins: [],
};
