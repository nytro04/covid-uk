const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    mode: 'layers',
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        'primary-dark': '#bb1515',
        'primary': '#FFEFEF',
        'primary-light': '#FAFAFA',
        'sec': '#1C4155',
        'sec-light': '#9CC2D7',
        'tertiary': '#333333',
        'tertiary-light': '#5F5F5F',

      }
    }
  },
  variants: {
    extend: {}
  }
}
