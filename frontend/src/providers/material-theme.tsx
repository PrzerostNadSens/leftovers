import { ThemeProvider, createTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

const theme = createTheme({
  palette: {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.60)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    primary: {
      main: '#43A047',
      dark: '#2E7D32',
      light: '#66BB6A',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#D32F2F',
      dark: '#C62828',
      light: '#EF5350',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#EF6C00',
      dark: '#EF6C00',
      light: '#FF9800',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#0288D1',
      dark: '#01579B',
      light: '#03A9F4',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2E7D32',
      dark: '#1B5E20',
      light: '#4CAF50',
      contrastText: '#FFFFFF',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.56)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    background: {
      default: '#F3F6F9',
      paper: '#FFFFFF',
      paperElevation0: '#FFFFFF',
      paperElevation2: '#F9FCFF',
      paperElevation16: '#F3F6F9',
      paperElevation24: '#FFFFFF',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
});

const MaterialThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialThemeProvider;
