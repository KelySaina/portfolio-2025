import { motion } from 'framer-motion';

export default function ExperienceCard({ title, company, period, description, tech, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-primary/30 p-6 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-all"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-xl font-bold text-textPrimary">{title}</h3>
        <span className="text-secondary">{period}</span>
      </div>
      <h4 className="text-lg text-secondary mb-4">{company}</h4>
      <ul className="space-y-2 mb-4">
        {description.map((item, i) => (
          <li key={i} className="text-textSecondary flex items-start">
            <span className="text-secondary mr-2">▹</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="text-sm text-secondary bg-secondary/10 px-3 py-1 rounded">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}