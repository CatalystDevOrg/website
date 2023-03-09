/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#edfff4",
          100: "#d5ffe7",
          200: "#aeffcf",
          300: "#6fffac",
          400: "#4dff95",
          500: "#00e95d",
          600: "#00c24a",
          700: "#00983d",
          800: "#047735",
          900: "#06612e",
        },
      },
    },
  },
  plugins: [],
};
