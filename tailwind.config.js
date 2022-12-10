/** @type {import('tailwindcss').Config} */
// tailwind.config.jsmodule.exports = {    content: [+      "./app/**/*.{js,ts,jsx,tsx}",    ],  theme: {    extend: {},  },  plugins: [],}

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
