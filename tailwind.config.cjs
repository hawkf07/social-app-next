/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "768px" },
      },
      fontFamily: {
        roboto: "'Roboto',sans-serif",
      },
      backgroundColor: {
        "dark-primary": "#121212"
      }
    },
  },
  plugins: [],
};
