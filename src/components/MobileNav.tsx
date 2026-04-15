import { useState, useEffect } from 'react';
import { Home, User, Code, Target, Trophy, GraduationCap, Award, Mail } from 'lucide-react';
import './MobileNav.scss';

const navItems = [
  { id: 'dashboard', icon: <Home size={20} /> },
  { id: 'about', icon: <User size={20} /> },
  { id: 'skills', icon: <Code size={20} /> },
  { id: 'projects', icon: <Target size={20} /> },
  { id: 'achievements', icon: <Trophy size={20} /> },
  { id: 'education', icon: <GraduationCap size={20} /> },
  { id: 'results', icon: <Award size={20} /> },
  { id: 'contact', icon: <Mail size={20} /> },
];

export default function MobileNav() {
  const [activeId, setActiveId] = useState('dashboard');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveId(section.getAttribute('id') || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-container">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-nav-link ${activeId === item.id ? 'active' : ''}`}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
