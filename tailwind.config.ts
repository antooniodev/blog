import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'blue-primary-dark': "#121821",
        'blue-secondary': "#1c2f55",
        'red-primary-light': "#4B6A88"
      }
    }
  },
  plugins: [],
};

export default config;
