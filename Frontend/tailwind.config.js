/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        numans: ['"Numans"', 'sans-serif'],
        kotta: ['"Kotta One"', 'serif'],
        Darker: ['"Darker Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
