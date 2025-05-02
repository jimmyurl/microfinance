// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { BranchTheme as theme } from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  :root {
    --header-height: 4rem;
    --sidebar-width: 16rem;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    height: 100%;
    
    @media (min-width: ${theme.breakpoints.lg}) {
      font-size: 18px;
    }
  }
  
  body {
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.6;
    color: ${theme.colors.black};
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${theme.spacing.md};
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: 1.25;
    color: ${theme.colors.black};
  }
  
  h1 { font-size: ${theme.typography.fontSize['3xl']}; }
  h2 { font-size: ${theme.typography.fontSize['2xl']}; }
  h3 { font-size: ${theme.typography.fontSize.xl}; }
  h4 { font-size: ${theme.typography.fontSize.lg}; }
  h5 { font-size: ${theme.typography.fontSize.base}; }
  h6 { font-size: ${theme.typography.fontSize.sm}; }
  
  p {
    margin-bottom: ${theme.spacing.md};
    max-width: 65ch;
  }
  
  /* Links */
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${theme.colors.primaryDark};
      text-decoration: underline;
    }
  }
  
  /* Buttons */
  button, .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: 1.5;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: ${theme.borderRadius.md};
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: ${theme.colors.primaryDark};
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
    }
    
    &.btn-secondary {
      background-color: ${theme.colors.secondary};
      
      &:hover {
        background-color: ${theme.colors.secondaryDark};
      }
    }
    
    &.btn-outline {
      color: ${theme.colors.primary};
      background-color: transparent;
      border: 1px solid ${theme.colors.primary};
      
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      }
    }
    
    &.btn-lg {
      padding: ${theme.spacing.md} ${theme.spacing.xl};
      font-size: ${theme.typography.fontSize.lg};
    }
  }
  
  /* Forms */
  input, select, textarea {
    width: 100%;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize.base};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.sm};
    transition: all 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px ${theme.colors.primaryLight};
    }
  }
  
  label {
    display: block;
    margin-bottom: ${theme.spacing.xs};
    font-weight: ${theme.typography.fontWeight.medium};
  }
  
  /* Layout */
  .container {
    width: 100%;
    max-width: ${theme.breakpoints.xl};
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
    
    @media (min-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing.lg};
    }
  }
  
  /* Cards */
  .card {
    padding: ${theme.spacing.lg};
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.md};
    box-shadow: ${theme.shadows.sm};
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
      box-shadow: ${theme.shadows.md};
      transform: translateY(-2px);
    }
  }
  
  /* Utility Classes */
  .text-center { text-align: center; }
  .text-primary { color: ${theme.colors.primary}; }
  .text-secondary { color: ${theme.colors.secondary}; }
  .text-muted { color: ${theme.colors.gray}; }
  
  .bg-primary { background-color: ${theme.colors.primary}; }
  .bg-light { background-color: ${theme.colors.grayLight}; }
  .bg-surface { background-color: ${theme.colors.surface}; }
  
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  
  .gap-sm { gap: ${theme.spacing.sm}; }
  .gap-md { gap: ${theme.spacing.md}; }
  .gap-lg { gap: ${theme.spacing.lg}; }
  
  .w-full { width: 100%; }
  .w-auto { width: auto; }
  
  .my-sm { margin-top: ${theme.spacing.sm}; margin-bottom: ${theme.spacing.sm}; }
  .my-md { margin-top: ${theme.spacing.md}; margin-bottom: ${theme.spacing.md}; }
  .my-lg { margin-top: ${theme.spacing.lg}; margin-bottom: ${theme.spacing.lg}; }
  
  .py-sm { padding-top: ${theme.spacing.sm}; padding-bottom: ${theme.spacing.sm}; }
  .py-md { padding-top: ${theme.spacing.md}; padding-bottom: ${theme.spacing.md}; }
  .py-lg { padding-top: ${theme.spacing.lg}; padding-bottom: ${theme.spacing.lg}; }
  
  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
`;

export default GlobalStyles;