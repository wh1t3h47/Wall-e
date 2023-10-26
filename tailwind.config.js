const { eveWidth, walleSize, eveHeight } = require("./src/utils/theme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        eveWidth,
        walleSize,
      },
      height: {
        walleSize,
        eveHeight,
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 0.3,
          },
          "50%": {
            opacity: 0.1,
          },
        },
      },
    },
  },
  plugins: [],
};
