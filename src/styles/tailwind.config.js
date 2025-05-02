// tailwind.config.js
import { BranchTheme } from './theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        'gray-light': BranchTheme.colors.grayLight,
        'gray-dark': BranchTheme.colors.grayDark,
      },
      fontFamily: {
        sans: [BranchTheme.typography.fontFamily],
      },
      fontSize: BranchTheme.typography.fontSizes,
      fontWeight: BranchTheme.typography.fontWeights,
      spacing: BranchTheme.spacing,
      borderRadius: BranchTheme.borderRadius,
      boxShadow: {
        sm: BranchTheme.shadows.sm,
        md: BranchTheme.shadows.md,
        lg: BranchTheme.shadows.lg,
      },
    },
  },
  plugins: [],
}