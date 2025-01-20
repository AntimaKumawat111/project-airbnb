module.exports = {
  // content: ["./*.html", "./**/*.html"], // Ensure all HTML files are included
  content: ["./views/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
};
