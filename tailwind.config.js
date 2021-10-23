module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bl: "#0c5498",
        gr: "#91c653",
        sk: "#248de4",
        sl:'#eff4ff',
        cs:'#f4f5f7'
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
