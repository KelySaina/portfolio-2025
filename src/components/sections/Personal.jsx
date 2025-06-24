import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PersonalCard from "../ui/PersonalCard";

const personalProjects = [
  {
    title: "My Portfolio",
    description:
      "Fully responsive portfolio website built with React and Tailwind, showcasing my work and skills.",
    image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourname.dev",
    },
  },
  {
    title: "Task Manager App",
    description:
      "A task manager built with MERN stack. Features include user auth, task categorization, and dark mode.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    links: {
      github: "https://github.com/yourusername/task-manager",
      live: "#",
    },
  },
  {
    title: "Weather CLI",
    description:
      "A simple CLI app that fetches and displays weather data using OpenWeatherMap API.",
    image: "https://images.unsplash.com/photo-1604014237744-198b7f33b4df",
    tech: ["Node.js", "Axios"],
    links: {
      github: "https://github.com/yourusername/weather-cli",
      live: "#",
    },
  },
];

export default function Personal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="personal-projects" className="py-24 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-textPrimary">
            Personal Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <PersonalCard key={index} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
