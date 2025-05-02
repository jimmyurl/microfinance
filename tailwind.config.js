// tailwind.config.js
const BranchTheme = require('./theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...BranchTheme.colors, // Spread all colors directly
    },
    fontFamily: {
      sans: BranchTheme.typography.fontFamily.split(',').map(font => font.trim().replace(/'/g, '')),
    },
    fontSize: BranchTheme.typography.fontSize,
    fontWeight: BranchTheme.typography.fontWeight,
    spacing: BranchTheme.spacing,
    borderRadius: BranchTheme.borderRadius,
    boxShadow: {
      sm: BranchTheme.shadows.sm,
      DEFAULT: BranchTheme.shadows.sm, // Default shadow
      md: BranchTheme.shadows.md,
      lg: BranchTheme.shadows.lg,
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // Added extra large shadow
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    screens: BranchTheme.breakpoints,
    extend: {
      maxWidth: {
        'prose': '65ch',
        'content': '1200px',
      },
      zIndex: {
        'dropdown': 1000,
        'sticky': 1020,
        'fixed': 1030,
        'modal': 1050,
        'popover': 1070,
        'toast': 1090,
      },
      // Additional extensions for better website styling
      lineHeight: {
        'tight': 1.25,
        'relaxed': 1.6,
      },
      transitionDuration: {
        '250': '250ms',
      },
      opacity: {
        '15': '0.15',
        '85': '0.85',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For better form styling
    require('@tailwindcss/typography'), // For prose content
    require('@tailwindcss/aspect-ratio'), // For aspect ratio utilities
  ],
};