import { useEffect, useRef } from 'react';
import './Nav.css';

export default function Nav() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;

    const handleScroll = () => {
      if (!nav) return;
      nav.style.background = window.scrollY > 20
        ? 'rgba(13,13,18,0.85)'
        : 'rgba(13,13,18,0.6)';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-links a');

    const navIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.style.color = '');
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active && !active.classList.contains('nav-cta')) {
            active.style.color = 'var(--text)';
          }
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(s => navIO.observe(s));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navIO.disconnect();
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div className="nav-logo">WebCraft HTL</div>
      <ul className="nav-links">
        <li><a href="#team">Team</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact" className="nav-cta">Kontakt</a></li>
      </ul>
    </nav>
  );
}
