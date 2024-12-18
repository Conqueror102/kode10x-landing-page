/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        pc: { max: "906px" },
        tablet: { max: "768px" },
        mobileTab: { max: "620px" },
        mobile: { max: "425px" },
        phone: { max: "375px" },
        sphone: { max: "350px" },
        radio: { max: "320px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
