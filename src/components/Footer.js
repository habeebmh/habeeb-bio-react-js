import React from 'react';
import { Typography } from '@mui/material';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <Typography variant='caption' className={styles.copyline}>&copy; {new Date().getFullYear()} Habeeb Hooshmand</Typography>
    </footer>
  );
}

export default Footer;