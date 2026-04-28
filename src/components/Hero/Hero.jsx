import './Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner container">

        <div className="hero-bar hero-top">
          <span>Webdesign Studio</span>
          <span>HTL Dornbirn · Vorarlberg</span>
        </div>

        <div className="hero-body">
          <h1 className="hero-title">
            Wir bauen<br />
            Websites,<br />
            <em>die bleiben.</em>
          </h1>

          <div className="hero-aside">
            <p className="hero-sub">
              Drei Schüler aus Vorarlberg mit echtem Ehrgeiz.
              Kein Agentur-Overhead – nur saubere Arbeit, die wirkt.
            </p>
            <div className="hero-ctas">
              <a href="#portfolio" className="btn-primary">Unsere Arbeit</a>
              <a href="#contact" className="btn-ghost">Anfrage stellen</a>
            </div>
          </div>
        </div>

        <div className="hero-bar hero-bottom">
          <div className="hero-names">
            <span>Florian Fleisch</span>
            <span>Paul Oppeneiger</span>
            <span>Onur Arslan</span>
          </div>
          <span className="hero-scroll">Scroll ↓</span>
        </div>

      </div>
    </section>
  );
}
