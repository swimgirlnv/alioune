// src/App.tsx

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import Home from './pages/Home';

const App: React.FC = () => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="full-width">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
