import React from 'react'
import { Divider, Link, Typography } from '@mui/material';

import CareerTimeline from '../components/CareerTimeline';
import About from '../components/About'
import Navigation from '../components/Navigation';

import styles from './Biography.module.css';
import common from '../Common.module.css'
import Footer from '../components/Footer';

const Biography = () => {
  return (
    <>
      <header className={styles.header}>
        <Navigation />
        <Typography variant="h3">Habeeb Hooshmand</Typography>
        <Typography variant='subtitle1'>Staff Software Engineer | DJ | Entrepreneur | Referee</Typography>
        <Typography variant='subtitle2'>Texas A&M Class of 2019</Typography>
        <Typography variant='subtitle2'>habeeb@hooshmandenterprsies.com</Typography>
        <section className={styles.links}>
          <Link target='_blank' rel='noopener noreferrer' variant='subtitle2' href='https://www.instagram.com/iamhabeebh/'>Instagram</Link>
          <Divider orientation='vertical' flexItem />
          <Link target='_blank' rel='noopener noreferrer' variant='subtitle2' href='https://www.linkedin.com/in/habeebhooshmand/'>LinkedIn</Link>
          <Divider orientation='vertical' flexItem />
          <Link target='_blank' rel='noopener noreferrer' variant='subtitle2' href='https://github.com/habeebmh'>GitHub</Link>
          <Divider orientation='vertical' flexItem />
          <Link target='_blank' rel='noopener noreferrer' variant='subtitle2' href='https://scholar.google.com/citations?user=iP66x48AAAAJ&hl=en'>Google Scholar</Link>
        </section>
      </header>
      <div className={common.container}>
        <article className={styles.body}>
          <About />
          <Divider />
          <Typography variant="h4" className={common.sectionTitle}>My career</Typography>
          <CareerTimeline />
        </article>
    </div>
    <Footer />
   </>
  )
}
export default Biography