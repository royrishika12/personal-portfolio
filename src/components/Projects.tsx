import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.scss';

const projects = [
  {
    title: 'Adjournment AI',
    description: 'An AI-powered courtroom simulation platform that uses large language models to simulate legal proceedings, generate case arguments and provide real-time legal insight via an interactive web interface.',
    link: 'https://github.com/Adjournment-ai',
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.12), rgba(99,102,241,0.12))',
    border: 'rgba(56,189,248,0.3)',
    tag: 'AI / LLM',
    tagColor: '#38bdf8',
  },
  {
    title: 'Spamber',
    description: 'Machine learning-based SMS message classification system to identify and filter unwanted messages using text preprocessing and classification. Built with NumPy, Pandas, scikit-learn.',
    link: 'https://github.com/royrishika12/Spamber-ML-Project',
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(20,184,166,0.12))',
    border: 'rgba(34,197,94,0.3)',
    tag: 'ML / Python',
    tagColor: '#22c55e',
  },
  {
    title: 'Nexus AI',
    description: 'An all-in-one career prep platform with an AI-driven Resume Checker and an intelligent Interview Chatbot that helps job seekers optimize resumes for ATS and practice mock interviews.',
    link: 'https://github.com/royrishika12/Nexus-AI',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.12))',
    border: 'rgba(168,85,247,0.3)',
    tag: 'AI / React',
    tagColor: '#a855f7',
  },
  {
    title: 'SwasthyaJyoti',
    description: 'Medical web platform for migrant health tracking and disease prediction, bridging healthcare accessibility gaps.',
    link: 'https://github.com/royrishika12/SwasthyaJyoti',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(234,179,8,0.12))',
    border: 'rgba(249,115,22,0.3)',
    tag: 'Healthcare',
    tagColor: '#f97316',
  },
  {
    title: 'Professional Portfolio',
    description: 'Advanced dashboard-based personal portfolio built with React, TypeScript, SCSS and Framer Motion animations.',
    link: 'https://github.com/royrishika12/personal-portfolio',
    gradient: 'linear-gradient(135deg, rgba(20,184,166,0.12), rgba(56,189,248,0.12))',
    border: 'rgba(20,184,166,0.3)',
    tag: 'React / TSX',
    tagColor: '#14b8a6',
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'Interactive web-based tic-tac-toe game with a clean, responsive UI.',
    link: 'https://github.com/royrishika12/HTML-CSS/tree/main/tic%20tac%20toe%202.0',
    gradient: 'linear-gradient(135deg, rgba(244,114,182,0.12), rgba(167,139,250,0.12))',
    border: 'rgba(244,114,182,0.3)',
    tag: 'HTML / JS',
    tagColor: '#f472b6',
  },
  {
    title: 'To-Do List App',
    description: 'Task management web application with priority tracking and clean UI.',
    link: 'https://github.com/royrishika12/WebApplication-To-Do-List',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(129,140,248,0.12))',
    border: 'rgba(99,102,241,0.3)',
    tag: 'Web App',
    tagColor: '#818cf8',
  },
  {
    title: 'Restaurant Website – The Haveli',
    description: 'Complete restaurant website with menu, orders, and reservations features.',
    link: 'https://github.com/royrishika12/restaurant-website',
    gradient: 'linear-gradient(135deg, rgba(234,179,8,0.12), rgba(249,115,22,0.12))',
    border: 'rgba(234,179,8,0.3)',
    tag: 'HTML / CSS',
    tagColor: '#eab308',
  },
  {
    title: 'Rep-count',
    description: 'Repetition counter app for workouts and fitness activities.',
    link: 'https://github.com/royrishika12/rep-count',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(52,211,153,0.12))',
    border: 'rgba(16,185,129,0.3)',
    tag: 'Fitness App',
    tagColor: '#10b981',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            style={{ background: project.gradient, borderColor: project.border }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, boxShadow: `0 16px 48px ${project.border}` }}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-tag" style={{ color: project.tagColor, borderColor: project.border }}>
                {project.tag}
              </span>
            </div>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link" style={{ color: project.tagColor }}>
              View on GitHub <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
