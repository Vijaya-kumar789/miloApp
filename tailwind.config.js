// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // NOTE: Update this to include the paths to all files that contain Nativewind classes.
//   content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx}",                         // Main entry file
    "./index.{js,jsx}",                       // Entry point
    "./components/**/*.{js,jsx,ts,tsx}",      // Any nested components
    "./src/**/*.{js,jsx,ts,tsx}",             // Optional if you have a src/ folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
