module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        DEFAULT: "#001489",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
