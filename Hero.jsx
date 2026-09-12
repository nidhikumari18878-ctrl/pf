import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const heroRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const r = heroRef.current?.getBoundingClientRect();
      if (!r) return;
      setMouse({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const socials = [
    ['GitHub', 'https://github.com/nidhikumari18878-ctrl', <FaGithub />],
    ['LinkedIn', 'https://www.linkedin.com/in/nidhi-dubey-022246380', <FaLinkedin />],
    ['Email', 'mailto:nidhikumari18878@gmail.com', <FaEnvelope />],
  ];

  return (
    <section ref={heroRef} className="hero min-h-screen flex items-center px-4 md:px-6 pt-24">
      <div className="hero-grid" />
      <div className="hero-glow" style={{ transform: `translate(${mouse.x * 35}px, ${mouse.y * 35}px)` }} />
      <div className="hero-dots" />

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center relative z-10">
        <div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">
            <span className="status-dot" /> Available for exciting opportunities
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}
            className="mt-7 text-sm md:text-base text-slate-400 font-medium">
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}
            className="hero-title"
          >
            Nidhi <span className="gradient-text">Kumari.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}
            className="hero-role"
          >
            <TypeAnimation
              sequence={['Computer Science Student', 1800, 'Full Stack Developer', 1800, 'DSA Enthusiast', 1800, 'Problem Solver', 1800]}
              speed={45} repeat={Infinity}
            />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}
            className="hero-copy"
          >
            I turn ideas into clean, useful digital experiences — blending problem-solving,
            modern web technologies and a constant curiosity to learn.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn btn-primary">Explore my work <FaArrowRight /></a>
            <a href="#contact" className="btn btn-ghost">Let's connect</a>
          </motion.div>

          <div className="mt-8 flex items-center gap-4">
            {socials.map(([label, href, icon]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="social-btn">{icon}</a>
            ))}
            <span className="h-px w-16 bg-white/10" />
            <span className="text-xs uppercase tracking-[.22em] text-slate-500">Based in Bihar, India</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: .9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: .8, type: 'spring' }}
          className="hero-card-wrap"
          style={{ transform: `perspective(1000px) rotateY(${mouse.x * 7}deg) rotateX(${mouse.y * -5}deg)` }}
        >
          <div className="code-card glass">
            <div className="code-top"><span /><span /><span /><b>nidhi.dev</b></div>
            <div className="code-body">
              <div><i>01</i><span><em>const</em> developer = {'{'}</span></div>
              <div><i>02</i><span>&nbsp;&nbsp;name: <strong>'Nidhi Kumari'</strong>,</span></div>
              <div><i>03</i><span>&nbsp;&nbsp;focus: <strong>'Full Stack'</strong>,</span></div>
              <div><i>04</i><span>&nbsp;&nbsp;mindset: <strong>'Always Learning'</strong>,</span></div>
              <div><i>05</i><span>&nbsp;&nbsp;coffee: <strong>true</strong></span></div>
              <div><i>06</i><span>{'}'}</span></div>
              <div className="code-cursor"><i>07</i><span><em>build</em>(<strong>ideas</strong>);</span></div>
            </div>
            <div className="floating-chip chip-one"><FaCode /> React</div>
            <div className="floating-chip chip-two">⚡ Node.js</div>
            <div className="floating-chip chip-three">🐍 Python</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
