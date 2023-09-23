/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.html',
    '*.html',
    'project.html'
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
      // 'back-header1': "url('asset/bg/bg2.png')",
      // 'back-header2': "url('asset/bg/bg5.png')",
      // 'img-bg1': "url('aseet/bg/bg5.png')",
    },
  },
  plugins: [],
}
