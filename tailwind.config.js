/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hazy-sky': {
          DEFAULT: '#5376C0',
          50: '#C9D4EB',
          100: '#BCC9E6',
          200: '#A2B4DD',
          300: '#889FD3',
          400: '#6D8BCA',
          500: '#5376C0',
          600: '#3B5BA0',
          700: '#2C4477',
          800: '#1D2C4E',
          900: '#0E1525',
          950: '#060A11'
        }
      }
    }
  },
  plugins: []
}
