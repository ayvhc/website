import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        navy: "rgb(var(--color-navy) / <alpha-value>)",
        blue: "rgb(var(--color-blue) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(17, 37, 68, 0.08)",
        card: "0 12px 40px rgba(25, 44, 71, 0.08)"
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(to right, rgba(105, 131, 162, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(105, 131, 162, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
