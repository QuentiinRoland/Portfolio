import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import { SkillsSection } from './components/SkillsSection';
import { ProjectSection } from './components/ProjectSection.js/ProjectSection';
import { ExperienceTabs } from './components/ExperienceTabs/ExperienceTabs';
import AboutSection from './AboutSection';
import Spacer from './components/Spacer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <Spacer size='md' />
      <ProjectSection />
      <Spacer size='md' />
      <ExperienceTabs />
      <Spacer size='md' />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
