/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        noFont: "sans-serif",
        shoulder:"Big Shoulders Display",
        leica:"Lexend Deca"
      },
      colors:{
        Orange: "hsl(31, 77%, 52%)",
        Cyan:"hsl(184, 100%, 22%)",
        Green:"hsl(179, 100%, 13%)",
        Paragraph:"hsla(0, 0%, 100%, 0.75)",
        Back:"hsl(0, 0%, 95%)"
      },
    },
  },
  plugins: [],
};
