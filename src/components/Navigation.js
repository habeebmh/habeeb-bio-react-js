import React from 'react';
import { Divider, Typography } from '@mui/material';

import styles from './Navigation.module.css';

const Navigation = ({ hideHome }) => {
  return (
    <nav className={styles.nav}>
      {!hideHome && (
        <Typography variant='h6' className={styles.navItem} component='a' href='/' color='primary' hidden={hideHome}>Home</Typography>
      )}
      <Typography variant='h6' className={styles.navItem} component='a' href='/about' color='primary'>About</Typography>
      <Typography variant='h6' className={styles.navItem} component='a' href='/papers-patents' color='primary'>Papers &amp; Patents</Typography>
      <Typography variant='h6' className={styles.navItem} component='a' href='https://www.instagram.com/iamhabeebh/' target='_blank' rel='noopener noreferrer' color='primary'>Instagram</Typography>
      <Typography variant='h6' className={styles.navItem} component='a' href='https://soundcloud.com/iamhabeeb' target='_blank' rel='noopener noreferrer' color='primary'>Soundcloud</Typography>
    </nav>
  );
}

export default Navigation;