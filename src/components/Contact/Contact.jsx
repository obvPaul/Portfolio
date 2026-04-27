import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import './Contact.css';

const INITIAL = { fname: '', lname: '', email: '', subject: '', message: '' };

export default function Contact() {
  const headerRef = useReveal();
  const infoRef   = useReveal();
  const formRef   = useReveal();

  const [fields, setFields] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  const handleChange = (e) =>
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Hier Formspree-Endpoint eintragen:
    // fetch('https://formspree.io/f/DEINE_ID', { method: 'POST', body: new FormData(e.target) })
    //   .then(() => { setStatus('sent'); setFields(INITIAL); });

    setTimeout(() => {
      setStatus('sent');
      setFields(INITIAL);
    }, 1000);
  };

  return (
    <section id="contact">
      <div className="container">

        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Kontakt</span>
          <h2 className="section-title">Lass uns reden</h2>
          <p className="section-sub">
            Du hast ein Projekt im Kopf? Schreib uns – wir melden uns so schnell wie möglich zurück.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-info reveal" ref={infoRef}>
            <h3>Wir freuen uns auf dein Projekt</h3>
            <p>
              Egal ob neue Website, Redesign oder eine spezifische Funktion –
              wir hören zu, denken mit und setzen es um. Keine versteckten Kosten,
              keine Agentur-Bürokratie. Einfach direkt mit uns.
            </p>

            <div className="contact-detail">
              <div className="contact-icon">📧</div>
              <span>E-Mail folgt</span>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">📍</div>
              <span>HTL Dornbirn, Vorarlberg</span>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">💬</div>
              <span>Instagram / LinkedIn folgt</span>
            </div>
          </div>

          <div className="reveal" ref={formRef}>
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">Vorname</label>
                  <input id="fname" name="fname" type="text" placeholder="Max" required
                    value={fields.fname} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Nachname</label>
                  <input id="lname" name="lname" type="text" placeholder="Mustermann" required
                    value={fields.lname} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input id="email" name="email" type="email" placeholder="max@beispiel.at" required
                  value={fields.email} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Betreff</label>
                <select id="subject" name="subject" value={fields.subject} onChange={handleChange}>
                  <option value="">Auswählen …</option>
                  <option value="neue-website">Neue Website</option>
                  <option value="redesign">Redesign</option>
                  <option value="landingpage">Landing Page</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Nachricht</label>
                <textarea id="message" name="message" placeholder="Erzähl uns von deinem Projekt …" required
                  value={fields.message} onChange={handleChange} />
              </div>

              {status !== 'sent' ? (
                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden →'}
                </button>
              ) : (
                <div className="form-success">✅ Danke! Wir melden uns bald bei dir.</div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
