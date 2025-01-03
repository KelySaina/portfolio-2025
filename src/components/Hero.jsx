import { motion } from "framer-motion";

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary mb-4 text-xl">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-textPrimary mb-4">
            Thierry.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-textSecondary mb-6">
            I build things for the web.
          </h2>
          <p className="text-textSecondary max-w-lg mb-8">
            I'm a software developer specializing in building exceptional and
            user centered digital experiences.
          </p>
          <motion.button
            onClick={scrollToWork}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary/10"
          >
            Check out my work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
