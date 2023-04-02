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
      coral: '#FF7F50',
      neutral: '#404040',
      gray: '#9CA3AF',
      navy: '#00ABB3',
      yellow: '#FFD700',
      zinc: '#18181B'
    }
  },
  plugins: [],
  darkMode: 'class'
}
