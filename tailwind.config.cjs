/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      neutral: '#404040',
      gray: '#9CA3AF',
      navy: '#00ABB3',
      mimosa: '#F0C05A',
      orange: '#E2583E',
      zinc: '#080808',
      red: '#C74375',
      blue: '#2B70C9',
      orchid: '#AD5E99',
      emerald: '#009473',
      purple: '#5A5B9F',
      casper: '#B7CBD9'
    }
  },
  plugins: [],
  darkMode: 'class'
}
