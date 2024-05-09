module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    animation: {
      "spin-slow": "spinslow 45s linear infinite",
      spinslowant: "spinslowant 100s linear infinite",
      upAndDown: "upAndDown 8s infinite",
      upAndDown1: "upAndDownBall 4s infinite 2s",
    },
    keyframes: {
      upAndDown: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-50px)" },
      },
      upAndDownBall: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-30px)" },
      },
      spinslow: {
        "0%": { transform: "rotate(00deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      spinslowant: {
        "0%": { transform: "rotate(00deg)" },
        "100%": { transform: "rotate(-360deg)" },
      },
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#61DAFB",
      },
      backgroundImage: {
        site: "url('./assets/site-bg.png')",
        about: "url('./assets/about.png')",
        contact: "url('./assets/services.png')"
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("flowbite/plugin")],
};
