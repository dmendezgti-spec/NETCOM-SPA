/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effbff',
          100: '#d8f5ff',
          200: '#b6edff',
          300: '#7eddff',
          400: '#36c7ff',
          500: '#08a8eb',
          600: '#0084c3',
          700: '#02699d',
          800: '#0a587f',
          900: '#104969',
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
        accent: '#1ee3cf',
        warning: '#ffb84d',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Segoe UI', 'sans-serif'],
        body: ['Manrope', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 24px 80px rgba(7, 17, 31, 0.12)',
        glow: '0 0 0 1px rgba(8, 168, 235, 0.18), 0 30px 120px rgba(8, 168, 235, 0.18)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(8, 168, 235, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(8, 168, 235, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};