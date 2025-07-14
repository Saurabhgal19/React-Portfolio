/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-custom': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-delay-1': 'fade-in 0.8s ease-out forwards 0.3s',
        'fade-in-delay-2': 'fade-in 0.8s ease-out forwards 0.6s',
        'fade-in-delay-3': 'fade-in 0.8s ease-out forwards 0.9s',
        'fade-in-delay-4': 'fade-in 0.8s ease-out forwards 1.2s',
        'bounce-custom': 'bounce-custom 1.5s infinite',
      },
    },
  },
  plugins: [],
}
