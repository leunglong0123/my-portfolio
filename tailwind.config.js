/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    '@tailwindcss/typography',
  ],
}

