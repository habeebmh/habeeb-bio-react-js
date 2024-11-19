import { useMemo } from 'react'
import { useMediaQuery, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './pages/Landing';
import Biography from './pages/Biography';
import Papers from './pages/Papers';

const router = createBrowserRouter([
    { path: '/', element: <Landing /> },
    { path: '/about', element: <Biography /> },
    { path: '/papers-patents', element: <Papers /> },
  ]
);


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
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
