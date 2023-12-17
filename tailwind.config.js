const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  
      fontFamily: {
        lato: ['Lato', 'system-ui'],
        montserrat: ['Montserrat',"sans-serif"],
      },
      
  
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      bg:{
        white:'#FDFCFB',
        dark:'#F5F6F6',
      },
      primary: "#f5ebe0",
      secondary: "#e3d5ca",
      tertiary: "#d5bdaf",
      text:{
        primary: '#1A242A',
        secondary:'#445F6F',
        tertiary:'#7697AB',
        disabled: '#ABAEB0',
        white: '#FFFFFF',
        stroke: '#BACBD5',
      },
      dividers: '#DDE5EA',
      "interface-hover":"#E3E9EC",
      disabled: '#DDE5EA',
      stroke: '#BACBD5',
      accent1: {
        1000: '#570421',
        900: '#7A081A',
        800: '#930E18',
        700: '#B71616',
        600: '#DB2E20',
        500: '#FF4C2C',
        400: '#FF8560',
        300: '#FFA780',
        200: '#FFCBAA',
        100: '#FFE8D4',
      },
      accent2: {
        1000: '#030A4A',
        900: '#071268',
        800: '#0B1B7D',
        700: '#12289C',
        600: '#1B37BA',
        500: '#2549D9',
        400: '#5777E8',
        300: '#7A97F3',
        200: '#A7BDFB',
        100: '#D3DFFD',
      },
      successful: {
        1000: '#013E4A',
        900: '#026765',
        800: '#047D6E',
        700: '#079B7B',
        600: '#0AB982',
        500: '#0FD884',
        400: '#45E793',
        300: '#6BF39F',
        200: '#9DFBB8',
        100: '#CDFDD6',
      },
      error: {
        1000: '#56063A',
        900: '#780D3D',
        800: '#921642',
        700: '#B52349',
        600: '#D8334F',
        500: '#FC4655',
        400: '#FD7574',
        300: '#FE9A8F',
        200: '#FEC3B5',
        100: '#FEE4DA',
      },
      warning: {
        1000: '#573F03',
        900: '#7A5F07',
        800: '#93760C',
        700: '#B79614',
        600: '#DBB81D',
        500: '#FFDB28',
        400: '#FFE65D',
        300: '#FFED7E',
        200: '#FFF5A9',
        100: '#FFFAD3',
      },
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    '@tailwindcss/typography',
  ],
}

