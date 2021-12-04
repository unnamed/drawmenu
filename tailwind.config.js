module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      night: {
        200: '#13151D',
        300: '#0A0B10',
        400: '#0A0B10'
      },
      white: {
        100: '#afabab'
      },
      gray: {
        300: '#3A3F4B'
      }
    },
    fontFamily: {
      sans: 'Rubik'
    },
    flex: {
      '1': '1 1 0%',
      '2/5': '.4 .4 0%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
