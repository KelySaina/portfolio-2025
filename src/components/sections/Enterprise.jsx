import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Server,
  Shield,
  Lock,
  FileSearch,
  Network,
  Database,
  Terminal,
  TestTube2,
  Layers,
  ChevronDown,
  ChevronUp,
  Wrench,
  Workflow,
} from "lucide-react";

const securityWork = [
  {
    title: "Web Application Penetration Testing",
    description:
      "Authorized grey-box testing of PHP business applications and their APIs, run against isolated environments with test-only accounts and data. Deliverables: a replayable proof-of-concept harness, a severity-ranked report, and surgical fixes that do not break legacy behaviour.",
    tech: ["Burp Suite", "Semgrep", "OWASP Top 10", "PHP", "CodeIgniter", "Bash"],
    icon: Shield,
    highlights: [
      "Grey-box methodology: code review paired with live exploitation",
      "Every finding proven with a scripted, replayable proof of concept",
      "Test-only accounts and data \u2014 no real records touched",
      "Severity-ranked reporting with remediation per finding",
    ],
  },
  {
    title: "Access Control Review",
    description:
      "Code review of authorization paths across multi-tenant APIs, and root-cause analysis of access anomalies escalated from client support \u2014 fixing the authorization layer rather than the symptom in the UI.",
    tech: ["PHP", "Laravel", "CodeIgniter", "REST API Security"],
    icon: Lock,
    highlights: [
      "Object-level authorization auditing across tenant boundaries",
      "Traces support-reported anomalies to their root cause in code",
      "Token-derived object scoping over client-supplied identifiers",
      "Fixes applied at the API layer, not the presentation layer",
    ],
  },
  {
    title: "Design-Stage Security Review",
    description:
      "Adversarial review of technical solution documents before implementation, verifying each claim against the code on the deployment branches rather than the working branches \u2014 where stale branches had previously produced false conclusions.",
    tech: ["Redis", "SSE", "PHP", "Laravel", "Git"],
    icon: FileSearch,
    highlights: [
      "Each design claim checked against deployed code, not the document",
      "Audits run on deployment branches to avoid stale-branch findings",
      "Covers session handling and real-time revocation design",
      "Separates viability concerns from security findings",
    ],
  },
  {
    title: "Infrastructure Hardening",
    description:
      "Attack-surface reduction for self-hosted services: private mesh networking instead of public exposure, secrets management, and encrypted automated backups.",
    tech: ["Docker", "Tailscale", "GitLab CI", "systemd", "PostgreSQL"],
    icon: Network,
    highlights: [
      "Public exposure replaced with private mesh network access",
      "Secrets moved out of version control into gitignored environment files",
      "Encrypted daily database and credential backups on a systemd timer",
      "Treats an automation engine's UI as a privileged shell",
    ],
  },
];

