import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Certificates from './sections/Certificates.jsx';
import Contact from './sections/Contact.jsx';
import { certificates, hideSectionWhenEmpty } from './data/certificates.js';

export default function App() {
  const showCertificates = !(hideSectionWhenEmpty && certificates.length === 0);

  const links = [
    { id: 'home', key: 'home' },
    { id: 'about', key: 'about' },
    { id: 'skills', key: 'skills' },
    { id: 'projects', key: 'projects' },
    ...(showCertificates ? [{ id: 'certificates', key: 'certificates' }] : []),
    { id: 'contact', key: 'contact' },
  ];

  return (
    <>
      <Navbar links={links} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {showCertificates && <Certificates />}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
