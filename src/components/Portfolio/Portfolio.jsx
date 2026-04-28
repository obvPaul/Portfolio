import { useState, useEffect, useRef } from 'react';
import { useReveal } from '../../hooks/useReveal';
import './Portfolio.css';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7"/>
    <path d="M7 7h10v10"/>
  </svg>
);

function CountUp({ target, duration = 700 }) {
  const [value, setValue]       = useState(0);
  const [started, setStarted]   = useState(false);
  const spanRef                 = useRef(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.8 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTs;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      // ease-out curve
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={spanRef}>{value}</span>;
}

export default function Portfolio() {
  const headerRef  = useReveal();
  const projectRef = useReveal();
  const statsRef   = useReveal();

  return (
    <section id="portfolio">
      <div className="container">

        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Referenzen</span>
          <h2 className="section-title">Bereits erfolgreich<br />umgesetzt</h2>
          <p className="section-sub">
            Unsere erste Website wurde erfolgreich verkauft –
            hier ist das Ergebnis.
          </p>
        </div>

        <div className="portfolio-project reveal" ref={projectRef}>

          <div className="portfolio-preview">
            <div className="browser-bar">
              <div className="browser-dot" />
              <div className="browser-dot" />
              <div className="browser-dot" />
              <div className="browser-url">silverneedlepiercing.com</div>
            </div>
            <div className="portfolio-iframe-wrap">
              <iframe
                src="https://silverneedlepiercing.com/"
                title="Silver Needle Piercing Website"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          <div className="portfolio-info">
            <span className="portfolio-status">Projekt · Verkauft</span>
            <h3 className="portfolio-title">Silver Needle<br />Piercing</h3>
            <p className="portfolio-desc">
              Professionelle Website für ein Piercing-Studio in der Region.
              Design und Entwicklung komplett von uns – von der ersten Idee
              bis zum Launch.
            </p>
            <div className="portfolio-tech">
              {['HTML / CSS', 'JavaScript', 'Responsive', 'SEO'].map(t => (
                <span className="tech-badge" key={t}>{t}</span>
              ))}
            </div>
            <a
              href="https://silverneedlepiercing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              Website besuchen <ArrowIcon />
            </a>
          </div>

        </div>

        <div className="portfolio-stats reveal" ref={statsRef}>
          <div className="stat">
            <div className="stat-num"><CountUp target={1} duration={500} /></div>
            <div className="stat-label">Abgeschlossenes Projekt</div>
          </div>
          <div className="stat">
            <div className="stat-num"><CountUp target={3} duration={900} /></div>
            <div className="stat-label">Entwickler im Team</div>
          </div>
          <div className="stat">
            <div className="stat-num infinity">∞</div>
            <div className="stat-label">Möglichkeiten</div>
          </div>
        </div>

      </div>
    </section>
  );
}
