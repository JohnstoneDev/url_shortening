/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      main : ['Work Sans', 'sans-serif'],
      headings : ['Archivo', 'sans-serif'],
      text : ['Ranade', 'sans-serif']
    },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
