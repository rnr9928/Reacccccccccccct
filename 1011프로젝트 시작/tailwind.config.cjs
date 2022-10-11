/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'xl' : {'max': '1200px'},
      'lg' : {'max': '999px'},
      'md' : {'max': '777px'},
      'sm' : {'max': '555px'},
      'xsm' : {'max': '400px'},
    }
  },
  plugins: [],
}
