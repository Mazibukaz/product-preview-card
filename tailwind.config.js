/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    fontFamily:{
      'montserrat': ['Montserrat','Georgia'],
      'fraunces': ['Fraunces', 'ui-serif']
    },
    screens:{
      'md': '768px'
      // => @media (min-width: 768px)
    },
    extend: {},
  },
  plugins: [],
}

