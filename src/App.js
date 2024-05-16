import { Typography } from '@mui/material';

import styles from './App.module.css'
import PapersPatents from './PapersPatents';
import CareerTimeline from './CareerTimeline';
import About from './About'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Typography variant="h3">Habeeb Hooshmand</Typography>
        <Typography variant='subtitle1'>Contact: habeeb@hooshmandenterprsies.com</Typography>
      </header>
      <article className={styles.body}>
        <About />

        <Typography variant="h4" className={styles.sectionTitle}>My career</Typography>
        <CareerTimeline />

        <Typography variant="h4" className={styles.sectionTitle}>Papers &amp; Patents</Typography>
        <PapersPatents />
      </article>
      <footer>
        <Typography variant='caption' className={styles.copyline}>&copy; {new Date().getFullYear()} Habeeb Hooshmand</Typography>
      </footer>
    </div>
  );
}

export default App;