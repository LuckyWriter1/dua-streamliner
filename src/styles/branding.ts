// Pattern: Singleton — single source of truth for colors, typography, confidence indicators
export const Branding = {
  colors: {
    primary: '#0057B8',
    secondary: '#003F87',
    success: '#2E7D32',
    warning: '#F9A825',
    error: '#C62828',
    confidence: { high: '#2E7D32', medium: '#F9A825', low: '#C62828' },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    sizes: { sm: '0.875em', md: '1em', lg: '1.25em', xl: '1.5em' },
  },
} as const;
