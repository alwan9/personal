/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.html',
  ],
  theme: {
    screens: {
      xs1: "270px",
      sm1: "400px",
      md1: "620px",
      lg1: "776px",
      xl: "1240px",
    },
    backgroundImage: {
      'bg-header': "url('asset/bg/bg2.png')",
    },
  },
  plugins: [],
}
