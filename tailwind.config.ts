import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import flowbite from 'flowbite/plugin';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      mdOnly: { min: '768px', max: '1279px' },
      smOnly: { max: '767px' },
      xl: '1280px',
      notXl: { max: '1279px' },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        lightGreen: '#D4CF6D',
        deepGreen: '#567A04',
        lavender: '#D7A3B6',
        purple: '#9783A9',
        deepPurple: '#54387F',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      fontFamily: {
        lato: 'var(--font-lato)',
        emilysCandy: 'var(--font-emilys-candy)',
      },
      plugins: [typography, flowbite],
    },
  },
};

export default config;
