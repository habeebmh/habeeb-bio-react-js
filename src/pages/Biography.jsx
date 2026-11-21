import CareerTimeline from '../components/CareerTimeline';
import About from '../components/About';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PapersPatents from '../components/PapersPatents';
import styles from './Biography.module.css';

const Biography = () => (
  <div className={styles.page} id="top">
    <a className="skipLink" href="#main">Skip to content</a>
    <header><Navigation /></header>
    <main id="main">
      <About />
      <section className={styles.section} id="experience" aria-labelledby="experience-heading">
        <div className={styles.sectionHeader}>
          <div><p className="eyebrow">01 / THE JOURNEY</p><h2 id="experience-heading">A career built on curiosity.</h2></div>
          <p>From research to real-world products.<br />The teams, ideas, and work along the way.</p>
        </div>
        <CareerTimeline />
      </section>
      <section className={styles.section} id="research" aria-labelledby="research-heading">
        <div className={styles.sectionHeader}>
          <div><p className="eyebrow">02 / IDEAS & INVENTIONS</p><h2 id="research-heading">Papers & patents.</h2></div>
          <p>Exploring how data and technology<br />can solve practical problems.</p>
        </div>
        <PapersPatents />
      </section>
      <section className={styles.connect} aria-labelledby="connect-heading">
        <p className="eyebrow">KEEP IN TOUCH</p>
        <h2 id="connect-heading">Good things start with a conversation.</h2>
        <a className="button" href="mailto:habeeb@hooshmandenterprises.com">Say hello <span aria-hidden="true">↗</span></a>
      </section>
    </main>
    <Footer />
  </div>
);
export default Biography;
