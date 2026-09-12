import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaCheck } from 'react-icons/fa';

const items = [
  { title: 'Bachelor of Technology — Computer Science & Engineering', institution: 'Nalanda College of Engineering, Chandi', year: '2025 — 2029', result: 'CGPA: 8.90 / 10', points: ['Academic Excellence', 'Project Leader'] },
  { title: 'Higher Secondary School', institution: 'Jawahar Lal Nehru College, Dehri-On-Sone', year: '2022 — 2024', result: '87.6%', points: ['Science Stream', 'Merit Holder'] },
  { title: 'Secondary School', institution: 'P.P.C.M Vidyalya, Amjhore (Rohtas)', year: '2021 — 2022', result: '89.6%', points: ['Maths: 100 / 100', 'Science: 99 / 100'] },
];

const Experience = () => (
  <section id="experience" className="section max-w-5xl mx-auto px-4 md:px-6">
    <div className="section-head center">
      <p className="section-kicker">04 — Education</p>
      <h2>The journey <span className="gradient-text">so far.</span></h2>
    </div>
    <div className="timeline">
      {items.map((item, i) => (
        <motion.div key={item.title} initial={{ opacity: 0, x: i % 2 ? 25 : -25 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} className="timeline-item">
          <div className="timeline-dot"><FaGraduationCap /></div>
          <div className="timeline-card glass">
            <div className="timeline-top"><span><FaCalendarAlt /> {item.year}</span><b>{item.result}</b></div>
            <h3>{item.title}</h3>
            <p>{item.institution}</p>
            <div className="tag-row">{item.points.map(point => <span key={point}><FaCheck /> {point}</span>)}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
