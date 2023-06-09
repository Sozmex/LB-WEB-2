module.exports = {
  variants: {
    extend: {
      textColor: ["group-hover"],
      transform: ["group-hover"],
      scale: ["group-hover"],
      translate: ["responsive", "group-hover", "hover", "focus"],
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "5rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      red: "#74113f",
      primary: {
        600: "#74113f",
        300: "#74113f",
        100: "#74113f",
        50: "#74113f",
        10: "#6e2e4c",
      },
      neutral: {
        900: "#2C2C2C",
        700: "#444444",
        500: "#7C7C7C",
        300: "#D9D9D6",
        100: "#E5E5E5",
        50: "#f5f5f5",
      },
    },
    fontFamily: {
      display: ["Playfair Display", "sans-serif"],
      body: ["Outfit", "sans-serif"],
    },
    fontSize: {
      "display-2xl": [
        "72px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "96px",
        },
      ],
      "display-2xl-bold": [
        "72px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "96px",
          fontWeight: "bold",
        },
      ],
      "display-xl": [
        "60px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "72px",
        },
      ],
      "display-xl-bold": [
        "60px",
        {
          letterSpacing: "-0.025em",
          lineHeight: "72px",
          fontWeight: "bold",
        },
      ],
      "display-lg": [
        "48px",
        {
          letterSpacing: "0em",
          lineHeight: "60px",
        },
      ],
      "display-lg-bold": [
        "48px",
        {
          letterSpacing: "0em",
          lineHeight: "60px",
          fontWeight: "bold",
        },
      ],
      "display-md": [
        "36px",
        {
          letterSpacing: "0em",
          lineHeight: "48px",
        },
      ],
      "display-md-bold": [
        "36px",
        {
          letterSpacing: "0em",
          lineHeight: "48px",
          fontWeight: "bold",
        },
      ],
      "display-sm": [
        "30px",
        {
          letterSpacing: "0em",
          lineHeight: "40px",
        },
      ],
      "display-sm-bold": [
        "30px",
        {
          letterSpacing: "0em",
          lineHeight: "40px",
          fontWeight: "bold",
        },
      ],
      "display-xs": [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      "display-xxs": [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "26px",
        },
      ],
      "body-xl": [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      "body-xxl": [
        "30px",
        {
          letterSpacing: "0em",
          lineHeight: "40px",
        },
      ],
      "body-lg": [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      "body-md": [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "24px",
        },
      ],
      "body-sm": [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "24px",
        },
      ],
      "body-xs": [
        "12px",
        {
          letterSpacing: "0em",
          lineHeight: "16px",
        },
      ],
    },
    boxShadow: {
      xs: "0px 1px 2px rgba(17, 24, 39, 0.05)",
      sm: "0px 1px 3px rgba(17, 24, 39, 0.1), 0px 1px 2px rgba(17, 24, 39, 0.06)",
      md:
        "0px 4px 8px -2px rgba(17, 24, 39, 0.1), 0px 2px 4px -2px rgba(17, 24, 39, 0.06)",
      lg:
        "0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)",
      xl:
        "0px 20px 24px -4px rgba(17, 24, 39, 0.1), 0px 8px 8px -4px rgba(17, 24, 39, 0.04)",
      "2xl": "0px 24px 48px -12px rgba(17, 24, 39, 0.25)",
    },
    extend: {
      ringWidth: {
        5: "4px",
      },
      ringColor: {
        black: "#000",
      },
      spacing: {
        18: "72px",
        22: "88px",
        30: "120px",
        62: "248px",
      },
      gridTemplateColumns: {
        "8": "repeat(8, minmax(0, 1fr))", // Simple 8 cell grid
      },
      gridTemplateRows: {
        "8": "repeat(8, minmax(0, 1fr))", // Simple 8 cell grid
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss"),
    function ({ addUtilities }) {
      addUtilities({
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
      });
    },
    function ({ addComponents }) {
      const components = {
        ".featured-post": {
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "1rem",
          padding: "1rem",
          borderRadius: "0.25rem",
        },
        ".navContainer": {
          display: "flex",
          justifyContent: "center",
        },
        ".blogPostNav": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "5rem auto",
          width: "80%",
        },
        ".blogPostNav ul": {
          listStyle: "none",
          padding: "0",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        },
      };
      addComponents(components);
    },
  ],
};
