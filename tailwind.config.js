/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        exo: {
          dark: '#121412',
          deep: '#1A1D1A',
          green: '#2D5A27',
          lime: '#A3E635',
          muted: '#889988',
        }
      }
    },
  },
  plugins: [],
}
