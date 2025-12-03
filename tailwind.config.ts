import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Swiss Color Palette - Ultra-Premium
        'swiss-graphite': '#1E1F21',
        'alpine-white': '#FFFFFF',
        'frost-silver': '#D8DBDE',
        'alpine-blue': '#003D73',
        'accent-red': '#C40019',

        // Background colors
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Swiss Typography Scale
        'h1': ['64px', { lineHeight: '68px', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '52px', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h4': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'body': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'small': ['16px', { lineHeight: '24px', fontWeight: '400' }],
      },
      spacing: {
        // Swiss Precision Spacing Scale
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
      },
      maxWidth: {
        'container': '1200px',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
