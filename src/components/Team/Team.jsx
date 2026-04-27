import { useReveal, useStagger } from '../../hooks/useReveal';
import './Team.css';

const members = [
  {
    initials: 'FF',
    name: 'Florian Fleisch',
    role: 'Hauptdesigner',
    bio: 'Florian bestimmt den visuellen Auftritt jeder Website. Von der ersten Skizze bis zum finalen Look – er sorgt dafür, dass Design und Nutzererlebnis perfekt zusammenpassen.',
    gradient: 'linear-gradient(135deg, #d97757, #9b72f5)',
    /* foto: import './img/florian.jpg' und als src übergeben */
  },
  {
    initials: 'PO',
    name: 'Paul Oppeneiger',
    role: 'Kundenbetreuung & Design',
    bio: 'Paul ist das Bindeglied zwischen Kunde und Team. Er versteht, was Kunden wirklich brauchen, kommuniziert klar und bringt sich aktiv ins Design ein.',
    gradient: 'linear-gradient(135deg, #9b72f5, #e06ba0)',
  },
  {
    initials: 'OA',
    name: 'Onur Arslan',
    role: 'Backend-Entwicklung',
    bio: 'Onur kümmert sich um alles, was im Hintergrund passiert. Funktionen, Logik, Server – er macht Websites nicht nur schön, sondern auch intelligent.',
    gradient: 'linear-gradient(135deg, #6eb3f5, #9b72f5)',
  },
];

export default function Team() {
  const headerRef = useReveal();
  const gridRef   = useStagger();

  return (
    <section id="team">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Das Team</span>
          <h2 className="section-title">Lern uns kennen</h2>
          <p className="section-sub">
            Wir sind drei Schüler aus Vorarlberg, die zusammen Webprojekte von der Idee
            bis zum fertigen Produkt umsetzen.
          </p>
        </div>

        <div className="team-grid stagger-children" ref={gridRef}>
          {members.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar" style={{ background: m.gradient }}>
                {m.photo
                  ? <img src={m.photo} alt={m.name} />
                  : <div className="team-avatar-placeholder">{m.initials}</div>
                }
              </div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <p className="team-bio">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
