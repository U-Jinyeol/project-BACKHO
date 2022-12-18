module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      "main-bg": "url('./src/assets/image/main/main-bg.webp')",
      "select-color-yellow": "url('./src/assets/image/main/select-color-yellow.png')",
      "select-color-white": "url('./src/assets/image/main/select-color-white.png')",
      "select-animal-tiger": "url('./src/assets/image/main/select-animal-tiger.webp')",
      "select-animal-rabbit": "url('./src/assets/image/main/select-animal-rabbit.webp')",
      "select-result-tiger": "url('./src/assets/image/main/select-result-tiger.webp')",
      "select-result-rabbit": "url('./src/assets/image/main/select-result-rabbit.webp')",
    },
    fontFamily: {
      Rubik: ["Rubik Gemstones"],
      Saemaul: ["HSSaemaul-Regular"],
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      green: {
        100: "#c9f3e3",
        200: "#2a825c",
        300: "#387f1b",
        400: "#0e4c34",
      },
      red: {
        100: "#f3cbc9",
        200: "#ff7171",
        300: "#7f281b",
        400: "#4d190e",
        500: "#bf6e24",
        600: "#ba4432",
      },
      yellow: {
        100: "#fff3cf",
        200: "#f9dd51",
      },
      gray: {
        100: "#cfcfcf",
        200: "#b1b1b1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
