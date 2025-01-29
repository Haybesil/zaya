/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "p-primary": "#219ed3",
        "p-black": "#2A2E34",
        "p-secondary": "#4F5762",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}