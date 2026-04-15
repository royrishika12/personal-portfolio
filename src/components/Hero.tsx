import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import './Hero.scss';

const roles = ['Fullstack Developer', 'AIML Developer'];

export default function Hero() {
  return (
    <section id="dashboard" className="section hero">
      {/* Ambient glow blobs */}
      <div className="hero-blob hero-blob--1" />
      <div className="hero-blob hero-blob--2" />

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <motion.span
            className="greeting-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            ✨ Welcome to my portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hello, I'm{' '}
            <span className="name-highlight">Rishika Roy</span>
          </motion.h1>

          <motion.div
            className="roles-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {roles.map((role, i) => (
              <span key={i} className={`role-tag role-tag--${i}`}>{role}</span>
            ))}
          </motion.div>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            BTech 2nd Year | Computer Science Engineering
          </motion.p>

          <motion.div
            className="actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a href="images/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary">
              <FileText size={18} />
              View Resume
            </a>
            <a href="#projects" className="btn-secondary">
              See Projects
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="image-ring">
            <div className="image-inner">
              <img src="images/pp.jpeg" alt="Rishika Roy" />
            </div>
          </div>
          <div className="image-glow" />
        </motion.div>
      </div>
    </section>
  );
}
