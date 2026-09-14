import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        ocean: {
          950: 'var(--color-ocean-950)',
          900: 'var(--color-ocean-900)',
        },
        buoy: 'var(--color-buoy)',
        ledger: 'var(--color-ledger)',
        coral: 'var(--color-coral)',
        steel: 'var(--color-steel)',
        brand: 'var(--color-brand)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
      },
    },
  },
  plugins: [],
};

export default config;
