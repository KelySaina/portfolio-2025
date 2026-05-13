import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../ui/ProjectCard";
import { Wifi, Phone, Scale, Network } from "lucide-react";

function NetworkNode({ icon: Icon, label, x, y, delay }) {
  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, type: "spring" }}
    >
      <div className="w-10 h-10 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center shadow-[0_0_12px_rgba(100,255,218,0.15)]">
        <Icon size={18} className="text-secondary" />
      </div>
      <span className="text-[10px] text-textSecondary mt-1 font-mono whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

function NetworkProjectCard({ project, index, inView }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="glow-card bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden"
    >
      {/* Network topology header */}
      <div className="relative h-36 bg-gradient-to-br from-secondary/[0.03] to-transparent border-b border-white/5 overflow-hidden">
        {/* Connection lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 140"
          fill="none"
        >
          {project.nodes.map((node, i) =>
            node.connections?.map((target) => {
              const targetNode = project.nodes[target];
              return (
                <motion.line
                  key={`${i}-${target}`}
                  x1={node.x}
                  y1={node.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke="rgba(100,255,218,0.15)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                />
              );
            })
          )}
        </svg>
        {/* Nodes */}
        {project.nodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              left: `${(node.x / 300) * 100}%`,
              top: `${(node.y / 140) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                node.primary
                  ? "bg-secondary/20 border-secondary/50 shadow-[0_0_12px_rgba(100,255,218,0.2)]"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <node.icon
                size={14}
                className={node.primary ? "text-secondary" : "text-textSecondary"}
              />
            </div>
            <span className="text-[9px] text-textSecondary/70 mt-0.5 font-mono">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Icon size={18} className="text-secondary" />
          <h3 className="text-lg font-bold text-textPrimary">
            {project.title}
          </h3>
        </div>
        <p className="text-textSecondary text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="text-xs text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const networkProjects = [
    {
      title: "Captive Portal Solution",
      description:
        "Implemented a comprehensive captive portal solution with Mikrotik and PfSense, including a dedicated management application for guest network access control.",
      tech: ["Mikrotik", "PfSense", "Networking", "Security"],
      icon: Wifi,
      nodes: [
        { x: 150, y: 30, icon: Network, label: "Gateway", primary: true, connections: [1, 2, 3] },
        { x: 60, y: 80, icon: Wifi, label: "AP", primary: false, connections: [3] },
        { x: 240, y: 80, icon: Scale, label: "PfSense", primary: false, connections: [] },
        { x: 150, y: 115, icon: Phone, label: "Client", primary: false, connections: [] },
      ],
    },
    {
      title: "VoIP Communication System",
      description:
        "Developed VoIP communication system using Asterisk, enabling efficient voice communication infrastructure with SIP trunking and call routing.",
      tech: ["Asterisk", "VoIP", "SIP", "Network Infrastructure"],
      icon: Phone,
      nodes: [
        { x: 150, y: 30, icon: Network, label: "PBX", primary: true, connections: [1, 2, 3, 4] },
        { x: 50, y: 75, icon: Phone, label: "SIP-1", primary: false, connections: [] },
        { x: 120, y: 110, icon: Phone, label: "SIP-2", primary: false, connections: [] },
        { x: 190, y: 110, icon: Phone, label: "SIP-3", primary: false, connections: [] },
        { x: 250, y: 75, icon: Wifi, label: "Trunk", primary: false, connections: [] },
      ],
    },
    {
      title: "Load Balancer & Failover",
      description:
        "Implemented high-availability solution using HA-Proxy for intelligent load balancing, health checks, and automatic failover capabilities.",
      tech: ["HA-Proxy", "Load Balancing", "High Availability"],
      icon: Scale,
      nodes: [
        { x: 150, y: 25, icon: Network, label: "Client", primary: false, connections: [1] },
        { x: 150, y: 65, icon: Scale, label: "HAProxy", primary: true, connections: [2, 3, 4] },
        { x: 60, y: 115, icon: Network, label: "Srv-1", primary: false, connections: [] },
        { x: 150, y: 115, icon: Network, label: "Srv-2", primary: false, connections: [] },
        { x: 240, y: 115, icon: Network, label: "Srv-3", primary: false, connections: [] },
      ],
    },
  ];

  const otherProjects = [
    {
      title: "Microservices Platform (Master's Thesis)",
      description:
        "Master's thesis project (19.75/20, Très Honorable avec Félicitations du Jury) — Full-stack polyglot microservices architecture with 3 GraphQL services (Node.js + Python), React frontend, Kubernetes on Vagrant cluster with HPAs, and Cypress E2E tests",
      image: null,
      tech: ["Node.js", "Python", "GraphQL", "React", "Kubernetes", "Vagrant", "Docker", "Cypress"],
      links: {
        github: "#",
        live: "#",
      },
    },
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
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-12">
            <span className="section-number">04</span>
            <h2 className="text-3xl font-bold text-textPrimary relative z-10">
              Networking & Infrastructure Projects
            </h2>
            <div className="w-20 h-1 bg-secondary/50 rounded mt-3" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkProjects.map((project, index) => (
              <NetworkProjectCard
                key={index}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
