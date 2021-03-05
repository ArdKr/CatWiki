module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mystery: "Mystery Quest",
        DEFAULT: "Montserrat",
      },
      colors: {
        brown: {
          light: "#E3E1DC",
          dark: "#291507",
        },
      },
      borderRadius: {
        "4xl": "42px",
      },
      maxWidth: {
        smaller: "100px",
        small: "180px",
      },
      minHeight: {
        small: "150px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
