import { useMemo } from 'react'
import { useMediaQuery, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Biography from './pages/Biography';

const router = createBrowserRouter([
    { path: '/', element: <Biography /> }
  ]
);


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        typography: { fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', body1: { lineHeight: 1.75 }, h6: { fontWeight: 650 } },
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: { main: prefersDarkMode ? '#8bb9ff' : '#245db2' },
          background: { default: prefersDarkMode ? '#101722' : '#f8f9fc', paper: prefersDarkMode ? '#172131' : '#ffffff' },
          text: { primary: prefersDarkMode ? '#edf2fa' : '#17263d', secondary: prefersDarkMode ? '#acb9cb' : '#58677b' },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
