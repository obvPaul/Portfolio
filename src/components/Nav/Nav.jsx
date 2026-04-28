import { useEffect, useRef } from 'react';
import './Nav.css';

export default function Nav() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const check = () => {
      if (!nav) return;
      nav.dataset.scrolled = window.scrollY > 30 ? 'true' : 'false';
    };
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <nav ref={navRef} data-scrolled="false">
      <a href="#hero" className="nav-logo">WebCraft HTL</a>
      <ul className="nav-links">
        <li><a href="#team">Team</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact" className="nav-cta">Kontakt</a></li>
      </ul>
    </nav>
  );
}
