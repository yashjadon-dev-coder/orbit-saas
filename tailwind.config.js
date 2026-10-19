/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0B10',
        card: '#1E1E23',
        accent: '#3B82F6',
        foreground: '#F8FAFC',
        muted: '#232328',
        'muted-fg': '#94A3B8',
        border: '#1E293B',
      },
      fontFamily: {
        exo: ['Exo', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px #3B82F640, 0 0 60px #3B82F620' },
          '50%': { boxShadow: '0 0 40px #3B82F680, 0 0 120px #3B82F640' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'count-up': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'fade-up': 'fade-up 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}
