import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function PersonalCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-w-[320px] max-w-[320px] bg-[#161b22] rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm mt-2 text-gray-400">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-[#30363d] text-gray-300 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex mt-4 gap-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Github size={18} />
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
