/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    screens: {
      'xsm': '400px',
      'xsm-max':  {'max': '400px'},
      'sm': '640px',
      'sm-max': {'max': '640px'},
      'md': '768px',
      'md-max': { 'max': '768px'},
      'lg': '1024px',
      'lg-max': { 'max': '1024px'},
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      cabinet_t: ["cabinet_t", "sans-serif"],
      cabinet_l: ["cabinet_l", "sans-serif"],
      cabinet_r: ["cabinet_r", "sans-serif"],
      cabinet_m: ["cabinet_m", "sans-serif"],
      cabinet_b: ["cabinet_b", "sans-serif"],
      cabinet_eb: ["cabinet_eb", "sans-serif"],
      cabinet_black: ["cabinet_black", "sans-serif"],
    },
  },
  plugins: [],
};

