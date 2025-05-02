// theme.js - Updated for website styling
const BranchTheme = {
  colors: {
    primary: '#1976D2', // Branch blue
    primaryDark: '#0D47A1',
    primaryLight: '#BBDEFB',
    secondary: '#FF9800', // Orange for CTAs
    secondaryDark: '#F57C00',
    success: '#4CAF50',
    danger: '#F44336',
    warning: '#FFC107',
    info: '#2196F3',
    gray: '#9E9E9E',
    grayLight: '#F5F5F5',
    grayDark: '#616161',
    white: '#FFFFFF',
    black: '#212121',
    background: '#F8F9FA', // Lighter background for web
    surface: '#FFFFFF',
    border: '#E0E0E0',
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.75rem', // 28px (increased from 24px)
      '3xl': '2.25rem', // 36px (increased from 30px)
      '4xl': '3rem'     // 48px (new for headings)
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem'   // 64px (new for larger web spacing)
  },
  borderRadius: {
    sm: '0.25rem',  // 4px
    md: '0.5rem',   // 8px
    lg: '1rem',     // 16px
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.1)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.1)' // New stronger shadow
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px' // New larger breakpoint
  },
  // New website-specific properties
  maxWidth: {
    prose: '65ch', // Optimal reading width
    content: '1200px' // Max content width
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1050,
    popover: 1070,
    toast: 1090
  }
};

module.exports = BranchTheme;