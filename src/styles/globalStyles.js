// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { BranchWebTheme as theme } from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizes.md};
    line-height: ${theme.typography.lineHeights.normal};
    color: ${theme.colors.black};
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${theme.spacing.md};
    font-weight: ${theme.typography.fontWeights.semibold};
    line-height: ${theme.typography.lineHeights.tight};
  }
  
  h1 {
    font-size: ${theme.typography.fontSizes['4xl']};
  }
  
  h2 {
    font-size: ${theme.typography.fontSizes['3xl']};
  }
  
  h3 {
    font-size: ${theme.typography.fontSizes['2xl']};
  }
  
  h4 {
    font-size: ${theme.typography.fontSizes.xl};
  }
  
  h5 {
    font-size: ${theme.typography.fontSizes.lg};
  }
  
  h6 {
    font-size: ${theme.typography.fontSizes.md};
  }
  
  p {
    margin-bottom: ${theme.spacing.md};
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.animation.transitionDuration.fast} ${theme.animation.transitionTiming.default};
    
    &:hover {
      color: ${theme.colors.primaryDark};
      text-decoration: underline;
    }
  }
  
  button, .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizes.md};
    font-weight: ${theme.typography.fontWeights.medium};
    line-height: 1.5;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: ${theme.borderRadius.md};
    cursor: pointer;
    transition: all ${theme.animation.transitionDuration.fast} ${theme.animation.transitionTiming.default};
    
    &:hover {
      background-color: ${theme.colors.primaryDark};
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.3);
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    &.secondary {
      background-color: ${theme.colors.secondary};
      
      &:hover {
        background-color: ${theme.colors.secondaryDark};
      }
    }
    
    &.outline {
      color: ${theme.colors.primary};
      background-color: transparent;
      border: 1px solid ${theme.colors.primary};
      
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      }
    }
  }
  
  input, select, textarea {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizes.md};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.sm};
    transition: all ${theme.animation.transitionDuration.fast} ${theme.animation.transitionTiming.default};
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.2);
    }
  }
  
  .container {
    width: 100%;
    max-width: ${theme.container.maxWidth.xl};
    margin: 0 auto;
    padding: 0 ${theme.container.padding.DEFAULT};
    
    @media (min-width: ${theme.breakpoints.sm}) {
      padding: 0 ${theme.container.padding.sm};
    }
    
    @media (min-width: ${theme.breakpoints.lg}) {
      padding: 0 ${theme.container.padding.lg};
    }
  }
  
  .card {
    padding: ${theme.components.card.padding};
    background-color: ${theme.colors.cardBackground};
    border-radius: ${theme.components.card.borderRadius};
    box-shadow: ${theme.components.card.shadow};
  }
  
  /* Helper classes */
  .text-center {
    text-align: center;
  }
  
  .text-primary {
    color: ${theme.colors.primary};
  }
  
  .text-secondary {
    color: ${theme.colors.secondary};
  }
  
  .bg-primary {
    background-color: ${theme.colors.primary};
  }
  
  .bg-light {
    background-color: ${theme.colors.grayLight};
  }
  
  .flex {
    display: flex;
  }
  
  .flex-col {
    flex-direction: column;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .justify-between {
    justify-content: space-between;
  }
  
  .w-full {
    width: 100%;
  }
  
  .my-sm {
    margin-top: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.sm};
  }
  
  .my-md {
    margin-top: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};
  }
  
  .my-lg {
    margin-top: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.lg};
  }
  
  .py-sm {
    padding-top: ${theme.spacing.sm};
    padding-bottom: ${theme.spacing.sm};
  }
  
  .py-md {
    padding-top: ${theme.spacing.md};
    padding-bottom: ${theme.spacing.md};
  }
  
  .py-lg {
    padding-top: ${theme.spacing.lg};
    padding-bottom: ${theme.spacing.lg};
  }
`;

export default GlobalStyles;