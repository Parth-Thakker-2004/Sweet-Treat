/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New cream/beige color scheme
        'cream': '#FDF5E6',
        'sand': '#E6D5AC',
        'coffee': '#967259',
        'mocha': '#634832',
        'vanilla': '#F5E6D3',
        
        // For backwards compatibility and semantic usage
        primary: '#634832',
        'primary-dark': '#4A3526',
        'primary-light': '#967259',
        secondary: '#E6D5AC',
        accent: '#967259',
        background: '#FDF5E6',
      }
    },
  },
  plugins: [],
}