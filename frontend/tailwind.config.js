/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FFFFFF',
          100: '#F2EEEA',
          200: '#CDC7BD',
          300: '#B8B2A9',
          400: '#A09A91',
        },
        terracotta: {
          50:  '#FEF4F4',
          100: '#FDDADA',
          200: '#F59898',
          300: '#E05050',
          400: '#C52424',
          500: '#A30404',
          600: '#590707',
          700: '#430505',
          800: '#2C0303',
          900: '#1A0202',
        },
        espresso: {
          50:  '#F3F1EF',
          100: '#E4E1DC',
          200: '#CAC4BC',
          300: '#ADA79F',
          400: '#908880',
          500: '#736D66',
          600: '#504B46',
          700: '#302C2A',
          800: '#1A1615',
          900: '#590707',
          950: '#04090C',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
        sans: ['"Sora"', '"Segoe UI"', 'sans-serif'],
      },
      backgroundImage: {
        'grain-paper':
          "radial-gradient(rgba(89,7,7,0.06) 0.5px, transparent 0.5px), radial-gradient(rgba(89,7,7,0.05) 0.5px, transparent 0.5px)",
        'hero-veil': 'linear-gradient(120deg, rgba(89,7,7,0.82) 0%, rgba(89,7,7,0.45) 42%, rgba(163,4,4,0.60) 100%)',
      },
    },
  },
  plugins: [],
};
