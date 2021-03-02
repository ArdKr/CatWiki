module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mystery: "Mystery Quest",
      },
      colors: {
        brown: {
          dark: "#291507",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
