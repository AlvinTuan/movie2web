/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#f2f2f2",
        secondary: "#02E7F5",
      },
    },
  },
  plugins: [],
};
