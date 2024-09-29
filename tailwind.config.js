/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        killaPrimary: '#FAF0E6', // Lino
        killaSecondary: '#F7F7F7', // Blanco sucio
        killaBackground: '#FAEBD7', // Crema
        killaText: '#333333', // Texto oscuro
        killaHighlight: '#FFFFF0', // Marfil
        killaOffWhite: '#FFFAFA', // Nieve
        killaLinen: '#FFFFFF', // Blanco puro
      },
    },
  },
  plugins: [],
}
