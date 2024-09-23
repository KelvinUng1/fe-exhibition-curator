module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8', 
        secondary: '#F9FAFB', 
        accent: '#FF5722', 
        dark: '#111827', 
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        128: '32rem', 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};