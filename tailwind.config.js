/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#5eaeff",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0"
      }
    },
  },
  plugins: [],
}
