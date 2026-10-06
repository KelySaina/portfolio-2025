import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function TimelineCard({ title, company, period, description, tech, index, isLeft }) {
  const titleBlock = (
    <div className={isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}>
      <h3 className="text-lg md:text-xl font-bold text-textPrimary mb-1">{title}</h3>
      <p className="text-secondary/80 font-medium text-sm">{company}</p>
    </div>
  );

  const descBlock = (
    <div className={isLeft ? "md:pl-10" : "md:pr-10"}>
      <div className="glow-card bg-white/[0.03] backdrop-blur-sm p-4 md:p-5 rounded-xl border border-white/5">
        <ul className="space-y-2 mb-4">
          {description.map((item, i) => (
            <li key={i} className="text-textSecondary text-xs md:text-sm flex items-start">
              <span className="text-secondary mr-2 mt-0.5 shrink-0">▹</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((item) => (
            <span
              key={item}
              className="text-[10px] md:text-xs text-secondary bg-secondary/10 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full mb-10 md:mb-16 last:mb-0">
      {/* Date badge on the center line (desktop) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 hidden md:flex">
        <div className="bg-secondary/10 border border-secondary/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
          <span className="text-secondary text-xs font-mono whitespace-nowrap font-semibold">
            {period}
          </span>
        </div>
      </div>

      {/* Mobile: left-aligned single column */}
      <div className="md:hidden pl-6">
        <span className="text-secondary text-xs font-mono bg-secondary/10 border border-secondary/30 px-3 py-1 rounded-full">
          {period}
        </span>
        <div className="mt-3">
          <h3 className="text-lg font-bold text-textPrimary mb-1">{title}</h3>
          <p className="text-secondary/80 font-medium text-sm mb-3">{company}</p>
        </div>
        <div className="glow-card bg-white/[0.03] backdrop-blur-sm p-4 rounded-xl border border-white/5">
          <ul className="space-y-2 mb-4">
            {description.map((item, i) => (
              <li key={i} className="text-textSecondary text-xs flex items-start">
                <span className="text-secondary mr-2 mt-0.5 shrink-0">▹</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {tech.map((item) => (
              <span
                key={item}
                className="text-[10px] text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: two-column alternating */}
      <div className="hidden md:grid md:grid-cols-2 md:pt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
        >
          {isLeft ? titleBlock : descBlock}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.1 }}
        >
          {isLeft ? descBlock : titleBlock}
        </motion.div>
      </div>
    </div>
  );
}

export default function Work() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      title: "Chef de Projet — DevOps & QA",
      company: "MANAO Group - SIDINA",
      period: "Dec 2024 - Present",
      description: [
        "Leading and coordinating the DevOps and QA teams, overseeing project delivery, tooling strategy, and quality standards",
        "Architected an interconnected Docker platform ecosystem with shared networking across 5+ microservices (auth, licences, accounting, client portal)",
        "Built 'ocompose' — a reproducible Docker mini-OS platform with CLI + Web UI for multi-instance dev environments supporting PHP, Node.js, Python runtimes",
        "Developed 'DB Docker Server' — a multi-engine database manager (MariaDB, MySQL, PostgreSQL) with React Web UI, SSE real-time logs, and MinIO backup sync",
        "Created comprehensive Cypress E2E test suites for Paie (payroll) and Compta (accounting) with auto-generated test data via Faker.js and Excel fixtures",
        "Built a QA Context toolkit for AI-assisted test compliance auditing and CSV-to-SQL import pipeline covering 20+ test codification files",
        "Developed a SonarQube Runner web UI for triggering code analysis scans with real-time streamed output",
        "Containerized legacy PHP 5.6/7.4 CodeIgniter apps with multi-network Docker Compose configurations and GHCR CI/CD publishing",
        "Deployed self-hosted n8n automation platform to sync Supabase data to third-party apps and trigger GitLab CI/CD pipelines via webhook hooks",
        "Leveraging AWS services and GitLab CI/CD for cloud deployments and pipeline automation",
      ],
      tech: [
        "JavaScript",
        "Cypress",
        "Docker",
        "Docker Compose",
        "Bash",
        "Node.js",
        "React",
        "PHP",
        "CodeIgniter",
        "Lumen",
        "Nginx",
        "MariaDB",
        "PostgreSQL",
        "MinIO",
        "AWS",
        "Kubernetes",
        "GitLab CI",
        "Ansible",
        "SonarQube",
        "n8n",
        "Webhooks",
      ],
    },
    {
      title: "FullStack JavaScript Developer",
      company: "MAR IT Consulting",
      period: "Aug - Nov 2024",
      description: [
        "Built secure, scalable web and mobile friendly applications using Vue3, Nuxt.js, Node.js, and Supabase",
        "Developed and integrated dynamic role-based access control (RBAC) systems",
        "Utilized OCR technologies to extract structured data from invoices",
        "Designed and implemented interactive UI/UX components with Tailwind CSS and Quasar Framework",
        "Proposed and executed new ideas for improving system functionality",
      ],
      tech: [
        "Vue.js",
        "Nuxt.js",
        "Node.js",
        "Supabase",
        "Tailwind CSS",
        "Quasar",
      ],
    },
    {
      title: "Back-End Node.js Developer",
      company: "OnlyTravaux",
      period: "Jan 2024",
      description: [
        "Contributed to backend development using Node.js and GraphQL",
        "Implemented API endpoints to support front-end requirements",
        "Ensured smooth data flow and integration with external services",
      ],
      tech: ["Node.js", "GraphQL", "API Development"],
    },
    {
      title: "DevOps Intern",
      company: "OpenData Madagascar",
      period: "Oct - Dec 2023",
      description: [
        "Implemented CI/CD pipeline using Jenkins",
        "Automated deployment of Node.js API",
        "Streamlined development workflow and deployment processes",
      ],
      tech: ["Jenkins", "CI/CD", "Node.js", "DevOps"],
    },
    {
      title: "Network Administrator Intern",
      company: "ESD",
      period: "Oct - Dec 2022",
      description: [
        "Implemented captive portal solution",
        "Developed dedicated application for captive portal",
        "Managed network infrastructure and security",
      ],
      tech: ["Networking", "Security", "Application Development"],
    },
  ];

  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-12">
            <span className="section-number">03</span>
            <h2 className="text-3xl font-bold text-textPrimary relative z-10">
              Where I've Worked
            </h2>
            <div className="w-20 h-1 bg-secondary/50 rounded mt-3" />
          </div>
          <div className="timeline-line relative">
            {experiences.map((exp, index) => (
              <TimelineCard
                key={index}
                {...exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
