import { useEffect, useRef } from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Team from './components/Team/Team';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const handleMouseMove = (e) => {
      if (!glow) return;
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
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
