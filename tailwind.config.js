/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens : {
      'md' : '350px',
      'lg':'655px',
      'xl' : '1440px'

    },
    extend: {
      colors : {
        'blue-color' : '#212136',
        'green-color' : '#04CA00',
        'light-blue-color' : '#373757'
      },
    },
  },
  plugins: [],
}
