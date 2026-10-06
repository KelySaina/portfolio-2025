import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/sections/TechStack";
import Work from "./components/sections/Work";
import Projects from "./components/sections/Projects";
import Enterprise from "./components/sections/Enterprise";
import Personal from "./components/sections/Personal";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Monitor scroll position to toggle the button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200); // Show button after scrolling 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      <div className="bg-primary min-h-screen text-textPrimary relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Work />
          <Enterprise />
          <Projects />
          <Personal />
          <Certifications />
          <Contact />
        </main>

        {/* Scroll to Top Button */}
        {showScrollButton && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 w-12 h-12 p-3 bg-secondary/10 backdrop-blur-sm border border-secondary/30 text-secondary rounded-xl shadow-lg hover:bg-secondary/20 transition-colors z-40"
            aria-label="Scroll to Top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </motion.button>
        )}
      </div>
    </AnimatePresence>
  );
}

export default App;
