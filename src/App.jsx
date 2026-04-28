import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Team from './components/Team/Team';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
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
