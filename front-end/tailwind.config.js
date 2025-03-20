/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-custom': '#0A0A0A',
        'violet-custom': '#BF2188',
        'purple-custom': '#F2005F',
        'orange-custom': '#FF4600',
      }
    },
  },
  plugins: [],
}