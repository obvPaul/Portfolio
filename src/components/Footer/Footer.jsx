import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">WebCraft HTL</div>
        <div className="footer-copy">© 2025 WebCraft HTL Dornbirn. Alle Rechte vorbehalten.</div>
        <ul className="footer-links">
          <li><a href="#hero">Start</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </div>
    </footer>
  );
}
