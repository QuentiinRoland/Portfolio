import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
