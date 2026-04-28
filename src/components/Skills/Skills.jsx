import { useReveal, useStagger } from '../../hooks/useReveal';
import './Skills.css';

const skills = [
  'UI / UX Design',
  'HTML & CSS',
  'JavaScript',
  'Responsive Design',
  'Web Performance',
  'SEO',
  'CSS Animationen',
  'Hosting & Deployment',
];

export default function Skills() {
  const headerRef = useReveal();
  const listRef   = useStagger();

  return (
    <section id="skills">
      <div className="container">
        <div className="skills-layout">

          <div className="section-header reveal" ref={headerRef}>
            <span className="section-label">Kompetenzen</span>
            <h2 className="section-title">Was wir<br />können</h2>
            <p className="section-sub">
              Von der ersten Idee bis zum Launch –
              wir decken den gesamten Prozess ab.
            </p>
          </div>

          <ul className="skills-list stagger-children" ref={listRef}>
            {skills.map((s) => (
              <li className="skill-item" key={s}>
                <span className="skill-name">{s}</span>
                <span className="skill-arrow" aria-hidden="true">→</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
