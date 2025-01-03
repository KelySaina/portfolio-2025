import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/sections/Work';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  return (
    <AnimatePresence>
      <div className="bg-primary min-h-screen text-textPrimary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;