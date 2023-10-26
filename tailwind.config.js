/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        lightGreen: '#4DF09C', // base color
        green: '#64B089',
        darkGreen: '#5C7066',
        brown: '#9B6B65',
        redBurn: '#F05E4D'
      }
    },
  },
  plugins: [],
}

