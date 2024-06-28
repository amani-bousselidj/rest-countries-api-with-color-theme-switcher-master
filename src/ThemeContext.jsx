// src/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#FFFFFF',
      },
      text:{
        primary :'hsl(200, 15%, 8%)'
      },
      background: {
        default: ' hsl(0, 0%, 98%)', // Very Dark Blue background for dark mode
      },// Very Dark Blue background for dark mode
      divider: 'hsl(12, 0%, 98%)',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: 'hsl(209, 23%, 22%)', // Dark Blue color for dark mode elements
      },
      background: {
        default: 'hsl(207, 26%, 17%)',
        paper: 'hsl(209, 23%, 22%)', // Very Dark Blue background for dark mode
      },
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
