import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import Education from './components/Education';
import Certifications from './components/Certificate';

function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;