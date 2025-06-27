// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#00d4ff',
        'secondary': '#8b5cf6',
        'accent': '#ff006e',
        'dark': '#0a0a0f',
        'dark-secondary': '#1a1a2e',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'gradient': 'gradientShift 15s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(-45deg, #00d4ff, #8b5cf6, #ff006e, #00d4ff)',
      },
    },
  },
  plugins: [],
}