import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      mdOnly: { min: '768px', max: '1279px' },
      smOnly: { min: '0px', max: '767px' },
      xl: '1280px',
      notXl: { max: '1279px' },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
        },
      },
      fontFamily: {
        lato: 'var(--font-lato)',
        emilysCandy: 'var(--font-emilys-candy)',
      },
    },
  },
  plugins: [],
};
export default config;
