import { Nav } from './components/Nav';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { OpenSource } from './sections/OpenSource';
import { Skills } from './sections/Skills';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Projects />
        <OpenSource />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
