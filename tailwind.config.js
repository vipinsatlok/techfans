/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./tools/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {},
  },
};
