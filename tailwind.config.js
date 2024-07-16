/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      fontweight: {
        harline: '100',
        extraLight: ''
      }
    },
    colors:{
      white: '#EEEDED',
      trasnparent: 'transparent',
      almond : '#EEEEEE',
      brown : '#B08968',
      base: '#F7F7F7',
      semibrown: '#523724',
      grey: '#F2F4F8  ',
      border: '#EEEDEB',
      black: '#000',
      gray: '#6B7280',
      borderColor: '#E5E7EB',
    },
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns:{
        '70/30': '70/28',
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
    },
  },
  plugins: [
  ],
}