// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this path is correct
  ],
  theme: {
    extend: {},
  },
  plugins: ["tailwindcss-animate"],
}