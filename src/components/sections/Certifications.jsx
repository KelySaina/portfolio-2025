import { motion } from "framer-motion";
import { div, link } from "framer-motion/client";
import { ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    {
      title: "Bachelor of Computer Science",
      issuer: "Ecole Nationale d'Informatique",
      date: "2022-2023",
      description:
        "Achieved highest honors for thesis on CI/CD of a Node.js API with Jenkins.",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.LKW8SdgMoCoqpERH5vNokAAAAA%3Fpid%3DApi&f=1&ipt=a8fe59d177f65cd4ea7ecafad070c711e3e3a3098027b090232f59d337811910&ipo=images",
      link: null,
    },
    {
      title: "Associate Cloud Engineer (ACE)",
      issuer: "Google Cloud Platform",
      date: "October 2024",
      description:
        "Expertise in deploying and managing cloud infrastructure, performance optimization, and security implementation.",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcabai.pro%2Fassets%2Fimages%2Fgoogle-associate%2Fbadge.png&f=1&nofb=1&ipt=bd82879829a0871c92132a5b52c4f97e625c29e3de3f1816cd48bf6a8e500cd2&ipo=images",
      link: "https://www.credly.com/badges/1d2f4a1e-e3e7-4f87-abb1-2fc3921a56e9",
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-12">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/30 rounded-lg overflow-hidden group grid grid-cols-1 md:grid-cols-2 border border-white/20 shadow-lg"
              >
                <div className="bg-white flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-textPrimary mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-secondary">
                    <i>{cert.issuer}</i>
                  </p>
                  <p className="text-textSecondary mb-2">{cert.date}</p>
                  <p className="text-textSecondary">{cert.description}</p>
                  {cert.link && (
                    <div className="flex items-center mt-4 justify-end">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary/80 hover:text-secondary inline-flex items-center font-bold"
                      >
                        View Certificate
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
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
