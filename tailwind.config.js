/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // If this line is missing, Production will be broken
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}