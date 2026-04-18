/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8612A',
          'orange-light': '#F07A47',
          'orange-dark': '#C44E1F',
          navy: '#1A2E5A',
          'navy-light': '#243D72',
          'navy-dark': '#111E3C',
          teal: '#09D7CB',
          'teal-light': '#2EE8DC',
          'teal-dark': '#06B8AE',
        },
        cream: '#FDF8F4',
        warm: '#F9F3EE',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 20px rgba(26,46,90,0.08)',
        'card-hover': '0 8px 40px rgba(26,46,90,0.15)',
        'orange': '0 4px 20px rgba(232,97,42,0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
