/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ad': "url('./src/assets/bg.png')",
      },
      screens: {
        lg: '1140px',
      },
      fontFamily: {
        poppins: 'Poppins, sans- serif',
      },
      container: {
        center: true,
        screens: {
          lg: '1140px',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}