/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent-red': '#DC5A4B',
        'accent-beige': '#F0E1C8',
      },
    },
  },
  plugins: [],
};
