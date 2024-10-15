/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1abc9c",
        secondary: "#3498db",
      },
    },
  },
  plugins: [],
};
