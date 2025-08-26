/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0a0f1e",
          panel: "rgba(20, 26, 46, 0.6)",
          neon: "#00f0ff",
          green: "#00ff9f"
        }
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.3)"
      },
      backgroundImage: {
        'grid-cyber': "linear-gradient(rgba(0,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-cyber': "40px 40px",
      }
    },
  },
  plugins: [],
}