import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-20 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-4">Get In Touch</h2>
          <p className="text-textSecondary mb-8 max-w-lg mx-auto">
            I'm currently looking for new opportunities in software development and DevOps. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <motion.a
            href="mailto:thierrymichael2001@gmail.com"
            className="inline-block border-2 border-secondary text-secondary px-8 py-4 rounded-lg text-lg font-semibold
                     hover:bg-secondary hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </motion.a>
          <div className="mt-12">
            <p className="text-textSecondary mb-4">
              <span className="text-secondary">Location:</span> Ivory, Antsirabe, Madagascar
            </p>
            <p className="text-textSecondary">
              <span className="text-secondary">Phone:</span> +261 34 88 359 57
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}