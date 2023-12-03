/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-0": "#fff",
        gray: {
          "100": "#1a202c",
          "200": "#131313",
          "300": "rgba(19, 19, 19, 0.16)",
          "400": "rgba(19, 19, 19, 0.6)",
        },
        royalblue: {
          "100": "#3563e9",
          "200": "rgba(53, 99, 233, 0.3)",
        },
        lightsteelblue: "rgba(195, 212, 233, 0.4)",
        steelblue: "#3d5278",
        whitesmoke: "#f6f7f9",
        lightslategray: "#90a3bf",
        cornflowerblue: {
          "100": "#5caffc",
          "200": "rgba(92, 175, 252, 0.3)",
        },
      },
      spacing: {},
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "8xl-6": "27.6px",
        "11xs-6": "1.6px",
        "9xs-9": "3.9px",
      },
    },
    fontSize: {
      "6xs-3": "6.3px",
      "smi-6": "12.6px",
      "5xs-9": "7.9px",
      "7xs-5": "5.5px",
      "8xs-7": "4.7px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
