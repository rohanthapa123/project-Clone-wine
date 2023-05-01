/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'wine' : "url('/src/assets/wine.webp')",
        'winetwo' : "url('/src/assets/wine2.jpg')",
      }
    },
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }],
}

