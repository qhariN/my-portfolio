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
      zinc: '#18181B',
      red: '#C74375',
      blue: '#0F4C81',
      orchid: '#AD5E99',
      emerald: '#009473',
      purple: '#5A5B9F'
    }
  },
  plugins: [],
  darkMode: 'class'
}
