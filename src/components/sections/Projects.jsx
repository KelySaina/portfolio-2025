import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Captive Portal Solution",
      description: "Implemented a comprehensive captive portal solution with Mikrotik and PfSense, including a dedicated management application",
      image: "https://plus.unsplash.com/premium_photo-1700830452756-1a3f4314e564?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Mikrotik", "PfSense", "Networking", "Security"],
      links: { github: "#", live: "#" }
    },
    {
      title: "VoIP System",
      description: "Developed VoIP communication system using Asterisk, enabling efficient voice communication infrastructure",
      image: "https://media.istockphoto.com/id/1521108425/fr/photo/voip-concept-de-t%C3%A9l%C3%A9communication-voix-sur-ip-main-dhomme-daffaires-utilisant-un-smartphone.webp?a=1&b=1&s=612x612&w=0&k=20&c=3h0cF_cYiM5pvEL4Jt8VyB7qyf93AXW08EQ9yjjvztg=",
      tech: ["Asterisk", "VoIP", "Network Infrastructure"],
      links: { github: "#", live: "#" }
    },
    {
      title: "Load Balancer & Failover",
      description: "Implemented high-availability solution using HA-Proxy for load balancing and failover capabilities",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      tech: ["HA-Proxy", "Load Balancing", "High Availability"],
      links: { github: "#", live: "#" }
    }
  ];

  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}