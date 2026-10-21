import styles from './About.module.css';

const About = () => (
  <section id="about" className={styles.about} aria-labelledby="intro-heading">
    <div className={styles.hero}>
      <div className={styles.intro}>
        <p className="eyebrow"><span className={styles.locationDot} /> DALLAS, TEXAS</p>
        <h1 id="intro-heading">Habeeb<br /><span>Hooshmand.</span></h1>
        <p className={styles.roles}>Engineer. Entrepreneur.<br />DJ. Referee.</p>
        <p className={styles.description}>I build software, bring people together through music, and stay close to the game. Different worlds. The same curiosity.</p>
        <div className={styles.actions}><a className="button" href="#experience">Explore my work <span aria-hidden="true">↓</span></a><a href="https://nightmethodagency.com/habeeb" target="_blank" rel="noopener noreferrer" className={styles.music}>Discover my music <span aria-hidden="true">↗</span></a></div>
        <div className={styles.socials} aria-label="Social profiles">
          <a href="https://www.linkedin.com/in/habeebhooshmand/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/habeebmh" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.instagram.com/iamhabeebh/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <a href="https://scholar.google.com/citations?user=iP66x48AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Scholar ↗</a>
        </div>
      </div>
      <figure className={styles.portrait}>
        <img src="/assets/HabeebPortrait.webp" alt="Habeeb Hooshmand in a professional studio portrait" width="1000" height="1500" />
        <figcaption><span>A little bit of everything.</span></figcaption>
      </figure>
    </div>
    <div className={styles.facets}>
      <div><span className={styles.number}>01</span><h2>Engineering</h2><p>Staff Software Engineer at <a href="https://www.self.inc" target="_blank" rel="noopener noreferrer">Self ↗</a></p></div>
      <div><span className={styles.number}>02</span><h2>Entrepreneurship</h2><p>Founder of <a href="https://hooshmandenterprises.com" target="_blank" rel="noopener noreferrer">Hooshmand Enterprises ↗</a></p></div>
      <div><span className={styles.number}>03</span><h2>Music</h2><p>House DJ & producer.<br /><a href="https://nightmethodagency.com/habeeb" target="_blank" rel="noopener noreferrer">Behind the decks ↗</a></p></div>
      <div><span className={styles.number}>04</span><h2>On the pitch</h2><p>Soccer referee in the NCAA, MASL & lower division pro leagues.</p></div>
    </div>
    <p className={styles.education}>Texas A&M University <span> / </span> Class of 2019</p>
  </section>
);
export default About;
