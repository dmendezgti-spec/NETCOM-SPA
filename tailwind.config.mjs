/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f7fb',
          100: '#dfeef8',
          200: '#bdddf0',
          300: '#89c3e3',
          400: '#4ea5d0',
          500: '#2f87b5',
          600: '#236b92',
          700: '#1f5573',
          800: '#1d485f',
          900: '#1e3d4f',
        },
        ink: {
          950: '#07111f',
          900: '#0c1727',
          800: '#142238',
        },
        steel: {
          50: '#f5f8fb',
          100: '#ebf0f5',
          200: '#d4dde6',
          300: '#b2c1ce',
          400: '#7f95aa',
          500: '#5b7087',
          600: '#45586d',
          700: '#38475a',
          800: '#2e3948',
        },
        accent: '#27c296',
        warning: '#f28a2e',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Segoe UI', 'sans-serif'],
        body: ['Manrope', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 24px 80px rgba(7, 17, 31, 0.12)',
        glow: '0 0 0 1px rgba(78, 165, 208, 0.2), 0 24px 85px rgba(14, 48, 77, 0.28)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(78, 165, 208, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(78, 165, 208, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};