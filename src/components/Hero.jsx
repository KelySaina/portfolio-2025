import { motion } from "framer-motion";

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative"
    >
      <div className="max-w-4xl mx-auto px-4 relative z-10">
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
            user-centered digital experiences.
          </p>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center">
            <motion.button
              onClick={scrollToWork}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex gap-2 items-center justify-center border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary/10"
            >
              Check out my work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
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
              className="flex gap-2 items-center justify-center text-white font-bold border border-secondary bg-secondary/80 px-6 py-3 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                />
              </svg>
              Get my CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
