const plugin = require('tailwindcss/plugin')
const gridAutoFit = plugin(function({ matchUtilities, theme }) {
   matchUtilities(
     {
       'grid-auto-fit': (value) => ({
         gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`
       }),
     },
     { values: theme('gridAutoFit') }
   )
 },
   {
     theme: {
      gridAutoFit: {
         'DEFAULT': '16rem',
         'xs': '12rem',
         'sm': '14rem',
         'md': '16rem',
         'lg': '18rem',
         'xl': '20rem',
       },
     },
   },
 )
 module.exports = gridAutoFit
