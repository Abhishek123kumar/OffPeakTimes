/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}'], // adjust paths as needed
  theme: {
    extend: {
      colors: {
        brightColor: "#F4511F",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
      },
    },
  },
  plugins: [],
}
