import React from 'react';
import { Typography } from '@mui/material';

import PapersPatents from '../components/PapersPatents';

import common from '../Common.module.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Papers = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className={common.container}>
        <Typography variant="h4" className={common.sectionTitle}>Papers &amp; Patents</Typography>
        <PapersPatents />
      </div>
      <Footer />
    </>
  )
}

export default Papers