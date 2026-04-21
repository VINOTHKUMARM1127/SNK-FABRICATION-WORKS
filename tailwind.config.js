/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#C84000", // Darkened premium orange/amber to pass WCAG AAA contrast
          light: "#F8FAFC", // Sleek slate-50 equivalent
          dark: "#0B0F19", // Deep obsidian/navy for luxury darks
          gold: "#D4AF37", // True premium gold accent
          glass: "rgba(255, 255, 255, 0.75)" // Standardized glass color
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], // Outfit is much more modern and geometric
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s lg:1s ease-out forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
