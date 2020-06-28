const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./colors')

module.exports = {
  purge: ['./public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
    colors,
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
}
