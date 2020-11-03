const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        'mia-green': '#858740',
        'mia-green-2': '#3D5E57',
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      'sans': ['Fira Sans', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
  },
  variants: {},
  plugins: [],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk', 'src/**/*.js'],
  } : {}
}