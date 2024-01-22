/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '912px',
        'lg': '1024px',
      },
      colors: {
        white:{
          main: "#ffffff",
          bg: "#fefefe"
        },
        black: {
          main: "#1d1e20",
          text: "#31373D"
        },
        text:{
          dark: "#1d1e20",
          main: "#31373D",
          light: "#555e67"
        },
      }
    },
  },
  plugins: [],
}

