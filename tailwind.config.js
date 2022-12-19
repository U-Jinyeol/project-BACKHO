module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      "main-bg": "url('@/assets/images/home/home-bg.png')",
      "select-color-yellow": "url('@/assets/images/home/select-color-yellow.png')",
      "select-color-white": "url('@/assets/images/home/select-color-white.png')",
      "select-animal-tiger": "url('@/assets/images/home/select-animal-tiger.webp')",
      "select-animal-rabbit": "url('@/assets/images/home/select-animal-rabbit.webp')",
      "select-result-tiger": "url('@/assets/images/home/select-result-tiger.webp')",
      "select-result-rabbit": "url('@/assets/images/home/select-result-rabbit.webp')",
      "card-bg-yellow": "url('@/assets/images/card/card-bg-yellow.webp')",
      "card-bg-white": "url('@/assets/images/card/card-bg-white.webp')",
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
        500: "#C9F3E3",
        600: "#10593d",
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
