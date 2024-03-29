/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#EEEED2",
        100: "#FFFFE1",
        200: "#F7F7DA",
        800: "#909080",
        700: "#8F8F83",
      },
      black: {
        500: "#3f3f3f",
        800: "#262626",
        900: "#212121",
      },
    },
  },
  plugins: [],
};
