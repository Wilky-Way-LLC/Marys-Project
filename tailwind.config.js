/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      colors: {
        'light-gray': '#FBFCFD',
        'plum': '#3B345B',
        'cta-pink': '#FAA5A9',
        'dark-gray': '#282424',
        'medium-gray': '#3E3A3A',
        'forest': '#7B8F76',
        'light-forest': '#D9E5D6',
        'cta-green': '#A5CC9C',
        'blue-gray': '#D6E3E5',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"Open Sans"', 'sans'],
      },
      keyframes: {
        glow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        glow: 'glow 2s linear infinite',
      },
    },
  },
  plugins: [],
}
