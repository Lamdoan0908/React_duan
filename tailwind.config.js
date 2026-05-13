/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "#454747",
        "on-surface-variant": "#4c4546",
        outline: "#7e7576",
        primary: "#000000",
        background: "#f9f9f9",
        surface: "#f9f9f9",
        "surface-container": "#eeeeee",
        "surface-container-low": "#f3f3f3",
        "outline-variant": "#cfc4c5",
        "on-background": "#1b1b1b",
        tertiary: "#000000",
        // Bạn copy thêm các mã màu khác từ thẻ <script id="tailwind-config"> vào đây
      },
      spacing: {
        gutter: "24px",
        "margin-mobile": "20px",
        "container-max-width": "1440px",
        "section-gap": "120px",
        "margin-desktop": "64px",
      },
      fontFamily: {
        "body-md": ["Manrope", "sans-serif"],
        "display-lg": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "label-uppercase": ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
