// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E50914', // Netflix red
    },
    secondary: {
      main: '#7289da', // Discord blue
    },
    background: {
      default: '#181818', // Netflix dark background
      paper: '#282828', // Discord chat background
    },
    text: {
      primary: '#FFFFFF', // White text
      secondary: '#B3B3B3', // Grey text
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 400,
    },
  },
});

export default theme;
