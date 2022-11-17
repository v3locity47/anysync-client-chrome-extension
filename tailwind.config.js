/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#EEEED2",
        dark: "#909080",
      },
      black: {
        800: "#262626",
        900: "#212121",
      },
    },
  },
  plugins: [],
};
