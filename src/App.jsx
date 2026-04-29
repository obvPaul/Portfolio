import { useEffect } from 'react';
import DotGrid from './components/DotGrid/DotGrid';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Team from './components/Team/Team';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  useEffect(() => {
    const onScroll = () => {
      const y  = window.scrollY;
      const vh = window.innerHeight;
      const el = document.querySelector('.hero-inner');
      if (!el) return;
      if (y < vh) {
        el.style.transform = `translateY(${y * 0.18}px)`;
        el.style.opacity   = String(Math.max(0, 1 - (y / vh) * 1.5));
      } else {
        el.style.opacity = '0';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <DotGrid />
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
