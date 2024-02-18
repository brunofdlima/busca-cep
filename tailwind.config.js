/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        76: "20rem",
      },
    },
    screens: {
      switch: "920px",
    },
  },
  plugins: [],
};
