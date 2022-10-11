/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "768px" },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
