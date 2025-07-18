import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../ui/ProjectCard";
import PersonalCard from "../ui/PersonalCard";

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Captive Portal Solution",
      description:
        "Implemented a comprehensive captive portal solution with Mikrotik and PfSense, including a dedicated management application",
      image:
        "https://plus.unsplash.com/premium_photo-1700830452756-1a3f4314e564?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Mikrotik", "PfSense", "Networking", "Security"],
      links: { github: "#", live: "#" },
    },
    {
      title: "VoIP System",
      description:
        "Developed VoIP communication system using Asterisk, enabling efficient voice communication infrastructure",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dSAKqRMZGF_dRBo8JLGnIwHaET%26cb%3Diwc2%26pid%3DApi&f=1&ipt=0d556763d09d7245a947ed5713e3eb01c0860da68ae98c71feb7bbc290318d0a&ipo=images",
      tech: ["Asterisk", "VoIP", "Network Infrastructure"],
      links: { github: "#", live: "#" },
    },
    {
      title: "Load Balancer & Failover",
      description:
        "Implemented high-availability solution using HA-Proxy for load balancing and failover capabilities",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1WpJ9i6QpaemdUy5I_xMOgHaDt%26pid%3DApi&f=1&ipt=a302ef2ebcdd55e6e95a6c279638add88324c0ed9c275d4469c27627a7c512f0&ipo=images",
      tech: ["HA-Proxy", "Load Balancing", "High Availability"],
      links: { github: "#", live: "#" },
    },
  ];

  const otherProjects = [
    {
      title: "Swarm Cluster",
      description:
        "Set up a Docker Swarm cluster for container orchestration, enabling efficient deployment and management of containerized applications with Vagrant",
      image: null,
      tech: ["Docker", "Swarm", "Vagrant", "Virtualbox"],
      links: {
        github: "https://github.com/KelySaina/vagrant-swarm-cluster",
        live: "#",
      },
    },
    {
      title: "Kubernetes Cluster",
      description:
        "Set up a Kubernetes cluster for container orchestration, enabling efficient deployment and management of containerized applications with Vagrant",
      image: null,
      tech: ["Minikube", "Vagrant", "Virtualbox"],
      links: {
        github: "https://github.com/KelySaina/vagrant-k8s-cluster",
        live: "#",
      },
    },
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
          <h2 className="text-3xl font-bold text-textPrimary mb-12">
            Networking Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
