/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {},
      colors: {
        "very-light-grayish-blue": "hsl(240, 78%, 98%)",
        "light-grayish-blue": "hsl(234, 14%, 74%)",
        "grayish-blue": "hsl(233, 13%, 49%)",
        "dark-grayish-blue": "hsl(232, 13%, 33%)",
        "light-blue": "hsl(236, 72%, 79%)",
        "medium-blue-purple": "hsl(237, 63%, 64%)",
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      linearGradientColors: {
        "custom-gradient": ["hsl(236, 72%, 79%)", "hsl(237, 63%, 64%)"],
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sedgwick: ["Sedgwick Ave Display", "cursive"],
      },
    },
  },
  plugins: [],
};
