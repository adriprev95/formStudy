/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'mypallete':{
          100:"#4a506a",
          200:"#c58d91",
          300:"#dfb7ab",
          400:"#f0d9b6",
          500:"#d3c5ae"
      }
    },
    },
  },
  plugins: [],
}