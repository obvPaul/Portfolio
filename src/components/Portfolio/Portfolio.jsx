import { useReveal } from '../../hooks/useReveal';
import './Portfolio.css';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7"/>
    <path d="M7 7h10v10"/>
  </svg>
);

const DotIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="5" r="4" fill="currentColor"/>
  </svg>
);

export default function Portfolio() {
  const headerRef = useReveal();
  const cardRef   = useReveal();
  const statsRef  = useReveal();

  return (
    <section id="portfolio">
      <div className="container">

        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Referenzen</span>
          <h2 className="section-title">Bereits erfolgreich umgesetzt</h2>
          <p className="section-sub">
            Wir haben unsere erste Website bereits erfolgreich verkauft –
            hier ist das Ergebnis.
          </p>
        </div>

        <div className="portfolio-card reveal" ref={cardRef}>

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
            <div>
              <span className="portfolio-tag">
                <DotIcon /> Verkaufte Website
              </span>
            </div>

            <h3 className="portfolio-title">Silver Needle Piercing</h3>

            <p className="portfolio-desc">
              Professionelle Website für ein Piercing-Studio in der Region.
              Wir haben das komplette Design und die Entwicklung übernommen –
              von der ersten Idee bis zum Launch. Das Studio kann jetzt selbst
              Öffnungszeiten und Inhalte verwalten.
            </p>

            <div className="portfolio-tech">
              {['HTML / CSS', 'JavaScript', 'Responsive', 'SEO-optimiert'].map(t => (
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

        <div className="stats-bar reveal" ref={statsRef}>
          <div className="stat">
            <div className="stat-num">1</div>
            <div className="stat-label">Abgeschlossenes Projekt</div>
          </div>
          <div className="stat">
            <div className="stat-num">3</div>
            <div className="stat-label">Entwickler im Team</div>
          </div>
          <div className="stat">
            <div className="stat-num">∞</div>
            <div className="stat-label">Möglichkeiten</div>
          </div>
        </div>

      </div>
    </section>
  );
}
