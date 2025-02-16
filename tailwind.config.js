/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gabriela: "Gabriela",
        poppins: "Poppins",
      },
      colors: {
        primary: "#1E444D",
        secondary: "#F3A940",
        paragraph: "#292929",
        background: "#FCF5EB",
        "white-new": "#FBFCF8",
        "sky-blue": "#DDF2FF",
        "grey-primary": "#AAAAAD",
        "grey-second": "#959595",
        "yellow-new": "#E9B854",
        "red-new": "#F50302",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
