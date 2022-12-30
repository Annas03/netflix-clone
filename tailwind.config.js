/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens:{
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'background-hero': "url('./assets/background-hero.svg')",
      },
      colors:{
        'background':'#1A1A1A',
      },
      boxShadow:{
        'Shadow':'inset 0px 0px 50px rgb(26 26 26 / 0.9)',
      },
      fontSize:{
        ssm:"0.4rem",
      }
    },
  },
  plugins: [],
}
