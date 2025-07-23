/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
     fontFamily: {
        geist: ["GeistRegular", "sans-serif"],
        "geist-medium": ["GeistMedium", "sans-serif"],
        "geist-bold": ["GeistBold", "sans-serif"],
        "geist-black": ["GeistBlack", "sans-serif"],
        "geist-regular": ["GeistRegular", "sans-serif"],
      },
      colors: {
        "primary": "#FFFFFF",
        "secondary": "#333333",
        "green": "#205619",
        "green-light": "#2A7221",
        "border": "#B0B0B0",
        
      }
    },
  },
  plugins: [],
}