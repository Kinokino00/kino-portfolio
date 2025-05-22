/** @type {import('tailwindcss').Config} */
// const { createThemes } = require("tw-colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '630px',
      'lg': '840px',
      'xl': '980px',
      '2xl': '1440px',  // 從這開始調
      '3xl': '1600px'
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem'  /* 24px */,
      '3xl': '1.75rem' /* 28px */,
      '4xl': '1.875rem'/* 30px */,
      '5xl': '2rem'    /* 32px */,
      '6xl': '2.25rem' /* 36px */,
      '7xl': '2.5rem'  /* 40px */
    },
    colors: {
      primary: {
        400: '#FFD0A6',
        600: '#F38226',
        700: '#EE710B'
      },
      secondary: {
        400: '#CEEAEC',
        500: '#91BDB7',
        900: '#5FA399'
      },
      tertiary: {
        500: '#F59498'
      },
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent'
    }
  },
  // plugins: [
  //   createThemes({
  //   })
  // ],
};
