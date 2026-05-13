import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "DevOps Engineer",
  "Cloud Architect",
  "Platform Engineer",
];

function TypeWriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(word.substring(0, text.length + 1));
          if (text.length + 1 === word.length) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          setText(word.substring(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,255,218,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-secondary mb-5 text-lg font-mono tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi, my name is
          </motion.p>
          <h1 className="text-6xl md:text-8xl font-bold text-textPrimary mb-3">
            Thierry Michaël.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-textSecondary mb-2 h-16 md:h-20 flex items-center">
            <TypeWriter words={roles} />
          </h2>
          <p className="text-textSecondary max-w-xl mb-10 text-lg leading-relaxed">
            I architect full-stack platforms, build DevOps tooling, and design
            cloud-native infrastructure. Master's in CS with highest distinction.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <motion.button
              onClick={scrollToWork}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex gap-2 items-center border border-secondary text-secondary px-7 py-3.5 rounded-lg hover:bg-secondary/10 font-mono text-sm transition-all duration-300"
            >
              Check out my work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </motion.button>
            <motion.a
              href="/CV_RAVELOMAHARAVO_2024_DEV.pdf"
              className="flex gap-2 items-center text-primary font-bold bg-secondary px-7 py-3.5 rounded-lg font-mono text-sm hover:bg-secondary/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-secondary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-secondary/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
