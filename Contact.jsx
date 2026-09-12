import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="section max-w-6xl mx-auto px-4 md:px-6 pb-10">
    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="contact-card glass">
      <div>
        <p className="section-kicker">05 — Contact</p>
        <h2>Have an idea?<br /><span className="gradient-text">Let's build it.</span></h2>
        <p className="contact-copy">I'm always interested in learning, collaborating and building useful things with great people.</p>
      </div>
      <div className="contact-actions">
        <a className="btn btn-primary" href="mailto:nidhikumari18878@gmail.com">Say hello <FaArrowRight /></a>
        <div className="contact-links">
          <a href="mailto:nidhikumari18878@gmail.com"><FaEnvelope /> Email</a>
          <a href="tel:+917870971799"><FaPhone /> Phone</a>
        </div>
        <div className="social-row">
          <a href="https://github.com/nidhikumari18878-ctrl" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/nidhi-dubey-022246380" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </motion.div>
    <footer>
      <span>© {new Date().getFullYear()} Nidhi Kumari</span>
      <span>Designed & built with React ✦</span>
    </footer>
  </section>
);

export default Contact;
