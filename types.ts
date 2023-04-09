// types.ts
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      radialGradients: {
        primary: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      radialGradients?: {
        primary?: string;
      };
    };
  }
}
