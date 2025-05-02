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
      primary: BranchTheme.colors.primary,
      'primary-dark': BranchTheme.colors.primaryDark,
      'primary-light': BranchTheme.colors.primaryLight,
      secondary: BranchTheme.colors.secondary,
      'secondary-dark': BranchTheme.colors.secondaryDark,
      success: BranchTheme.colors.success,
      danger: BranchTheme.colors.danger,
      warning: BranchTheme.colors.warning,
      info: BranchTheme.colors.info,
      gray: BranchTheme.colors.gray,
      'gray-light': BranchTheme.colors.grayLight,
      'gray-dark': BranchTheme.colors.grayDark,
      white: BranchTheme.colors.white,
      black: BranchTheme.colors.black,
      background: BranchTheme.colors.background,
      surface: BranchTheme.colors.surface,
      border: BranchTheme.colors.border,
    },
    fontFamily: {
      sans: BranchTheme.typography.fontFamily.split(',').map(font => font.trim().replace(/'/g, '')),
    },
    fontSize: BranchTheme.typography.fontSize,
    fontWeight: BranchTheme.typography.fontWeight,
    spacing: BranchTheme.spacing,
    borderRadius: BranchTheme.borderRadius,
    boxShadow: BranchTheme.shadows,
    screens: BranchTheme.breakpoints,
    extend: {},
  },
  plugins: [],
};