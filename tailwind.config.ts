import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2ecc71',       // Synthex Green
        secondary: '#2c3e50',     // Midnight Rep
        purple: '#9b59b6',        // Protein Purple
        orange: '#e67e22',        // Carb Orange
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'] // Recommended coding font
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;