import styles from './Footer.module.css';
const Footer = () => (
  <footer className={styles.footer}>
    <span>© {new Date().getFullYear()} Habeeb Hooshmand</span>
    <span>Engineering · Music · Everything in between.</span>
    <a href="#top">Back to top ↑</a>
  </footer>
);
export default Footer;
