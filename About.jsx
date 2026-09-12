import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBrain, FaRocket } from 'react-icons/fa';

const stats = [
  [<FaGraduationCap />, '8.90', '/10', 'Current CGPA'],
  [<FaCode />, '5', '+', 'Projects'],
  [<FaBrain />, '200', '+', 'DSA Problems'],
  [<FaRocket />, '15', '+', 'Technologies'],
];

const About = () => (
  <section id="about" className="section max-w-6xl mx-auto px-4 md:px-6">
    <div className="section-head">
      <p className="section-kicker">01 — About</p>
      <h2>Building with <span className="gradient-text">curiosity.</span></h2>
    </div>

    <div className="about-grid">
      <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="about-copy glass">
        <span className="quote-mark">“</span>
        <p>
          I'm a Computer Science student at <b>Nalanda College of Engineering, Chandi</b>,
          passionate about turning problems into practical software.
        </p>
        <p>
          I enjoy working across the stack, exploring new tools, and strengthening my
          fundamentals through DSA. My goal is simple: keep learning, build things that matter,
          and make every project a little better than the last.
        </p>
        <div className="tag-row">
          <span>Full Stack</span><span>Problem Solver</span><span>Lifelong Learner</span>
        </div>
      </motion.div>

      <div className="stats-grid">
        {stats.map(([icon, value, suffix, label], i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={{ y: -6 }}
            className="stat-card glass">
            <div className="stat-icon">{icon}</div>
            <div className="stat-value">{value}<small>{suffix}</small></div>
            <div className="stat-label">{label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
