import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Github, ExternalLink, Layers, Zap, Database, Wrench } from "lucide-react";

const showCase = [
  {
    title: "My Portfolio",
    description:
      "Fully responsive portfolio website built with React and Tailwind, showcasing my work and skills.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    links: {
      github: "https://github.com/KelySaina/portfolio-2025",
      live: "https://thierry-michael.vercel.app/",
    },
  },
  {
    title: "Road to sudo \u2014 Learn Linux by Playing",
    description:
      "An educational game teaching Linux through a simulated terminal: a virtual filesystem, 74 commands, and 64 challenges across 14 levels. Challenges are validated against the resulting machine state rather than the typed command, so any valid solution passes. Includes a 2D platformer adventure mode, full EN/FR localization, and ~2,000 test assertions. Released as self-contained Linux and Windows binaries.",
    tech: ["Godot 4.4", "GDScript", "GitHub Actions", "i18n"],
    links: {
      github: "https://github.com/KelySaina/road-to-sudo",
      live: "https://github.com/KelySaina/road-to-sudo/releases",
    },
  },
  {
    title: "AKD-MI — Institution Directory",
    description:
      "Full-stack platform for browsing and managing institutional data with GPS mapping, draft/publish workflows, RBAC, and a modular architecture. Features Leaflet maps, advanced search, and Supabase Auth (migrating to Passport.js + JWT).",
    tech: ["Next.js", "React", "TypeScript", "NestJS", "GraphQL", "Prisma", "PostgreSQL", "Tailwind CSS", "Leaflet", "Docker", "Cypress"],
    links: {
      github: "#",
      live: "https://akd-mi.vercel.app",
    },
  },
  {
    title: "ASSBEP — Health Platform",
    description:
      "Multilingual (EN/FR) health platform with a public-facing website, admin backoffice, and REST API. Features dynamic i18n via a translation table pattern, RBAC (Super Admin/Editor/Translator), media library with MinIO, and CI/CD via GitHub Actions to AWS EC2.",
    tech: ["Vue 3", "Vite", "NestJS", "Prisma", "PostgreSQL", "MinIO", "Caddy", "Docker", "GitHub Actions", "AWS EC2"],
    links: {
      github: "#",
      live: "https://assbep.vercel.app",
    },
  },
  {
    title: "Konnect IDP/SSO Service",
    description:
      "Full-featured Identity Provider and Single Sign-On service implementing OAuth 2.0, OpenID Connect, and Multi-Factor Authentication. Centralized auth backend with admin dashboard for managing users and OAuth clients.",
    tech: ["Node.js", "Express", "MySQL", "JWT", "OAuth 2.0", "OIDC", "TOTP/MFA", "Docker", "Helmet"],
    links: {
      github: "#",
      live: "#",
    },
  },
];

const webAI = [
  {
    title: "SanityCheck",
    description:
      "A sanity check tool to track and manage the health of your projects. It allows you to log issues, track progress, and ensure your projects are on the right track.",
    tech: ["TypeScript", "React", "Supabase", "Tailwind CSS"],
    links: {
      github: "https://github.com/KelySaina/sanitycheck",
      live: "https://sanitytracker.vercel.app/",
    },
  },
  {
    title: "MyAgenda",
    description:
      "A personal agenda application that allows users to manage their tasks and events efficiently. It features a clean interface and integrates email notification.",
    tech: ["TypeScript", "React", "Supabase", "Tailwind CSS", "EmailJS"],
    links: {
      github: "https://github.com/KelySaina/myAgenda",
      live: "https://ks-my-agenda.vercel.app/",
    },
  },
  {
    title: "FileShare",
    description:
      "A simple file sharing application that allows upload, download and share files for everyone.",
    tech: ["TypeScript", "React", "Supabase", "Tailwind CSS"],
    links: {
      github: "https://github.com/KelySaina/fileshare",
      live: "https://ks-fileshare.netlify.app/",
    },
  },
  {
    title: "Faker Data Generator",
    description:
      "A tool to generate fake data for testing and development purposes. It allows users to customize the type and amount of data generated.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Faker.js"],
    links: {
      github: "https://github.com/KelySaina/faker-data",
      live: "https://ks-faker-data.netlify.app/",
    },
  },
];

