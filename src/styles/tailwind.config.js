/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        branch: {
          primary: {
            light: '#0ABF53', // Light mode green
            dark: '#00D775', // Dark mode green
          },
          background: {
            light: '#FFFFFF',
            dark: '#121212',
          },
          card: {
            light: '#F8F8F8',
            dark: '#1E1E1E',
          },
          text: {
            light: '#333333',
            dark: '#FFFFFF',
          },
          secondaryText: {
            light: '#6E6E6E',
            dark: '#B0B0B0',
          },
          border: {
            light: '#E0E0E0',
            dark: '#333333',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}