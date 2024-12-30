/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
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
    },
  },
  plugins: [],
};