const devopsTools = [
  {
    title: "Legacy Platform Containerization",
    description:
      "Containerized and deployed four interdependent legacy PHP business applications into a reproducible multi-network Docker environment \u2014 shared service discovery, per-application entry points and routing, independent configuration per codebase, and CI/CD image publishing. Third-party codebases: the infrastructure is mine, the applications are not.",
    tech: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "PHP 5.6-7.4",
      "CodeIgniter 3",
      "MariaDB",
      "GitLab CI",
      "GHCR",
    ],
    icon: Layers,
    highlights: [
      "Multi-network topology with shared service discovery across applications",
      "Dual entry points (UI + REST API) with independent routing per codebase",
      "EOL PHP 5.6 / Debian Stretch compatibility workarounds",
      "Runtime configuration injection via Docker environment variables",
      "Automated container builds published to GHCR",
    ],
  },
  {
    title: "ocompose",
    description:
      "Reproducible Docker mini-OS platform for spinning up isolated, multi-instance development environments. Each instance gets its own containers, network, volumes, and ports with configurable runtime and database engine.",
    tech: [
      "Bash",
      "Docker Compose",
      "Nginx",
      "PHP-FPM",
      "Node.js",
      "Python",
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "Redis",
    ],
    icon: Terminal,
    highlights: [
      "Multi-instance isolation with automatic port assignment",
      "Full CLI + Web UI with browser-based terminal & authentication",
      "Profile-based service activation (only start what you need)",
      "Cross-platform support (Linux + Windows via WSL)",
    ],
  },
  {
    title: "DB Docker Server",
    description:
      "Multi-engine database server manager that creates, manages, seeds, backs up, and clones isolated Docker-based database instances. Serves as the shared database layer for the entire platform ecosystem.",
    tech: [
      "Bash",
      "Docker Compose",
      "Node.js",
      "React",
      "Vite",
      "PostgreSQL",
      "MinIO",
      "phpMyAdmin",
      "pgAdmin",
    ],
    icon: Database,
    highlights: [
      "Instance-per-project isolation with seed & clone commands",
      "React Web UI with SSE real-time logs & task monitoring",
      "Timestamped backup & restore with optional MinIO (S3) sync",
      "Credential management (create/drop users, grant privileges)",
    ],
  },
  {
    title: "SonarQube Runner",
    description:
      "Local web UI for triggering SonarQube code analysis scans via Docker. Provides a form-based interface to configure and launch sonar-scanner-cli containers with real-time streamed output.",
    tech: [
      "Node.js",
      "Express",
      "Docker",
      "SonarQube",
      "WSL",
    ],
    icon: Wrench,
    highlights: [
      "Automatic Windows-to-WSL path conversion for Docker mounts",
      "Real-time chunked/streamed scan output via HTTP",
      "Supports PHP coverage, JS/Cypress LCOV reports",
      "Configurable exclusions and test directory patterns",
    ],
  },
  {
    title: "n8n Automation Stack",
    description:
      "Self-hosted n8n workflow automation platform for orchestrating integrations between Supabase, GitLab, and third-party applications. Used to automate Supabase data sync to external apps, trigger GitLab CI/CD pipelines, and launch workflow jobs via webhook hooks.",
    tech: [
      "n8n",
      "PostgreSQL",
      "Docker Compose",
      "Supabase",
      "GitLab API",
      "Webhooks",
    ],
    icon: Workflow,
    highlights: [
      "Automates Supabase data synchronization to third-party applications",
      "Triggers GitLab CI/CD pipelines and jobs via n8n webhook hooks",
      "PostgreSQL 16 backend with health checks and encrypted credential storage",
      "Production-ready with persistent volumes and timezone configuration",
    ],
  },
];

const testingSuites = [
  {
    title: "Paie Test Automatique",
    description:
      "Comprehensive Cypress E2E test suite for the MANAO Paie (payroll) application. Contains exhaustive tests and non-regression tests with fake data generation, Excel file handling, and environment-aware configuration.",
    tech: [
      "Cypress",
      "JavaScript",
      "Faker.js",
      "xlsx",
      "Bun",
      "Node.js",
    ],
    icon: TestTube2,
    highlights: [
      "Dual-branch strategy (prod → ENGRENAGES, preprod → ROULEMENTS)",
      "Auto-generates employee test data (matricule, CIN, dates) via Faker",
      "Excel test data generation and CSV fixture parsing",
      "Page Object pattern with ESM module architecture",
    ],
  },
  {
    title: "Compta Test Automatique",
    description:
      "Cypress E2E test suite for the MANAO Compta (accounting) application. Mirrors the payroll test structure with its own environment config, retry strategies, and video recording.",
    tech: [
      "Cypress",
      "JavaScript",
      "Bun",
      "Node.js",
    ],
    icon: TestTube2,
    highlights: [
      "Git branch detection for automatic environment selection",
      "Cookie persistence between tests for session continuity",
      "Video recording with no compression for debugging",
      "120s page load timeout for heavy accounting pages",
    ],
  },
  {
    title: "QA Context Toolkit",
    description:
      "AI-assisted QA toolkit that audits Cypress test files against CSV-based test codification rules and generates compliance reports. Includes a Node.js web app for CSV-to-SQL import of test scenarios into databases.",
    tech: [
      "Node.js",
      "Express",
      "MySQL",
      "CSV Parsing",
      "AI/Copilot",
    ],
    icon: TestTube2,
    highlights: [
      "CSV-to-SQL pipeline for 3 product lines (Paie, Compta, Gescom)",
      "AI-powered test compliance auditing via Copilot SKILL",
      "Multi-file batch import with direct DB execution",
      "20+ CSV codification files covering all test scenarios",
    ],
  },
];

function EnterpriseCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glow-card bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 bg-secondary/10 rounded-xl shrink-0">
            <Icon size={22} className="text-secondary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-textPrimary">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-textSecondary text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((item) => (
            <span
              key={item}
              className="text-xs text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-mono"
            >
              {item}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm text-secondary/80 hover:text-secondary transition-colors"
        >
          {expanded ? "Hide" : "Key"} highlights
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 space-y-1.5"
          >
            {project.highlights.map((item, i) => (
              <li
                key={i}
                className="text-textSecondary text-sm flex items-start"
              >
                <span className="text-secondary mr-2 mt-0.5">▹</span>
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
}

function CategorySection({ title, subtitle, icon: Icon, items }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-secondary/10 rounded-xl">
          <Icon size={24} className="text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-textPrimary">{title}</h3>
      </div>
      <p className="text-textSecondary mb-8 ml-14 text-sm">{subtitle}</p>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((project, index) => (
          <EnterpriseCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function Enterprise() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="enterprise" className="py-24">
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
              Enterprise Platform Projects
            </h2>
            <div className="w-20 h-1 bg-secondary/50 rounded mt-3" />
          </div>
          <p className="text-textSecondary mb-12 max-w-3xl">
            A complete interconnected platform ecosystem at MANAO Group —
            spanning the containerization and deployment of the core business
            applications, the DevOps tooling I built, and automated test suites
            — all orchestrated through Docker networking.
          </p>

          {/* Architecture Overview */}
          <div className="mb-16 p-6 bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/5">
            <h3 className="text-lg font-bold text-textPrimary mb-4 flex items-center gap-2">
              <Server size={20} className="text-secondary" />
              Platform Architecture
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <p className="text-secondary font-semibold mb-2">
                  Infrastructure Layer
                </p>
                <p className="text-textSecondary">
                  DB Docker Server manages isolated database instances (MariaDB,
                  MySQL, PostgreSQL). ocompose provides reproducible dev
                  environments with configurable runtimes and services.
                </p>
              </div>
              <div>
                <p className="text-secondary font-semibold mb-2">
                  Application Layer
                </p>
                <p className="text-textSecondary">
                  Four interdependent legacy PHP applications, containerized
                  into a reproducible multi-network Docker environment with
                  shared service discovery and per-application entry points.
                </p>
              </div>
              <div>
                <p className="text-secondary font-semibold mb-2">
                  Automation Layer
                </p>
                <p className="text-textSecondary">
                  n8n orchestrates Supabase-to-third-party data sync and
                  triggers GitLab CI/CD pipelines via webhook hooks for
                  automated workflow execution.
                </p>
              </div>
              <div>
                <p className="text-secondary font-semibold mb-2">
                  Quality Layer
                </p>
                <p className="text-textSecondary">
                  Cypress E2E test suites cover Paie & Compta modules. QA
                  Context toolkit audits test compliance. SonarQube runner
                  enforces code quality standards.
                </p>
              </div>
            </div>
          </div>


          <CategorySection
            title="Security Engineering"
            subtitle="Authorized application security work on production business platforms, under NDA — findings and reports are not public, the methods are"
            icon={Shield}
            items={securityWork}
          />

          <CategorySection
            title="Infrastructure & Deployment"
            subtitle="Containerization of the core business platform, plus custom tooling for dev environments, databases, and code quality"
            icon={Terminal}
            items={devopsTools}
          />

          <CategorySection
            title="Automated Testing & QA"
            subtitle="End-to-end test suites and quality assurance tooling"
            icon={TestTube2}
            items={testingSuites}
          />
        </motion.div>
      </div>
    </section>
  );
}
