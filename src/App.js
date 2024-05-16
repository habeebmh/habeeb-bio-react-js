import { useMemo } from 'react'
import { Typography, useMediaQuery, ThemeProvider, createTheme, CssBaseline, Divider, Link } from '@mui/material';

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
          <Typography variant='subtitle1'>Staff Software Engineer</Typography>
          <Typography variant='subtitle2'>Texas A&M Class of 2019</Typography>
          <Typography variant='subtitle2'>habeeb@hooshmandenterprsies.com</Typography>
          <section className={styles.links}>
            <Link target='_blank' rel='noopener noreferrer' variant='subtitle2' href='https://www.linkedin.com/in/habeebhooshmand/'>LinkedIn</Link>
            <Divider orientation='vertical' flexItem />
            <Link target='_blank' rel='noopener noreferrer' variant='subtitle2' href='https://github.com/habeebmh'>GitHub</Link>
            <Divider orientation='vertical' flexItem />
            <Link target='_blank' rel='noopener noreferrer' variant='subtitle2' href='https://scholar.google.com/citations?user=iP66x48AAAAJ&hl=en'>Google Scholar</Link>
            <Divider orientation='vertical' flexItem />
            <Link target='_blank' rel='noopener noreferrer' variant='subtitle2' href='https://www.instagram.com/habeeb.hooshmand/'>Instagram</Link>
          </section>
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
