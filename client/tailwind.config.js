/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cinzel', 'serif'],      // For titles
        body: ['Merriweather', 'serif'],  // For readability
      },
      backgroundImage: {
        stone: "url('/assets/textures/stone.jpg')",
        parchment: "url('/assets/textures/parchment.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        ancient: {
          "primary": "#c9a227",      // gold
          "secondary": "#7a1f1f",    // blood red
          "accent": "#2b2b2b",       // stone gray
          "neutral": "#1a1a1a",      // dark base
          "base-100": "#2b2b2b",     // main background
          "info": "#3b82f6",         // rune glow blue (optional)
          "success": "#16a34a",
          "warning": "#facc15",
          "error": "#dc2626",
        },
      },
      "dark" // keep default dark as fallback
    ],
  },
}
