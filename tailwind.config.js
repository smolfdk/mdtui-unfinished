/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'darklighterforeground': '#868687',
      'darklightforeground': '#7C7D7E',
      'darkdarkforeground': '#575757',
      'darkborder': '#101012',
      'lightborder': '#303137',
      'darkback': '#131417',
      'lightback': '#1B1C1F',
      'lighterback': '#1E1F22',
      'darkcontrast': '#2D74F7',
      'lightcontrast': '#57BAFE',
      'lighterror': '#F7505A',
      'darkerror': '#ba3a41',
    },
  },
  plugins: [],
};
