import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#061426",
          blue: "#0d6efd",
          cyan: "#27b9d6",
          steel: "#7b8da3",
          graphite: "#101827"
        }
      },
      boxShadow: {
        industrial: "0 18px 55px rgba(5, 19, 38, 0.14)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        shimmer: "shimmer 1.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
