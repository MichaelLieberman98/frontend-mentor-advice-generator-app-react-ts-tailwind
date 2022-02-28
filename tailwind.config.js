module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    // screens: {
    //   // 'sm': '375',
    //   // 'xl': '800'
    // }
  },
  plugins: [],
}