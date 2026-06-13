/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 5.5s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideDown: 'slideDown 1s ease-out forwards',
        scaleIn: 'scaleIn 1s ease-out forwards',
        smokeMove: 'smokeMove 18s ease-in-out infinite alternate',
        typing: 'typing 4s steps(60, end) forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideDown: {
          from: { transform: 'translateY(-32px)' },
          to: { transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { transform: 'scale(.86)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
