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
        "primary": "#205619",
        
      }
    },
  },
  plugins: [],
}