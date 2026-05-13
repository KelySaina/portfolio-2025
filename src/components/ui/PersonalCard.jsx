import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function PersonalCard({ project, index }) {
  const hasLive = project.links.live && project.links.live !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-w-[320px] max-w-[320px] glow-card bg-white/[0.03] backdrop-blur-sm rounded-xl p-5 border border-white/5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">
          {hasLive ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-colors"
            >
              {project.title} ↗
            </a>
          ) : (
            <span className="text-secondary">{project.title}</span>
          )}
        </h3>
        {project.links.github && project.links.github !== "#" && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textPrimary hover:text-white"
          >
            <Github size={24} />
          </a>
        )}
      </div>

      <p className="text-sm mt-2 text-gray-400">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
