/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      text : ['Poppins', 'sans-serif']
    },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'desktop': '1280px',
    },
    colors : {
      'cyan' : 'hsl(180, 66%, 49%)',
      'slate-100' : '#f1f5f9',
      'dark-violet' : 'hsl(257, 27%, 26%)',
      'red' : 'hsl(0, 87%, 67%)',
      'gray' : 'hsl(0, 0%, 75%)',
      'grayish-violet' : 'hsl(257, 7%, 63%)',
      'very-dark-blue' : 'hsl(255, 11%, 22%)',
      'very-dark-violet' : 'hsl(260, 8%, 14%)'
    },
    extend: {},
  },
  plugins: [
  ],
}