const managementApp = [
  {
    title: "Human Ressource API",
    description:
      "Service Oriented Architecture API for Human Ressource Management. It features employees beneficiaries and integration of microservices.",
    tech: ["JavaScript", "Node.JS", "GraphQL", "Docker", "Docker Compose"],
    links: {
      github: "https://github.com/KelySaina/SOA",
      live: "#",
    },
  },
  {
    title: "Lending",
    description:
      "A console application for managing lending operations. It allows users to manage loans, borrowers, and repayments.",
    tech: ["Python"],
    links: {
      github: "https://github.com/KelySaina/gestionEmprunt",
      live: "#",
    },
  },
  {
    title: "Employee",
    description:
      "A desktop app, this web application allows users to manage employee data, including adding, updating, and deleting employee records.",
    tech: ["Java", "JavaSwing", "MySQL", "JDBC", "NetBeans"],
    links: {
      github: "https://github.com/KelySaina/GestionEmployeeJava",
      live: "#",
    },
  },
  {
    title: "Room Reservation",
    description:
      "Room Reservation Web App, this web application allows users to manage room reservations, including adding, updating, and deleting reservations. Integrated with a REST API of PHP backend and React frontend.",
    tech: ["JavaScript", "React", "PHP", "MySQL", "Axios"],
    links: {
      github: "https://github.com/KelySaina/gestionReservationChambres",
      live: "#",
    },
  },
  {
    title: "Appartement",
    description:
      "A mobile application for managing apartment rentals. It allows users to manage apartments' rent, with a friendly interface and easy navigation.",
    tech: ["JavaScript", "ReactNative", "Node.JS", "MySQL", "Axios"],
    links: {
      github: "https://github.com/KelySaina/Ges-Appart",
      live: "#",
    },
  },
];

const utilities = [
  {
    title: "Supabase GED",
    description:
      "A npm package that provides a simple interface to interact with Supabase storage, allowing users to upload, download, and manage files easily.",
    tech: ["JavaScript", "Supabase", "NPM"],
    links: {
      github: "https://github.com/KelySaina/supabase-ged",
      live: "#",
    },
  },
  {
    title: "Node Mailer API",
    description:
      "Email sending API using Node.js and Nodemailer. It allows users to send emails with attachments and HTML content.",
    tech: ["JavaScript", "Node.JS", "Nodemailer", "Express"],
    links: {
      github: "https://github.com/KelySaina/nodemailer-api",
      live: "#",
    },
  },
  {
    title: "Node OCR API",
    description:
      "This API allows you to upload image files (or PDF files) and perform Optical Character Recognition (OCR) using Tesseract to extract text from the images. The API is built with Node.js and Express and uses multer for file uploads and node-tesseract-ocr for OCR processing.",
    tech: ["JavaScript", "Node.JS", "Express", "Multer", "Tesseract.js"],
    links: {
      github: "https://github.com/KelySaina/node-ocr",
      live: "#",
    },
  },
];

const categories = [
  { key: "showcase", label: "Showcase", icon: Layers, projects: showCase, color: "#5eaeff" },
  { key: "services", label: "Services", icon: Zap, projects: webAI, color: "#a78bfa" },
  { key: "management", label: "Management", icon: Database, projects: managementApp, color: "#34d399" },
  { key: "utilities", label: "Utilities", icon: Wrench, projects: utilities, color: "#f59e0b" },
];

function ProjectCard({ project, index }) {
  const hasLive = project.links.live && project.links.live !== "#";
  const hasGithub = project.links.github && project.links.github !== "#";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative glow-card bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/5 p-5 hover:border-secondary/20 transition-all duration-300"
    >
      {/* Top row: title + links */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4 className="text-textPrimary font-semibold text-[15px] leading-snug">
          {hasLive ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors inline-flex items-center gap-1.5"
            >
              {project.title}
              <ExternalLink size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
            </a>
          ) : (
            project.title
          )}
        </h4>
        {hasGithub && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary/40 hover:text-secondary transition-colors shrink-0 mt-0.5"
          >
            <Github size={16} />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-textSecondary/60 text-xs leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="text-[10px] text-secondary/70 bg-secondary/[0.07] px-2 py-0.5 rounded-full font-mono"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="text-[10px] text-textSecondary/40 font-mono px-1">
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </motion.div>
  );
}

export default function Personal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState("showcase");

  const activeCategory = categories.find((c) => c.key === active);

  return (
    <section id="personal-projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-12">
            <span className="section-number">06</span>
            <h2 className="text-3xl font-bold text-textPrimary relative z-10">
              Software Development Projects
            </h2>
            <div className="w-20 h-1 bg-secondary/50 rounded mt-3" />
          </div>

          {/* Tab bar */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible md:flex-wrap">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = active === cat.key;
              return (
                <motion.button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs transition-all duration-300 shrink-0 whitespace-nowrap ${
                    isActive
                      ? "text-primary bg-secondary"
                      : "text-textSecondary hover:text-textPrimary bg-white/[0.03] border border-white/5 hover:border-white/10"
                  }`}
                >
                  <Icon size={14} />
                  {cat.label}
                  <span
                    className={`text-[10px] ml-0.5 ${
                      isActive ? "text-primary/60" : "text-textSecondary/30"
                    }`}
                  >
                    {cat.projects.length}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {activeCategory.projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
