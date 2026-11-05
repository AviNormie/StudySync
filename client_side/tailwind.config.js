// tailwind.config.js (ESM Compatible)
import tailwindScrollbar from 'tailwind-scrollbar';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

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
