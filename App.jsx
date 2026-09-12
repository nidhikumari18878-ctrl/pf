import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skill';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'experience'],
  ['Contact', 'contact'],
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <nav className="h-20 flex items-center justify-between">
          <a href="#top" className="font-black tracking-tight text-xl">
            N<span className="gradient-text">.</span>K
          </a>

          <div className="hidden md:flex items-center gap-1 p-1 rounded-full nav-pill">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link">{label}</a>
            ))}
          </div>

          <a href="#contact" className="hidden sm:inline-flex btn btn-primary !py-2.5 !px-5 text-sm">
            Let's talk <span>↗</span>
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
            className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-lg"
          >
            {open ? '×' : '☰'}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden glass rounded-2xl p-3 mb-3"
            >
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="mobile-link">{label}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="top" className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <AnimatePresence>
        {showTop && (
          <motion.a
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            href="#top"
            aria-label="Back to top"
            className="back-top"
          >
            <FaArrowUp />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
