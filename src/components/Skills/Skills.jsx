import { useReveal, useStagger } from '../../hooks/useReveal';
import './Skills.css';

const skills = [
  { icon: '🎨', name: 'UI / UX Design' },
  { icon: '⚡', name: 'HTML & CSS' },
  { icon: '🔧', name: 'JavaScript' },
  { icon: '📱', name: 'Responsive Design' },
  { icon: '🚀', name: 'Web Performance' },
  { icon: '🔍', name: 'SEO' },
  { icon: '✨', name: 'CSS Animationen' },
  { icon: '🌐', name: 'Hosting & Deployment' },
];

export default function Skills() {
  const headerRef = useReveal();
  const gridRef   = useStagger();

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Unsere Skills</span>
          <h2 className="section-title">Was wir können</h2>
          <p className="section-sub">
            Von der Konzeption über das Design bis zur fertigen, live geschalteten Website –
            wir decken den gesamten Prozess ab.
          </p>
        </div>

        <div className="skills-grid stagger-children" ref={gridRef}>
          {skills.map((s) => (
            <div className="skill-item" key={s.name}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
