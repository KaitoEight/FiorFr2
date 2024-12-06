/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#ff69b4", // Màu hồng sáng
        black: "#000000", // Màu đen
        background: "#000000", // Gán màu nền thành đen
        foreground: "#ff69b4", // Gán màu chữ thành hồng
      },
    },
  },
  plugins: [],
};
