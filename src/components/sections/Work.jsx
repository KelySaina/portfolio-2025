import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ExperienceCard from "../ui/ExperienceCard";

export default function Work() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "MANAO Group - SIDINA",
      period: "December 2024 - Present",
      description: [
        "Architected an interconnected Docker platform ecosystem with shared networking across 5+ microservices (auth, licences, accounting, client portal)",
        "Built 'ocompose' — a reproducible Docker mini-OS platform with CLI + Web UI for multi-instance dev environments supporting PHP, Node.js, Python runtimes",
        "Developed 'DB Docker Server' — a multi-engine database manager (MariaDB, MySQL, PostgreSQL) with React Web UI, SSE real-time logs, and MinIO backup sync",
        "Created comprehensive Cypress E2E test suites for Paie (payroll) and Compta (accounting) with auto-generated test data via Faker.js and Excel fixtures",
        "Built a QA Context toolkit for AI-assisted test compliance auditing and CSV-to-SQL import pipeline covering 20+ test codification files",
        "Developed a SonarQube Runner web UI for triggering code analysis scans with real-time streamed output",
        "Containerized legacy PHP 5.6/7.4 CodeIgniter apps with multi-network Docker Compose configurations and GHCR CI/CD publishing",
        "Built a Konnect IDP/SSO service implementing OAuth 2.0, OpenID Connect, and TOTP-based MFA with admin dashboard",
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
        "OAuth 2.0",
        "Webhooks",
      ],
    },
    {
      title: "FullStack JavaScript Developer",
      company: "MAR IT Consulting",
      period: "August 2024 - November 2024",
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
      period: "January 2024",
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
      period: "October 2023 - December 2023",
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
      period: "October 2022 - December 2022",
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
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-12">
            <span className="section-number">02</span>
            <h2 className="text-3xl font-bold text-textPrimary relative z-10">
              Where I've Worked
            </h2>
            <div className="w-20 h-1 bg-secondary/50 rounded mt-3" />
          </div>
          <div className="timeline-line">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
