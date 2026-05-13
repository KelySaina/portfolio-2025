import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    {
      title: "Master's Degree in Computer Science",
      issuer: "Ecole Nationale d'Informatique",
      date: "December 2025",
      description:
        "Thesis on Microservices Architecture — scored 19.75/20. Mention: Très Honorable avec Félicitations du Jury (Summa Cum Laude).",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Logo_eni.png/220px-Logo_eni.png",
      link: null,
    },
    {
      title: "Bachelor of Computer Science",
      issuer: "Ecole Nationale d'Informatique",
      date: "2022-2023",
      description:
        "Achieved highest honors for thesis on CI/CD of a Node.js API with Jenkins.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Logo_eni.png/220px-Logo_eni.png",
      link: null,
    },
    {
      title: "Associate Cloud Engineer (ACE)",
      issuer: "Google Cloud Platform",
      date: "October 2024",
      description:
        "Expertise in deploying and managing cloud infrastructure, performance optimization, and security implementation.",
      image:
        "https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
      link: "https://www.credly.com/badges/1d2f4a1e-e3e7-4f87-abb1-2fc3921a56e9",
    },
  ];

  return (
    <section id="certifications" className="py-24">
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
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-secondary/50 rounded mt-3" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card bg-white/[0.03] backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 group"
              >
                <div className="bg-white/95 flex items-center justify-center p-6">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <p className="text-secondary text-xs font-mono mb-1">
                    {cert.date}
                  </p>
                  <h3 className="text-lg font-bold text-textPrimary mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-secondary/70 text-sm italic mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-textSecondary text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm text-secondary/80 hover:text-secondary font-medium transition-colors"
                    >
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
