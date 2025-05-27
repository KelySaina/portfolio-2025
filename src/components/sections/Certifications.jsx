import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    {
      title: "Bachelor of Computer Science",
      issuer: "Ecole Nationale d'Informatique",
      date: "2022-2023",
      description: "Achieved highest honors for thesis on CI/CD of a Node.js API with Jenkins",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.LKW8SdgMoCoqpERH5vNokAAAAA%3Fpid%3DApi&f=1&ipt=a8fe59d177f65cd4ea7ecafad070c711e3e3a3098027b090232f59d337811910&ipo=images"
    },
    {
      title: "Associate Cloud Engineer (ACE)",
      issuer: "Google Cloud Platform",
      date: "October 2024",
      description: "Expertise in deploying and managing cloud infrastructure, performance optimization, and security implementation",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcabai.pro%2Fassets%2Fimages%2Fgoogle-associate%2Fbadge.png&f=1&nofb=1&ipt=bd82879829a0871c92132a5b52c4f97e625c29e3de3f1816cd48bf6a8e500cd2&ipo=images"
    }
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
          <h2 className="text-3xl font-bold text-textPrimary mb-12">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/30 rounded-lg overflow-hidden group"
              >
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-textPrimary mb-2">{cert.title}</h3>
                  <p className="text-secondary">{cert.issuer}</p>
                  <p className="text-textSecondary mb-2">{cert.date}</p>
                  <p className="text-textSecondary">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
