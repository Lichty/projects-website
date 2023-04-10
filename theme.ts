import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ffbe64',
    },
    background: {
      default: '#1e1e1e',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },

  custom: {
    radialGradients: {
      primary: `
      radial-gradient(circle at 65% 10%, rgba(35.2, 153.6, 204, 0.08) 0%, rgba(21.6, 15.2, 57.6, 0.25) 80%, transparent),
      radial-gradient(circle at 35% 10%, rgba(35.2, 153.6, 204, 0.08) 0%, rgba(21.6, 15.2, 57.6, 0.25) 80%, transparent),
      radial-gradient(circle at 58% -30%, rgba(35.2, 153.6, 204, 0.2) 0%, rgba(21.6, 15.2, 57.6, 0.1) 50%, transparent),
      radial-gradient(circle at 42% -30%, rgba(35.2, 153.6, 204, 0.2) 0%, rgba(21.6, 15.2, 57.6, 0.1) 50%, transparent),
      radial-gradient(circle at 30% 80%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 25%, transparent),
      radial-gradient(circle at 35% 80%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 55%, transparent),
      radial-gradient(circle at 40% 80%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 75%, transparent),
      radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 25%, transparent),
      radial-gradient(circle at 65% 80%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 55%, transparent),
      radial-gradient(circle at 60% 80%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 75%, transparent),
      radial-gradient(circle at 10% 20%, rgba(69.6, 116.8, 204, 0.1) 0%, rgba(21.6, 15.2, 57.6, 0.25) 50%, transparent),
      radial-gradient(circle at 65% 30%, rgba(58.4, 25.6, 164.8, 0.1) 0%, rgba(21.6, 15.2, 57.6, 0.25) 30%, transparent),
      radial-gradient(circle at 20% 60%, rgba(31.2, 29.6, 52, 0.4) 0%, rgba(21.6, 15.2, 57.6, 0.25) 70%, transparent),
      radial-gradient(circle at 80% 40%, rgba(151.2, 70.4, 0, 0.2) 0%, rgba(21.6, 15.2, 57.6, 1) 70%, transparent),
      radial-gradient(circle at 90% 30%, rgba(204, 112, 0.8, 0.2) 0%, rgba(21.6, 15.2, 57.6, 1) 70%, transparent),
      radial-gradient(circle at 30% 90%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%, transparent),
      radial-gradient(circle at 70% 90%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%, transparent)
      ,linear-gradient(to top, black, white )
      `,
    },
  },
});

export default theme;
