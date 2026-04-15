import { useState, useEffect } from 'react';
import './Sidebar.scss';

const navItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'results', label: 'Results' },
  { id: 'contact', label: 'Contact' },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState('dashboard');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;

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
        top: element.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <h2 className="logo">Rishika</h2>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeId === item.id ? 'active' : ''}`}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>© 2026 Rishika Roy</p>
      </div>
    </aside>
  );
}
