import { useReveal, useStagger } from '../../hooks/useReveal';
import './Team.css';

const members = [
  {
    initials: 'FF',
    name: 'Florian Fleisch',
    role: 'Hauptdesigner',
    bio: 'Florian bestimmt den visuellen Auftritt jeder Website. Von der ersten Skizze bis zum finalen Look – er sorgt dafür, dass Design und Nutzererlebnis perfekt zusammenpassen.',
    color: '#c97c50',
  },
  {
    initials: 'PO',
    name: 'Paul Oppeneiger',
    role: 'Kundenbetreuung & Design',
    bio: 'Paul ist das Bindeglied zwischen Kunde und Team. Er versteht, was Kunden wirklich brauchen, kommuniziert klar und bringt sich aktiv ins Design ein.',
    color: '#9b72f5',
  },
  {
    initials: 'OA',
    name: 'Onur Arslan',
    role: 'Backend-Entwicklung',
    bio: 'Onur kümmert sich um alles, was im Hintergrund passiert. Funktionen, Logik, Server – er macht Websites nicht nur schön, sondern auch intelligent.',
    color: '#6eb3f5',
  },
];

export default function Team() {
  const headerRef = useReveal();
  const listRef   = useStagger();

  return (
    <section id="team">
      <div className="container">

        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Team</span>
          <h2 className="section-title">Drei Leute.<br />Ein Ergebnis.</h2>
        </div>

        <div className="team-list stagger-children" ref={listRef}>
          {members.map((m, i) => (
            <div className="team-row" key={m.name}>
              <div className="team-row-left">
                <span className="team-num">0{i + 1}</span>
                <div className="team-pip" style={{ background: m.color }}>
                  {m.initials}
                </div>
                <div className="team-identity">
                  <span className="team-name">{m.name}</span>
                  <span className="team-role">{m.role}</span>
                </div>
              </div>
              <p className="team-bio">{m.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
