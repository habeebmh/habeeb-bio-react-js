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
