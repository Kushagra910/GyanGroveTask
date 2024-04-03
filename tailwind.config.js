/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "edu-sa": ["Edu SA Beginner", "cursive"],
        mono: ["Roboto Mono", "monospace"],
      },
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
      colors:{
        fontHeading:' #1E2022',
        fontSubtitle : '#989090',
        backgroundColor : '#ffffff',
        logoColor : '#CF2D2D',
        borderColor : '#B0BABF'
      }
    },
  },
  plugins: [],
}

