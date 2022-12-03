/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: { poppins: "Poppins", oswald: "Oswald" } },
    colors: {
      white: "#fff",
      gray: {
        "100": "#eee",
        "200": "#222831",
        "300": "rgba(57, 62, 70, 0.75)",
        "400": "rgba(238, 238, 238, 0.5)",
        "500": "rgba(57, 62, 70, 0.5)",
        "600": "rgba(238, 238, 238, 0.75)",
      },
      teal: "#00adb5",
    },
    fontSize: { base: "18px", lg: "64px" },
  },
  corePlugins: { preflight: false },
};
