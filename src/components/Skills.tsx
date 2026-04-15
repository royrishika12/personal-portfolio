import { motion } from 'framer-motion';
import './Skills.scss';

const skillGroups = [

  {
    label : 'Programming Languages',
    color : 'orange',
    skills : ['Python', 'C++', 'C', 'Java','JavaScript','Typescript']
  },
  {
    label: 'Frontend',
    color: 'blue',
    skills: ['Next.js', ' TailwindCSS', 'JavaScript', 'React']
  },
  
  {
    label: 'Backend',
    color: 'green',
    skills: ['Node.js', 'Firebase', 'Express.js']
  },
  {
    label: 'Database',
    color: 'purple',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    label: 'ML',
    color: 'orange',
    skills: ['NumPy', 'Pandas', 'scikit-learn', 'Matplotlib','Data-Preprocessing','Data-Visualization']
  },
  {
    label : 'Generative AI Tools',
    color : 'blue',
    skills : ['Langchain', 'LangGraph', 'Sentence transformers', 'Embeddings & VectorSearch']
  },
  {
    label: 'Styling',
    color: 'pink',
    skills: ['SCSS', 'Tailwind CSS', 'Bootstrap']
  },
  {
    label: 'Tools',
    color: 'teal',
    skills: ['Git', 'GitHub','Chrome DevTools']
  },
];

const colorMap: Record<string, string> = {
  blue:   'linear-gradient(135deg, #1e40af22, #3b82f622)',
  green:  'linear-gradient(135deg, #14532d22, #22c55e22)',
  purple: 'linear-gradient(135deg, #4c1d9522, #a855f722)',
  orange: 'linear-gradient(135deg, #78350f22, #f9731622)',
  pink:   'linear-gradient(135deg, #831843 22, #ec489922)',
  teal:   'linear-gradient(135deg, #134e4a22, #14b8a622)',
};

const borderMap: Record<string, string> = {
  blue:   'rgba(59,130,246,0.4)',
  green:  'rgba(34,197,94,0.4)',
  purple: 'rgba(168,85,247,0.4)',
  orange: 'rgba(249,115,22,0.4)',
  pink:   'rgba(236,72,153,0.4)',
  teal:   'rgba(20,184,166,0.4)',
};

const textMap: Record<string, string> = {
  blue:   '#93c5fd',
  green:  '#86efac',
  purple: '#d8b4fe',
  orange: '#fdba74',
  pink:   '#f9a8d4',
  teal:   '#5eead4',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-groups">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={gi}
            className="skill-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
          >
            <h3
              className="group-label"
              style={{ color: textMap[group.color] }}
            >
              {group.label}
            </h3>
            <motion.div
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {group.skills.map((skill, si) => (
                <motion.div
                  key={si}
                  className="skill-chip"
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -4 }}
                  style={{
                    background: colorMap[group.color],
                    borderColor: borderMap[group.color],
                    color: textMap[group.color],
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
