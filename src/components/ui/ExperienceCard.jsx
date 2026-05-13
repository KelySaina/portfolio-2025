import { motion } from "framer-motion";

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  tech,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-[1.05rem] top-1 w-3.5 h-3.5 rounded-full bg-secondary border-[3px] border-primary z-10" />

      {/* Card */}
      <div className="glow-card bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
          <h3 className="text-lg font-bold text-textPrimary">{title}</h3>
          <span className="text-secondary text-sm font-mono whitespace-nowrap">
            {period}
          </span>
        </div>
        <h4 className="text-secondary/80 font-medium mb-4">{company}</h4>
        <ul className="space-y-2 mb-5">
          {description.map((item, i) => (
            <li key={i} className="text-textSecondary text-sm flex items-start">
              <span className="text-secondary mr-2 mt-0.5 shrink-0">▹</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs text-secondary bg-secondary/10 px-2.5 py-1 rounded-full font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
