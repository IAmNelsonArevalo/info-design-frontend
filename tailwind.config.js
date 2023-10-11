/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
    content: [
        './index.html',
        './src/**/*.{html,ts,tsx}',
        './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
        './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
    ],
  theme: {
      screens: {
          'max-1451': {'max': '1451px'},
          'max-874': {'max': '874px'},
          'max-597': {'max': '597px'},
      },
      extend: {
          boxShadow: {
              'bottom-shadow': '0 8px 2px -2px gray',
          },
          width: {
              'rest-screen': 'calc(100vw - 300px)',
              'rest--30-px': 'calc(100% - 30px)'
          },
          height: {
              'rest-screen': 'calc(100vh - 72px)'
          },
          fontFamily: {
              'inter': "'Inter', sans-serif;"
          }
      },
  },
  plugins: [],
})

