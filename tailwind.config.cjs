/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {  
    fontFamily: {
      'sans': ['Nunito', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'bg-hero': "url('/bg-home.png')",
        'bg-service': "url('/bg-service.png')",
        'bg-brands': "url('/bg-brands.png')",
        'bg-footer': "url('/footer2.png')",
      },
      boxShadow: {
        'box-card': '2px 5px 15px #dfe3ea',
        'box-brands': '0px 40px 70px 0px rgba(103, 48, 226, 0.5)',
        'box-brands-before': '0px 30px 70px 0px rgba(103, 48, 226, 0.4)',
        'box-brands-after': '0px 30px 70px 0px rgba(103, 48, 226, 0.5)'
      },
      gridTemplateColumns: {
        'cards': 'repeat(2, minmax(300px, 1fr))',
        'brands': 'repeat(3, minmax(120px, 1fr))',
      }
    },
    theme: {
      screens: {
        'md': '1024px',
        'lg': '1280px',
        'xl': '1600px',
        // => @media (min-width: 640px) { ... }

      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
