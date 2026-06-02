/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#111111',
        'bg-card': '#161616',
        border: '#222222',
        accent: {
          DEFAULT: '#00FF88',
          hover: '#00CC6A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#888888',
          muted: '#444444',
        },
        danger: '#FF3B3B',
      },
      fontFamily: {
        display: ['var(--font-bebas-neue)', 'Impact', 'sans-serif'],
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      letterSpacing: {
        display: '0.08em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
};
