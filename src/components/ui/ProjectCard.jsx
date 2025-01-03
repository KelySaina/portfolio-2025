import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, image, tech, links, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-primary/30 rounded-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/30 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-textPrimary mb-2">{title}</h3>
        <p className="text-textSecondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span key={item} className="text-sm text-secondary bg-secondary/10 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
        {/* <div className="flex space-x-4">
          <a href={links.github} className="text-secondary hover:text-secondary/80">GitHub</a>
          <a href={links.live} className="text-secondary hover:text-secondary/80">Live Demo</a>
        </div> */}
      </div>
    </motion.div>
  );
}