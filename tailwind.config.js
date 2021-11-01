module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      night: {
        300: '#0A0B10'
      },
      white: {
        100: '#afabab'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
