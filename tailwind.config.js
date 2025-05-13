/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New color scheme
        'dark-teal': '#003135',
        'teal': '#024950',
        'rust': '#964734',
        'turquoise': '#0FA4AF',
        'sky': '#AFDDE5',
        
        // For backwards compatibility and semantic usage
        primary: '#003135',
        'primary-dark': '#002225',
        'primary-light': '#024950',
        secondary: '#0FA4AF',
        accent: '#964734',
        background: '#AFDDE5',
      }
    },
  },
  plugins: [],
}