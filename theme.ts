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
      radial-gradient(circle at 65% 10%, rgba(44, 192, 255, 0.08) 0%, rgba(27, 19, 72, 0.25) 80%, transparent),
      radial-gradient(circle at 35% 10%, rgba(44, 192, 255, 0.08) 0%, rgba(27, 19, 72, 0.25) 80%, transparent),
      radial-gradient(circle at 58% -30%, rgba(44, 192, 255, 0.2) 0%, rgba(27, 19, 72, 0.1) 50%, transparent),
      radial-gradient(circle at 42% -30%, rgba(44, 192, 255, 0.2) 0%, rgba(27, 19, 72, 0.1) 50%, transparent),
      radial-gradient(circle at 30% 80%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 25%, transparent),
      radial-gradient(circle at 35% 80%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 55%, transparent),
      radial-gradient(circle at 40% 80%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 75%, transparent),
      radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 25%, transparent),
      radial-gradient(circle at 65% 80%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 55%, transparent),
      radial-gradient(circle at 60% 80%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 75%, transparent),
      radial-gradient(circle at 10% 20%, rgba(87, 146, 255, 0.1) 0%, rgba(27, 19, 72, 0.25) 50%, transparent),
      radial-gradient(circle at 65% 30%, rgba(73, 32, 206, 0.1) 0%, rgba(27, 19, 72, 0.25) 30%, transparent),
      radial-gradient(circle at 20% 60%, rgba(39, 37, 65, 0.4) 0%, rgba(27, 19, 72, 0.25) 70%, transparent),
      radial-gradient(circle at 80% 40%, rgba(189, 88, 0, 0.2) 0%, rgba(27, 19, 72, 1) 70%, transparent),
      radial-gradient(circle at 90% 30%, rgba(255, 140, 1, 0.2) 0%, rgba(27, 19, 72, 1) 70%, transparent),
      radial-gradient(circle at 30% 90%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%, transparent),
      radial-gradient(circle at 70% 90%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%, transparent)
      ,linear-gradient(to top, black, white )
      `,
    },
  },
});

export default theme;
