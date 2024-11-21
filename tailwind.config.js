/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './public/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier New"', 'monospace'], 
      },
    },
  },
  plugins: [],
};
