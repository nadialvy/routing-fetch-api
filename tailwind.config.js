/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          100: "#D3E2EB",
          200: "##26a0da", //gradient 2
          400: "#2760F2",
          600: "#133795",
        },
        darkBlue: {
          300: "#314755", //gradient 1
        }
      }
    },
  },
  plugins: [],
}
