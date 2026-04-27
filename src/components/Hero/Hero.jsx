import './Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        HTL Dornbirn · Webdesign &amp; Entwicklung
      </div>

      <h1 className="hero-title">
        <span className="line-plain">Wir bauen Websites,</span>
        <br />
        <span className="line-gradient">die begeistern.</span>
      </h1>

      <p className="hero-sub">
        Drei Schüler der HTL Dornbirn mit Leidenschaft für modernes Webdesign,
        sauberen Code und digitale Erlebnisse, die überzeugen.
      </p>

      <div className="hero-buttons">
        <a href="#portfolio" className="btn-primary">Unsere Arbeit ansehen</a>
        <a href="#contact" className="btn-secondary">Jetzt kontaktieren</a>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
