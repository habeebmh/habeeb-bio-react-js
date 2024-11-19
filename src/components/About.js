import { Typography, Link } from '@mui/material'

import styles from './About.module.css'

const About = () => {

  return (
    <div className={styles.sideBySide}>
      <section className={styles.textContainer}>
        <Typography variant='h6'>Hi! I'm <strong>Habeeb</strong>.</Typography>

        <Typography>
          I do a lot of different things.
        </Typography>

        <ul>
          <li><Typography>I am a House DJ and Producer based in Dallas, Texas.</Typography></li>
          <li><Typography>I am a Staff Software Engineer  at <Link href="https://www.self.inc" target="_blank" rel="noopener noreferrer" >Self</Link>.</Typography></li>
          <li><Typography>I am also the founder of <Link href="https://hooshmandenterprises.com" target="blank" rel="noopener noreferrer">Hooshmand Enterprises LLC</Link>.</Typography></li>
          <li><Typography>I am a Soccer Referee in the NCAA, MASL, and Lower Division Pro Leagues.</Typography></li>
        </ul>

        <Typography>I graduated from Texas A&M University in 2019.</Typography>
      </section>
      <section className={styles.imageContainer}>
        <picture>
          <source srcSet='/assets/HabeebImage.webp' type="image/webp" />
          <img className={styles.bigImage} src='/assets/HabeebImage.jpg' alt="Habeeb Hooshmand (me)" />
        </picture>
      </section>
    </div>
  )
}

export default About