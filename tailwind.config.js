/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        zoomOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(.7)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        zoomOut: "zoomOut 200ms ease-in-out",
      },
    },
  },
  plugins: [],
};
