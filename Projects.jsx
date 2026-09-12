import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowUpRightFromSquare } from 'react-icons/fa';

const projects = [
  {
    number: '01',
    title: 'NextHire AI',
    description: 'An AI-powered placement companion for job discovery, ATS-style resume analysis, skill extraction and application tracking.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Gemini AI', 'JSearch API', 'Tailwind'],
    github: 'https://github.com/nidhikumari18878-ctrl/project-1',
    live: 'https://project-1-i8ts.onrender.com',
    accent: 'purple',
  },
  {
    number: '02',
    title: 'Portfolio Website',
    description: 'A responsive developer portfolio focused on polished interactions, strong visual hierarchy and a fast modern experience.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/nidhikumari18878-ctrl/portfolio',
    live: '#',
    accent: 'cyan',
  },
];

const Projects = () => (
  <section id="projects" className="section max-w-6xl mx-auto px-4 md:px-6">
    <div className="section-head">
      <p className="section-kicker">03 — Selected work</p>
      <h2>Things I've <span className="gradient-text">built.</span></h2>
    </div>

    <div className="projects-list">
      {projects.map((p, i) => (
        <motion.article key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * .1 }} className={`project-card glass ${p.accent}`}>
          <div className="project-visual">
            <span className="project-number">{p.number}</span>
            <div className="visual-window">
              <div className="window-bar"><span/><span/><span/></div>
              <div className="visual-lines"><b/><b/><b/><b/></div>
              <div className="visual-orb">✦</div>
            </div>
          </div>
          <div className="project-info">
            <div className="flex items-center justify-between gap-4">
              <span className="mini-label">Featured project</span>
              <FaArrowUpRightFromSquare className="text-slate-600" />
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Source</a>
              {p.live !== '#' && <a href={p.live} target="_blank" rel="noopener noreferrer" className="live-link">Live demo <FaExternalLinkAlt /></a>}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Projects;
