/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#3A4256",

          "neutral": "#2b3440",

          "base-100": "#ffffff",

          "info": "#3abff8",

          "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

