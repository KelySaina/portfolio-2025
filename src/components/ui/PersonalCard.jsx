import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function PersonalCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-w-[320px] max-w-[320px] bg-secondary/10 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-secondary">
          {project.title}
        </h3>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-textPrimary hover:text-white"
        >
          <Github size={24} />
        </a>
      </div>

      {project.image && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-xl mt-4 transform hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay container */}
          <div className="absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-2">
            {/* Icon */}
            <div className="bg-black/60 p-2 rounded-full">
              <ExternalLink size={24} className="text-white" />
            </div>

            {/* Truncated link */}
            <p className="text-xs text-white bg-black/70 px-2 py-1 rounded max-w-[200px] truncate text-center">
              {project.links.live}
            </p>
          </div>
        </a>
      )}

      <p className="text-sm mt-2 text-gray-400">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs text-textPrimary border border-textPrimary px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
