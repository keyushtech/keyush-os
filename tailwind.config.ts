/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        'os-base': '#0A0A0C',
        'os-surface': 'rgba(28,28,30,0.75)',
        'os-border': 'rgba(255,255,255,0.10)',
        'os-accent': '#38BDF8',
        'os-text': '#EDEDED',
        'os-muted': 'rgba(255,255,255,0.50)',
      },
      borderRadius: {
        'window': '12px',
        'dock': '18px',
        'icon': '11px',
      },
      backdropBlur: {
        'vibrancy': '32px',
      },
      boxShadow: {
        'window': '0 24px 64px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.12)',
        'dock': '0 18px 36px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.12)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(4px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'boot-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'boot-blink': 'boot-blink 1s step-end infinite',
        'slide-up': 'slide-up 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) both',
      },
    },
  },
  plugins: [],
}

