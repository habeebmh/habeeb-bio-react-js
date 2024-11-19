import React from 'react'
import { useMediaQuery } from '@mui/material'

import Navigation from '../components/Navigation'

import styles from './Landing.module.css'
import Footer from '../components/Footer'

const Landing = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <>
      <article className={styles.container}>
        <a href='/about'>
          <img 
            className={styles.logo} 
            src={`/assets/habeeb-sign-${prefersDarkMode ? 'white' : 'black'}.png`} 
            alt={'Habeeb\'s signature.'} 
          />
        </a>
        <Navigation hideHome />
      </article>
      <Footer />
    </>
  )
}
export default Landing