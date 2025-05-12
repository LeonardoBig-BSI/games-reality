/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorButton: '#1828b4',
        colorButtonHover: '#101e9e',
      },
    },
  },
  plugins: [],
}