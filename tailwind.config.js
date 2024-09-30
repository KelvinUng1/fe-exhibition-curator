module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8",
        secondary: "#E5E7EB",
        accent: "#FF5722",
        dark: "#111827",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      spacing: {
        128: "32rem",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
