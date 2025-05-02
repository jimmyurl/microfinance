// globalStyles.js
import { BranchTheme } from './theme';

export const globalStyles = `
  /* Global styles and resets */
  html, body {
    margin: 0;
    padding: 0;
    font-family: ${BranchTheme.typography.fontFamily};
    font-size: ${BranchTheme.typography.fontSizes.md};
    background-color: ${BranchTheme.colors.background};
    color: ${BranchTheme.colors.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Apply focus styles for accessibility */
  *:focus {
    outline: 2px solid ${BranchTheme.colors.primary};
    outline-offset: 2px;
  }

  /* Link styles */
  a {
    color: ${BranchTheme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${BranchTheme.colors.primaryDark};
  }
`;

export default globalStyles;