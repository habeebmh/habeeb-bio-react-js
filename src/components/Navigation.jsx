import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav} aria-label="Main navigation">
    <a className={styles.brand} href="/#top" aria-label="Habeeb Hooshmand home">hh<span>.</span></a>
    <div className={styles.items}>
      <a href="/#about">About</a>
      <a href="/#experience">Experience</a>
      <a href="/#research">Research</a>
      <a className={styles.contact} href="mailto:habeeb@hooshmandenterprsies.com">Let’s connect <span aria-hidden="true">↗</span></a>
    </div>
  </nav>
);

export default Navigation;
