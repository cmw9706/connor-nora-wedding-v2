/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    colors: {
      "primary-green": "#004643",
      "accent-green": "#ABD1C6",
      "primary-light": "#FFFFFE",
      "primary-dark": "#001E1D",
      "primary-gold": "#F9BC60",
    },
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        margin: "margin",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
