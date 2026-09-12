import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaDatabase, FaTools } from 'react-icons/fa';

const categories = [
  { icon: <FaCode />, title: 'Languages', skills: ['C', 'C++', 'Python', 'Java', 'SQL'] },
  { icon: <FaLaptopCode />, title: 'Frontend', skills: ['HTML5', 'CSS', 'Tailwind CSS', 'JavaScript', 'React'] },
  { icon: <FaDatabase />, title: 'Backend & Data', skills: ['Node.js', 'Express.js', 'MongoDB'] },
  { icon: <FaTools />, title: 'Tools & Core', skills: ['Git', 'GitHub', 'VS Code', 'DSA', 'OOP', 'OS'] },
];

const Skills = () => (
  <section id="skills" className="section max-w-6xl mx-auto px-4 md:px-6">
    <div className="section-head center">
      <p className="section-kicker">02 — Toolkit</p>
      <h2>My technical <span className="gradient-text">stack.</span></h2>
      <p>Tools and fundamentals I use to turn concepts into working products.</p>
    </div>

    <div className="skills-grid">
      {categories.map((cat, i) => (
        <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={{ y: -7 }}
          className="skill-card glass">
          <div className="skill-title"><span>{cat.icon}</span><h3>{cat.title}</h3></div>
          <div className="skill-list">{cat.skills.map(s => <span key={s}>{s}</span>)}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
