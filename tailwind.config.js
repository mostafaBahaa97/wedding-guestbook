/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff5f7',
          100: '#ffe4e8',
          200: '#ffcdd5',
          300: '#ffb0bf',
          400: '#ff8fa5',
          500: '#ff6b8a',
          600: '#f85471',
          700: '#e83b59',
          800: '#d42a4a',
          900: '#c01d3e',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
