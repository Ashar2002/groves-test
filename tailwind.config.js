/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(97deg, #283606, #0F1500)",
        "custom-gradient2": "linear-gradient(97deg, #283606 , #0F1500)",
      },
      colors: {
        customGreen: "#283606",
        customBlack: "#0F1500",
        brown1: "#AD8749",
        brown2: "#DCBB75",
      },
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      playfair: ["var(--font-pf)"],
    },
  },
  plugins: [nextui()],
};
