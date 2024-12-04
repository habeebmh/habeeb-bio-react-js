import React from 'react'

import Navigation from '../components/Navigation'

import styles from './Landing.module.css'

const Landing = () => {

  return (
    <>
      <article className={styles.container}>
        <a href='/about'>
          <img 
            className={styles.logo} 
            src={'/assets/habeeb-logo.png'} 
            alt={'Habeeb\'s signature.'} 
          />
        </a>
      </article>
      <Navigation hideHome bottom sticky />
    </>
  )
}
export default Landing