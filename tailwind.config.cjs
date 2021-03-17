const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.{html,svelte}"],
    options: {
      safelist: [/^texture-/, /svelte-announcer/]
    }
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        'light-blue': colors.lightBlue,
        'snowball-blue': '#33A9FF',
        'snowball-lightblue': '#EBF6FF',
        'snowball-darkblue': '#162A46',
      },
      textColor: {
        'darkblue': '#162A46'
      },
      fontSize:{
        '1xl': '1.375rem',
        '5xl': '3.5rem',
       },
    },
    fontFamily: {
      'sans': ['Montserrat', 'system-ui'],
     },
     
  },
};
