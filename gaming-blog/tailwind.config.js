module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Specify the paths to all of the template files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ffcc', // Neon cyan
        secondary: '#ff00ff', // Neon magenta
        background: '#1a1a1a', // Dark background
        text: '#e0e0e0', // Light text
        accent: '#ffcc00', // Neon yellow
      },
      fontFamily: {
        futuristic: ['"Orbitron"', 'sans-serif'], // Futuristic font
      },
    },
  },
  plugins: [],
};