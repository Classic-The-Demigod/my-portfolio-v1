/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0A0A0A",
        "accent": "#D3E97A",
        "dark-50": "#1A1A1A",
      },
      fontFamily: {
        primary: ["Oxanium"],
        secondary: ["Clash Display"]
      },
    },
  },
  plugins: [],
};
