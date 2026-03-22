/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d9ff',
        secondary: '#7b2cbf',
        dark: '#0a0e27',
        darker: '#131842',
      },
    },
  },
  plugins: [],
}
