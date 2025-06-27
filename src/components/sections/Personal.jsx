import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PersonalCard from "../ui/PersonalCard";
import { ListVideo } from "lucide-react";

const showCase = [
  {
    title: "My Portfolio",
    description:
      "Fully responsive portfolio website built with React and Tailwind, showcasing my work and skills.",
    image:
      "https://gquvatpjmhztbuyteita.supabase.co/storage/v1/object/public/portfolio-assets//my-portfolio.png",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    links: {
      github: "https://github.com/KelySaina/portfolio-2025",
      live: "https://thierry-michael.vercel.app/",
    },
  },
  {
    title: "KS Service",
    description:
      "A self-hosted landing page for KS Service, showcasing services and features with a modern design.",
    image:
      "https://gquvatpjmhztbuyteita.supabase.co/storage/v1/object/public/portfolio-assets//ks-service.png",
    tech: ["TypeScript", "JavaScript", "React", "Tailwind CSS", "Docker"],
    links: {
      github: "https://github.com/KelySaina/ks-service",
      live: "https://ks-service.duckdns.org/",
    },
  },
];

const webAI = [
  {
    title: "SanityCheck",
    description:
      "A sanity check tool to track and manage the health of your projects. It allows you to log issues, track progress, and ensure your projects are on the right track.",
    image:
      "https://gquvatpjmhztbuyteita.supabase.co/storage/v1/object/public/portfolio-assets//sanity-tracker.png",
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
    image:
      "https://gquvatpjmhztbuyteita.supabase.co/storage/v1/object/public/portfolio-assets//my-agenda.png",
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
    image:
      "https://gquvatpjmhztbuyteita.supabase.co/storage/v1/object/public/portfolio-assets//fileshare.png",
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
    image:
      "https://gquvatpjmhztbuyteita.supabase.co/storage/v1/object/public/portfolio-assets//faker-data-gen.png",
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
    tech: ["JavaScript", "Node.JS", "Express", "Multer", "Tesseract.js"],
    links: {
      github: "https://github.com/KelySaina/node-ocr",
      live: "#",
    },
  },
];

export default function Personal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="personal-projects" className="py-24 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-textPrimary">
            Software Development Projects
          </h2>
          <div className="mb-5 ml-5">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <ListVideo size={36} />
              <span className="text-white">Showcase projects</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {showCase.map((project, index) => (
                <PersonalCard key={index} project={project} />
              ))}
            </div>
          </div>
          <div className="mb-5 ml-5">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <ListVideo size={36} />
              <span className="text-white">Single Service projects</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webAI.map((project, index) => (
                <PersonalCard key={index} project={project} />
              ))}
            </div>
          </div>
          <div className="mb-5 ml-5">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <ListVideo size={36} />
              <span className="text-white">Management projects</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {managementApp.map((project, index) => (
                <PersonalCard key={index} project={project} />
              ))}
            </div>
          </div>
          <div className="mb-5 ml-5">
            <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <ListVideo size={36} />
              <span className="text-white">Utility projects</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {utilities.map((project, index) => (
                <PersonalCard key={index} project={project} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
