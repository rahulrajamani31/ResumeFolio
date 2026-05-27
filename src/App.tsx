import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import DevOpsVisualization from './components/DevOpsVisualization';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-surface">
      <Navbar />
      <HeroSection />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <DevOpsVisualization />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
