import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";

const techStack = [
  {
    name: "React",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    desc: "JavaScript library for building interactive user interfaces with component-based architecture.",
  },
  {
    name: "Vue",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    desc: "Progressive JavaScript framework for building web apps with reactive data binding.",
  },
  {
    name: "Next.js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    desc: "React framework for server-side rendering, static sites, and full-stack applications.",
  },
  {
    name: "Node.js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    desc: "JavaScript runtime for building fast, scalable server-side applications.",
  },
  {
    name: "NestJS",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
    desc: "Progressive Node.js framework for building efficient, reliable server-side applications.",
  },
  {
    name: "Java",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    desc: "Object-oriented language for enterprise applications, Android, and cross-platform development.",
  },
  {
    name: "PHP",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    desc: "Server-side scripting language widely used for web development and CMS platforms.",
  },
  {
    name: "Python",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    desc: "Versatile language for web backends, automation, data science, and scripting.",
  },
  {
    name: "TypeScript",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    desc: "Typed superset of JavaScript that compiles to plain JS for safer, scalable code.",
  },
  {
    name: "Docker",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    desc: "Platform for containerizing applications ensuring consistent environments across deployments.",
  },
  {
    name: "Nginx",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
    desc: "High-performance web server and reverse proxy for load balancing and serving static content.",
  },
  {
    name: "MariaDB",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mariadb/mariadb-original.svg",
    desc: "Community-developed fork of MySQL, a fast and reliable relational database.",
  },
  {
    name: "PostgreSQL",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    desc: "Advanced open-source relational database with extensibility and SQL compliance.",
  },
  {
    name: "GraphQL",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
    desc: "Query language for APIs that lets clients request exactly the data they need.",
  },
  {
    name: "Prisma",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
    desc: "Next-generation ORM for Node.js and TypeScript with type-safe database queries.",
  },
  {
    name: "Cypress",
    img: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cypress.svg",
    desc: "End-to-end testing framework for web applications with real browser automation.",
  },
  {
    name: "Bash",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg",
    desc: "Unix shell and scripting language for automating system tasks and DevOps workflows.",
  },
  {
    name: "Tailwind CSS",
    img: "https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png",
    desc: "Utility-first CSS framework for building custom designs rapidly without leaving HTML.",
  },
  {
    name: "Jenkins",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
    desc: "Open-source automation server for building CI/CD pipelines and DevOps workflows.",
  },
  {
    name: "Ansible",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg",
    desc: "Agentless automation tool for configuration management and infrastructure as code.",
  },
  {
    name: "GCP",
    img: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    desc: "Google's cloud platform for computing, storage, AI, and managed infrastructure services.",
  },
  {
    name: "AWS",
    img: "https://img.icons8.com/?size=48&id=33039&format=png",
    desc: "Amazon's cloud computing platform with 200+ services for infrastructure and deployment.",
  },
  {
    name: "Kubernetes",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
    desc: "Container orchestration platform for automating deployment, scaling, and management.",
  },
  {
    name: "GitLab",
    img: "https://img.icons8.com/?size=48&id=34886&format=png",
    desc: "DevOps platform with Git repos, CI/CD pipelines, and project management tools.",
  },
];

function TechWheel({ items, inView }) {
  const [hovered, setHovered] = useState(null);
  const [size, setSize] = useState({ radius: 260, iconSize: 56 });
  const containerRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setSize({ radius: 120, iconSize: 32 });
      } else if (w < 640) {
        setSize({ radius: 150, iconSize: 36 });
      } else if (w < 768) {
        setSize({ radius: 180, iconSize: 40 });
      } else {
        setSize({ radius: 260, iconSize: 56 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { radius, iconSize } = size;

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="relative"
        style={{ width: radius * 2 + iconSize, height: radius * 2 + iconSize }}
      >
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center px-4 max-w-[180px] md:max-w-[240px] md:px-6"
            key={hovered?.name || "default"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {hovered ? (
              <>
                <p className="text-secondary font-bold text-sm md:text-lg font-mono mb-1">
                  {hovered.name}
                </p>
                <p className="text-textSecondary text-xs md:text-sm leading-relaxed">
                  {hovered.desc}
                </p>
              </>
            ) : (
              <p className="text-textSecondary/50 text-sm font-mono">
                Hover a technology
              </p>
            )}
          </motion.div>
        </div>

        {/* Orbit ring */}
        <div
          className="absolute inset-0 rounded-full border border-white/5"
          style={{
            margin: iconSize / 2,
          }}
        />

        {/* Icons positioned in a circle */}
        {items.map((tech, i) => {
          const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isActive = hovered?.name === tech.name;

          return (
            <motion.div
              key={tech.name}
              className="absolute cursor-pointer"
              style={{
                left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                top: `calc(50% + ${y}px - ${iconSize / 2}px)`,
                width: iconSize,
                height: iconSize,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                inView
                  ? { opacity: 1, scale: isActive ? 1.3 : 1 }
                  : {}
              }
              transition={{
                delay: i * 0.04,
                duration: 0.3,
                scale: { duration: 0.2 },
              }}
              onMouseEnter={() => setHovered(tech)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={tech.img}
                alt={tech.name}
                className={`w-full h-full transition-all duration-200 ${
                  isActive
                    ? "drop-shadow-[0_0_8px_rgba(94,174,255,0.5)]"
                    : hovered && !isActive
                    ? "opacity-40"
                    : "opacity-80 hover:opacity-100"
                }`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-12">
            <span className="section-number">02</span>
            <h2 className="text-3xl font-bold text-textPrimary relative z-10">
              Technologies I Work With
            </h2>
            <div className="w-20 h-1 bg-secondary/50 rounded mt-3" />
          </div>

          <div className="flex justify-center">
            <TechWheel items={techStack} inView={inView} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
