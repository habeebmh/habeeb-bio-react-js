import React from 'react';
import { Typography } from '@mui/material';

import styles from './Navigation.module.css';

const Navigation = ({ hideHome, bottom, sticky }) => {
  return (
    <nav className={styles.nav} style={{ position: sticky ? 'fixed' : 'relative', bottom:  bottom ? '0' : undefined, marginBottom: bottom ? '0' : '1em' }}>
      {!hideHome && (
        <Typography variant='body1' className={styles.navItem} component='a' href='/' color='primary' hidden={hideHome}>Home</Typography>
      )}
      <Typography variant='body1' className={styles.navItem} component='a' href='/about' color='primary'>About</Typography>
      <Typography variant='body1' className={styles.navItem} component='a' href='/papers-patents' color='primary'>Inventions</Typography>
      <Typography variant='body1' className={styles.navItem} component='a' href='https://soundcloud.com/iamhabeeb' target='_blank' rel='noopener noreferrer' color='primary'>Music</Typography>
    </nav>
  );
}

export default Navigation;