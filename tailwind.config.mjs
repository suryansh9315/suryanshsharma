/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        suiss: ["var(--font-suiss)"],
        poppins: ["var(--font-poppins)"],
        bella: ["var(--font-bella)"],
        corir: ["var(--font-corir)"],
        oswald: ["var(--font-oswald)"],
        quick: ["var(--font-quick)"],
        quickLight: ["var(--font-quickLight)"],
      },
      animation: {
        text: "text 3s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
