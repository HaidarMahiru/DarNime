/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#121212',
          800: '#1F1F1F',
          700: '#2A2A2A',
          600: '#3A3A3A',
        },
        purple: {
          400: '#A855F7',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
      },
    },
  },
  plugins: [],
}