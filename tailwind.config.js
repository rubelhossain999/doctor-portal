/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          "accent": "#3A4256"
        },
      },
    ],
  },
  themes: {
    mytheme: {},
  },
  plugins: [require("daisyui")],
}
