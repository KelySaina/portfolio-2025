import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Phone, Download } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-8">
            <span className="section-number text-center w-full block">06</span>
            <p className="text-secondary font-mono text-sm mb-3 relative z-10">
              What's next?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary relative z-10">
              Get In Touch
            </h2>
          </div>

          <p className="text-textSecondary mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            I'm always looking for new opportunities in software development and
            DevOps. Whether you have a question or just want to say hi, feel
            free to reach out!
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <motion.a
              href="mailto:thierrymichael2001@gmail.com"
              className="group flex items-center justify-center gap-2 border-2 border-secondary text-secondary px-8 py-4 rounded-xl text-lg font-mono
                     hover:bg-secondary hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={20} />
              Say Hello
            </motion.a>
            <motion.a
              href="/CV_RAVELOMAHARAVO_2024_DEV.pdf"
              className="flex items-center justify-center gap-2 bg-secondary text-primary px-8 py-4 rounded-xl text-lg font-mono font-bold
                     hover:bg-secondary/90 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="glow-card flex items-center gap-3 bg-white/[0.03] backdrop-blur-sm rounded-xl px-5 py-4 border border-white/5">
              <MapPin size={18} className="text-secondary shrink-0" />
              <span className="text-textSecondary text-sm">
                Antsirabe, Madagascar
              </span>
            </div>
            <div className="glow-card flex items-center gap-3 bg-white/[0.03] backdrop-blur-sm rounded-xl px-5 py-4 border border-white/5">
              <Phone size={18} className="text-secondary shrink-0" />
              <span className="text-textSecondary text-sm">
                +261 34 88 359 57
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-white/5">
            <p className="text-textSecondary/50 text-xs font-mono">
              Designed & Built by Thierry Michaël
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
