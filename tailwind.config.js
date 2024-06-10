export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      'sora':['Sora', 'sans-serif'],
    },
    extend: {
      fontFamily:{
        outfit:['Outfit'],
        sora:['Sora'],
      },
      boxShadow:{
        out:'rgba(0,0,00.19) 0px 1px 10px, rgba(0,0,0,0.23) 0px 0px 6px' 
      }
    },
  },
  plugins: [],
}