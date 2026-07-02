import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#121317",
        panel: "#23262D",
        accent: "#FF7A1A",
        muted: "#9CA3AF",
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.34)",
        orange: "0 0 90px rgba(255, 122, 26, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
