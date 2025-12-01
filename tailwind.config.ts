import type { Config } from 'tailwindcss'

export default {
   content: [
    './src/pages/**/*.{js,jsx,mdx,ts,tsx}',
    './src/components/**/*.{js,jsx,mdx,ts,tsx}',
   ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
