import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import ForceGraph2D from "react-force-graph-2d";

const allProjects = [
  {
    id: "captive-portal",
    title: "Captive Portal Solution",
    description:
      "Implemented a comprehensive captive portal solution with Mikrotik and PfSense, including a dedicated management application for guest network access control.",
    tech: ["Mikrotik", "PfSense", "Networking", "Security"],
    group: "networking",
  },
  {
    id: "voip",
    title: "VoIP Communication System",
    description:
      "Developed VoIP communication system using Asterisk, enabling efficient voice communication infrastructure with SIP trunking and call routing.",
    tech: ["Asterisk", "VoIP", "SIP", "Network Infrastructure"],
    group: "networking",
  },
  {
    id: "load-balancer",
    title: "Load Balancer & Failover",
    description:
      "Implemented high-availability solution using HA-Proxy for intelligent load balancing, health checks, and automatic failover capabilities.",
    tech: ["HA-Proxy", "Load Balancing", "High Availability"],
    group: "networking",
  },
  {
    id: "microservices",
    title: "Microservices Platform (Master's Thesis)",
    description:
      "Master's thesis project (19.75/20, Très Honorable avec Félicitations du Jury) — Full-stack polyglot microservices architecture with 3 GraphQL services (Node.js + Python), React frontend, Kubernetes on Vagrant cluster with HPAs, and Cypress E2E tests.",
    tech: ["Node.js", "Python", "GraphQL", "React", "Kubernetes", "Vagrant", "Docker", "Cypress"],
    group: "infrastructure",
  },
  {
    id: "swarm",
    title: "Docker Swarm Cluster",
    description:
      "Set up a Docker Swarm cluster for container orchestration, enabling efficient deployment and management of containerized applications with Vagrant.",
    tech: ["Docker", "Swarm", "Vagrant", "Virtualbox"],
    group: "infrastructure",
    github: "https://github.com/KelySaina/vagrant-swarm-cluster",
  },
  {
    id: "k8s",
    title: "Kubernetes Cluster",
    description:
      "Set up a Kubernetes cluster for container orchestration, enabling efficient deployment and management of containerized applications with Vagrant.",
    tech: ["Minikube", "Vagrant", "Virtualbox"],
    group: "infrastructure",
    github: "https://github.com/KelySaina/vagrant-k8s-cluster",
  },
];

const groupColors = {
  networking: "#5eaeff",
  infrastructure: "#a78bfa",
};

const groupLabels = {
  networking: "Networking",
  infrastructure: "Infrastructure",
};

