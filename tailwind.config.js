/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#011a27',
        'blueberry': '#063852',
        'tangerine': '#f0810f',
        'daffodil': '#e6df44',
        'white': '#fff',
        'blueberry-light': 'rgba(6, 56, 82, 0.6)',
    },
  },
  plugins: [],
}
}