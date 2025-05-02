// theme.js - Web-optimized Branch styling variables
export const BranchWebTheme = {
  colors: {
    // Maintaining Branch's core color palette
    primary: '#1976D2',
    primaryDark: '#0D47A1',
    primaryLight: '#BBDEFB',
    secondary: '#FF9800',
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
    
    // Web-specific colors
    background: '#FFFFFF', // Brighter background for web
    surface: '#FAFAFA',
    border: '#E0E0E0',
    navBackground: '#FFFFFF',
    cardBackground: '#FFFFFF',
    headerBackground: '#1976D2',
    footerBackground: '#F5F5F5',
    hover: 'rgba(25, 118, 210, 0.08)', // Light blue hover state
    active: 'rgba(25, 118, 210, 0.16)', // Slightly darker active state
  },
  
  typography: {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    fontSizes: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      md: '1rem',        // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px - Added for web headings
      '6xl': '3.75rem',  // 60px - Added for hero sections
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
    }
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px - Added for web layouts
    '5xl': '8rem',    // 128px - Added for web layouts
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    full: '9999px',
  },
  
  shadows: {
    none: 'none',
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)', // Added for prominent web elements
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  
  // Web-specific additions
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  container: {
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  
  animation: {
    transitionDuration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    transitionTiming: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },
  
  // Web layout components specific styling
  components: {
    navbar: {
      height: '64px',
      mobileHeight: '56px',
    },
    sidebar: {
      width: '250px',
      collapsedWidth: '80px',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '0.5rem',
      shadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    button: {
      borderRadius: '0.25rem',
      paddingX: '1rem',
      paddingY: '0.5rem',
    }
  }
};