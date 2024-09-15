/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xxs: '380px',
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '768px',
      lg: '768px',
      xl: '768px',
      xxl: '768px',
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};