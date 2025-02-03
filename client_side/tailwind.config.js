// tailwind.config.js (ESM Compatible)
import tailwindScrollbar from 'tailwind-scrollbar';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
  ],
};
