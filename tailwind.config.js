/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#D2B48C',
          DEFAULT: '#6F4E37',
          dark: '#4B2E23',
        },
      },
    },
  },
  plugins: [],
}

