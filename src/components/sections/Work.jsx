import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ExperienceCard from '../ui/ExperienceCard';

export default function Work() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const experiences = [
    {
      title: "FullStack JavaScript Developer",
      company: "MAR IT Consulting",
      period: "August 2024 - November 2024",
      description: [
        "Built secure, scalable web and mobile friendly applications using Vue3, Nuxt.js, Node.js, and Supabase",
        "Developed and integrated dynamic role-based access control (RBAC) systems",
        "Utilized OCR technologies to extract structured data from invoices",
        "Designed and implemented interactive UI/UX components with Tailwind CSS and Quasar Framework",
        "Proposed and executed new ideas for improving system functionality"
      ],
      tech: ["Vue.js", "Nuxt.js", "Node.js", "Supabase", "Tailwind CSS", "Quasar"]
    },
    {
      title: "Back-End Node.js Developer",
      company: "OnlyTravaux",
      period: "January 2024",
      description: [
        "Contributed to backend development using Node.js and GraphQL",
        "Implemented API endpoints to support front-end requirements",
        "Ensured smooth data flow and integration with external services"
      ],
      tech: ["Node.js", "GraphQL", "API Development"]
    },
    {
      title: "DevOps Intern",
      company: "OpenData Madagascar",
      period: "October 2023 - December 2023",
      description: [
        "Implemented CI/CD pipeline using Jenkins",
        "Automated deployment of Node.js API",
        "Streamlined development workflow and deployment processes"
      ],
      tech: ["Jenkins", "CI/CD", "Node.js", "DevOps"]
    },
    {
      title: "Network Administrator Intern",
      company: "ESD",
      period: "October 2022 - December 2022",
      description: [
        "Implemented captive portal solution",
        "Developed dedicated application for captive portal",
        "Managed network infrastructure and security"
      ],
      tech: ["Networking", "Security", "Application Development"]
    }
  ];

  return (
    <section id="work" className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-12">Where I've Worked</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}