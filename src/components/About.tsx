import { motion } from 'framer-motion';
import './About.scss';

export default function About() {
  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-card glass-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-accent" />
        <p>
          I am a developer skilled in <strong>C, C++, Java, Python</strong>, and modern web technologies like
          <strong> React (JSX/TSX), TypeScript</strong>, and JavaScript. I build responsive and scalable
          applications using SCSS, Bootstrap, and Tailwind CSS, with backend integration through MongoDB.
        </p>
        <p style={{ marginBottom: 0 }}>
          With hands-on experience in <strong>Machine Learning</strong> using NumPy and Pandas, I enjoy
          solving real-world problems through data and code. I actively build projects and participate in
          hackathons, focusing on innovation, performance, and user-centric design.
        </p>
      </motion.div>
    </section>
  );
}
