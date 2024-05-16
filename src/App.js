import { useMemo } from 'react'
import { Typography, useMediaQuery, ThemeProvider, createTheme, CssBaseline, Divider } from '@mui/material';

import styles from './App.module.css'
import PapersPatents from './components/PapersPatents';
import CareerTimeline from './components/CareerTimeline';
import About from './components/About'

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
      <div className={styles.container}>
        <header className={styles.header}>
          <Typography variant="h3">Habeeb Hooshmand</Typography>
          <Typography variant='subtitle1'>habeeb@hooshmandenterprsies.com</Typography>
        </header>
        <article className={styles.body}>
          <About />
          <Divider />
          <Typography variant="h4" className={styles.sectionTitle}>My career</Typography>
          <CareerTimeline />
          <Divider />
          <Typography variant="h4" className={styles.sectionTitle}>Papers &amp; Patents</Typography>
          <PapersPatents />
        </article>
        <footer>
          <Typography variant='caption' className={styles.copyline}>&copy; {new Date().getFullYear()} Habeeb Hooshmand</Typography>
        </footer>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
