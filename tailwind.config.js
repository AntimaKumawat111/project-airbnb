module.exports = {
  // content: ["./*.html", "./**/*.html"], // Ensure all HTML files are included
  // content: ["./views/*.html"],
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
};
