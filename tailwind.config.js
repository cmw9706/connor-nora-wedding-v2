/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
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
