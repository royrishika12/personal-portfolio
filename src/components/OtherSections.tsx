import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './OtherSections.scss';

const achievementColors = [
  { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.35)', icon: '#fbbf24' },
  { bg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.35)', icon: '#38bdf8' },
  { bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.35)', icon: '#a855f7' },
  { bg: 'rgba(34,197,94,0.12)', border: 'rgba(34,197,94,0.35)', icon: '#22c55e' },
  { bg: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.35)', icon: '#ec4899' },
];

export function Achievements() {
  const achievementsList = [
    {
      text: '🏆 Grand Finalist at Hack O NiT and participated in AI Utkarsh 2026.',
    },
    {
      text: '🎓 Completed a 10-week IT EduSkill Python Fullstack Web Development Internship.',
      link: 'https://www.linkedin.com/posts/rishika-roy-2a2923399_python-fullstackdevelopment-internshipcompletion-activity-7434160038904119296-YOu4?utm_source=share&utm_medium=member_android&rcm=ACoAAGHYs9oBmUFbbxpWk16giAR8ct_Rsx1u7gg',
    },
    {
      text: '🏆 Participated in SIH 2025 College Internals and secured Rank 19 with team CodeCatalyst.',
      link: 'https://www.linkedin.com/posts/rishika-roy-2a2923399_smartindiahackathon-sih2025-digitalhealth-activity-7404425448639635457-Gf8w',
    },
    {
      text: '🎓 Completed a 4-week Virtual Internship at Pinnacle Labs in Frontend Web Development.',
      link: 'https://www.linkedin.com/posts/rishika-roy-2a2923399_pinnaclelabs-internship2025-webdevelopment-activity-7411452628301168640-Guxk',
    },
  ];

  return (
    <section id="achievements" className="section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Achievements
      </motion.h2>
      <div className="grid-cards">
        {achievementsList.map((item, i) => {
          const c = achievementColors[i % achievementColors.length];
          return (
            <motion.div
              key={i}
              className="achievement-card"
              style={{ background: c.bg, borderColor: c.border }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: `0 12px 40px ${c.border}` }}
            >
              <p>{item.text}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="achieve-link" style={{ color: c.icon }}>
                  View on LinkedIn <ExternalLink size={13} />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Education
      </motion.h2>
      <div className="edu-list">
        {[
          {
            emoji: '🏫',
            title: 'School',
            desc: 'Passed Class 10 and 12 from Krishnanagar Government Girls High School.',
            color: '#22d3ee',
          },
          {
            emoji: '🎓',
            title: 'University',
            desc: 'Pursuing B.Tech in Computer Science Engineering from Narula Institute of Technology, Agarpara, Kolkata.',
            color: '#a78bfa',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="edu-card glass-card"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <span className="edu-emoji">{item.emoji}</span>
            <div>
              <h3 style={{ color: item.color, fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ margin: 0 }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const resultColors = [
  { bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.3)', val: '#38bdf8' },
  { bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.3)', val: '#a855f7' },
  { bg: 'rgba(34,197,94,0.1)',  border: 'rgba(34,197,94,0.3)',  val: '#22c55e' },
  { bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.3)', val: '#f97316' },
];

export function Results() {
  const resultsData = [
    { label: 'Class 10', value: '81%' },
    { label: 'Class 12', value: '86%' },
    { label: '1st Semester', value: '8.89 SGPA' },
    { label: '2nd Semester', value: '9.16 SGPA' },
  ];

  return (
    <section id="results" className="section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Academic Results
      </motion.h2>
      <div className="grid-cards">
        {resultsData.map((res, i) => {
          const c = resultColors[i];
          return (
            <motion.div
              key={i}
              className="result-card"
              style={{ background: c.bg, borderColor: c.border }}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -4 }}
            >
              <span className="result-label">{res.label}</span>
              <span className="result-value" style={{ color: c.val }}>{res.value}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

const socialLinks = [
  { href: 'mailto:royrishika2508@gmail.com', icon: <Mail />, label: 'Email', color: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.3)' },
  { href: 'https://www.linkedin.com/in/rishika-roy-2a2923399', icon: <FaLinkedin />, label: 'LinkedIn', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.3)' },
  { href: 'https://x.com/rishika_ro938-8', icon: <FaTwitter />, label: 'Twitter (X)', color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.3)' },
  { href: 'https://github.com/royrishika12', icon: <FaGithub />, label: 'GitHub', color: '#86efac', bg: 'rgba(134,239,172,0.1)', border: 'rgba(134,239,172,0.3)' },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Connect with me
      </motion.h2>
      <div className="contact-grid">
        {socialLinks.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target={s.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className="social-card"
            style={{ background: s.bg, borderColor: s.border }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, boxShadow: `0 16px 40px ${s.border}` }}
          >
            <span className="social-icon" style={{ color: s.color }}>{s.icon}</span>
            <span className="social-label">{s.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
