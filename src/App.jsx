import { useEffect, useRef } from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Team from './components/Team/Team';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const dotsRef = useRef(null);

  useEffect(() => {
    let raf;
    let tx = 0, ty = 0; // mouse target (normalized -0.5 → 0.5)
    let cx = 0, cy = 0; // current (lerped)

    const onMove = (e) => {
      tx = e.clientX / window.innerWidth  - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    };

    // Hero parallax: content drifts up and fades as user scrolls past
    const onScroll = () => {
      const y  = window.scrollY;
      const vh = window.innerHeight;
      const el = document.querySelector('.hero-inner');
      if (!el) return;
      if (y < vh) {
        const p = y / vh;
        el.style.transform = `translateY(${y * 0.18}px)`;
        el.style.opacity   = String(Math.max(0, 1 - p * 1.5));
      } else {
        el.style.opacity = '0';
      }
    };

    // Smooth lerp loop for dot-grid parallax
    const loop = () => {
      cx += (tx - cx) * 0.038;
      cy += (ty - cy) * 0.038;
      if (dotsRef.current) {
        dotsRef.current.style.transform = `translate(${cx * 24}px, ${cy * 18}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // apply on initial load if page isn't at top
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="bg-dots" ref={dotsRef} />
      <Nav />
      <main>
        <Hero />
        <Team />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
