/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: '#029ee6',
        aside: '#00131c',
        footer: '#494a4a'
      },
      backgroundImage: {
        'poster': "url('../images/security-poster.jpg')",
      },
    },
  },
  plugins: [],
}

