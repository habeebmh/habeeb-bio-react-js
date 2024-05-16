import { Typography, Link } from '@mui/material'

import HabeebImage from './assets/HabeebImage.webp'
import styles from './About.module.css'

const About = () => {

  return (
    <div className={styles.sideBySide}>
      <section className={styles.textContainer}>
        <Typography variant='h6'>Hi! I'm <strong>Habeeb</strong>.</Typography>

        <Typography>
          I am a Staff Software Engineer  at <Link href="https://www.self.inc/" target="_blank" rel="noopener noreferrer" >Self</Link>.
        </Typography>

        <Typography>
          I am also the founder of <Link href="https://hooshmandenterprises.com" target="blank" rel="noopener noreferrer">Hooshmand Enterprises LLC</Link>. 
        </Typography>

        <Typography>
          I mostly deal with UIs in React (Typescript), but I have also built UIs in Lit, Angular 2, and Angular JS.
        </Typography>

        <Typography>
          Previously, I was a Research Assistant at Texas A&M University
          advised by <Link href="https://people.engr.tamu.edu/caverlee/index.html" target="_blank"  rel="noopener noreferrer">Dr. James Caverlee</Link>.
        </Typography>

        <Typography>
          Check out some of my work: <Link href="https://scholar.google.com/citations?user=iP66x48AAAAJ" target="_blank" rel="noopener noreferrer" >Google Scholar</Link>, <Link href="https://github.com/habeebmh" target="_blank" rel="noopener noreferrer" >GitHub</Link>
        </Typography>
      </section>
      <section className={styles.imageContainer}>
        <img className={styles.bigImage} src={HabeebImage} alt="Habeeb Hooshmand (me)" />
      </section>
    </div>
  )
}

export default About