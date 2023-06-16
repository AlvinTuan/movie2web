/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      colors: {
        backgroudColor: "#292828",
        primary: "#ffffff",
        secondary: "#02E7F5",
      },
    },
  },
  plugins: [],
};
