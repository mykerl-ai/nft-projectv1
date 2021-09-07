const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      white : colors.white,
      glass: 'rgba(169, 222, 238, 0.1)',
      darkblue: '#123B53;',
      lightblue: '#A9DEEE',
      
    },
    fontFamily: {
      sans: ['Maven Pro', 'Nunito Sans'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
    zIndex: {
      '-1': '-1',
     }
      }
    },
  },
  variants: {
    extend: {
        backgroundColor: ['active'],
        borderColor: ['active']
      },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
