import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Achievements, Education, Results, Contact } from './components/OtherSections';

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <MobileNav />
      <main className="content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Results />
        <Contact />
      </main>
    </div>
  );
}

export default App;