function buildGraphData(projects) {
  const nodes = projects.map((p) => ({
    id: p.id,
    name: p.title.length > 20 ? p.title.split(/[\s—(]/)[0].trim() : p.title,
    fullName: p.title,
    group: p.group,
    color: groupColors[p.group],
  }));

  const links = [];
  // Connect nodes within same group
  const groups = {};
  projects.forEach((p) => {
    if (!groups[p.group]) groups[p.group] = [];
    groups[p.group].push(p.id);
  });
  Object.values(groups).forEach((ids) => {
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        links.push({ source: ids[i], target: ids[j] });
      }
    }
  });
  // Cross-group connections (connect one node from each group to bridge them)
  const groupKeys = Object.keys(groups);
  if (groupKeys.length > 1) {
    links.push({ source: groups[groupKeys[0]][0], target: groups[groupKeys[1]][0] });
    if (groups[groupKeys[0]].length > 1 && groups[groupKeys[1]].length > 1) {
      links.push({ source: groups[groupKeys[0]][1], target: groups[groupKeys[1]][1] });
    }
  }

  return { nodes, links };
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selected, setSelected] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 450 });
  const containerRef = useRef(null);
  const graphRef = useRef(null);

  const graphData = useMemo(() => buildGraphData(allProjects), []);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setDimensions({ width, height: Math.max(400, Math.min(500, width * 0.55)) });
    });
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // Zoom to fit after first render
  useEffect(() => {
    if (graphRef.current) {
      setTimeout(() => {
        graphRef.current.zoomToFit(400, 60);
      }, 500);
    }
  }, [dimensions]);

  const handleNodeClick = useCallback((node) => {
    setSelected((prev) => (prev?.id === node.id ? null : allProjects.find((p) => p.id === node.id)));
  }, []);

  const paintNode = useCallback((node, ctx, globalScale) => {
    if (!Number.isFinite(node.x) || !Number.isFinite(node.y)) return;

    const label = node.name;
    const fontSize = Math.max(12 / globalScale, 3.5);
    const nodeR = Math.max(22 / globalScale, 8);
    const isActive = selected?.id === node.id;

    // Outer glow rings
    const glowLayers = isActive ? 3 : 1;
    for (let i = glowLayers; i > 0; i--) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeR * (1 + i * 0.35), 0, 2 * Math.PI);
      ctx.fillStyle = `${node.color}${isActive ? '0a' : '05'}`;
      ctx.fill();
    }

    // Orbit ring
    ctx.beginPath();
    ctx.arc(node.x, node.y, nodeR * 1.3, 0, 2 * Math.PI);
    ctx.strokeStyle = `${node.color}${isActive ? '30' : '12'}`;
    ctx.lineWidth = 1 / globalScale;
    ctx.setLineDash([2 / globalScale, 2 / globalScale]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Node circle with gradient fill
    const grad = ctx.createRadialGradient(
      node.x - nodeR * 0.3, node.y - nodeR * 0.3, nodeR * 0.1,
      node.x, node.y, nodeR
    );
    grad.addColorStop(0, `${node.color}${isActive ? '50' : '25'}`);
    grad.addColorStop(1, `${node.color}${isActive ? '18' : '08'}`);
    ctx.beginPath();
    ctx.arc(node.x, node.y, nodeR, 0, 2 * Math.PI);
    ctx.fillStyle = grad;
    ctx.fill();

    // Border
    ctx.beginPath();
    ctx.arc(node.x, node.y, nodeR, 0, 2 * Math.PI);
    ctx.strokeStyle = isActive ? node.color : `${node.color}50`;
    ctx.lineWidth = (isActive ? 2 : 1.2) / globalScale;
    ctx.stroke();

    // Inner highlight dot
    ctx.beginPath();
    ctx.arc(node.x - nodeR * 0.25, node.y - nodeR * 0.25, nodeR * 0.15, 0, 2 * Math.PI);
    ctx.fillStyle = `${node.color}${isActive ? '40' : '20'}`;
    ctx.fill();

    // Label below node
    ctx.font = `${isActive ? "600 " : "400 "}${fontSize}px 'SF Mono', 'Fira Code', monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = isActive ? node.color : "#8892b0";
    ctx.fillText(label, node.x, node.y + nodeR + 6 / globalScale);
  }, [selected]);

  const paintLink = useCallback((link, ctx) => {
    if (!Number.isFinite(link.source.x) || !Number.isFinite(link.target.x)) return;

    // Gradient along the link
    const grad = ctx.createLinearGradient(
      link.source.x, link.source.y, link.target.x, link.target.y
    );
    grad.addColorStop(0, `${link.source.color || 'rgba(94, 174, 255)'}20`);
    grad.addColorStop(0.5, 'rgba(94, 174, 255, 0.12)');
    grad.addColorStop(1, `${link.target.color || 'rgba(167, 139, 250)'}20`);

    ctx.strokeStyle = grad;
    ctx.lineWidth = 0.8;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(link.source.x, link.source.y);
    ctx.lineTo(link.target.x, link.target.y);
    ctx.stroke();
    ctx.setLineDash([]);
  }, []);

  const selectedProject = selected ? allProjects.find((p) => p.id === selected.id) : null;

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
            <span className="section-number">05</span>
            <h2 className="text-3xl font-bold text-textPrimary relative z-10">
              Networking & Infrastructure Projects
            </h2>
            <div className="w-20 h-1 bg-secondary/50 rounded mt-3" />
          </div>

          {/* Legend */}
          <div className="flex gap-6 mb-4">
            {Object.entries(groupLabels).map(([key, label]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: groupColors[key] }}
                />
                <span className="text-textSecondary text-xs font-mono">{label}</span>
              </div>
            ))}
          </div>

          {/* Graph */}
          <div
            ref={containerRef}
            className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
          >
            <ForceGraph2D
              ref={graphRef}
              graphData={graphData}
              width={dimensions.width}
              height={dimensions.height}
              backgroundColor="transparent"
              nodeCanvasObject={paintNode}
              nodePointerAreaPaint={(node, color, ctx, globalScale) => {
                const r = Math.max(22 / globalScale, 8);
                ctx.beginPath();
                ctx.arc(node.x, node.y, r + 6 / globalScale, 0, 2 * Math.PI);
                ctx.fillStyle = color;
                ctx.fill();
              }}
              linkCanvasObject={paintLink}
              onNodeClick={handleNodeClick}
              cooldownTicks={80}
              d3AlphaDecay={0.04}
              d3VelocityDecay={0.3}
              enableZoomInteraction={false}
              enablePanInteraction={false}
              enableNodeDrag={false}
            />
          </div>

          {/* Detail card */}
          {selectedProject ? (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 glow-card bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/5"
            >
              <h3 className="text-lg font-bold text-textPrimary mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-textSecondary text-sm mb-4 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-secondary/80 hover:text-secondary font-mono transition-colors"
                >
                  View on GitHub →
                </a>
              )}
            </motion.div>
          ) : (
            <p className="text-center text-textSecondary/40 text-sm font-mono mt-4">
              Click a node to view project details
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
