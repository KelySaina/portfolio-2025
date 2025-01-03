import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techStack = [
  { name: 'React', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Vue', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg' },
  { name: 'Node.js', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'Java', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'PHP', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
  { name: 'Jenkins', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg' },
  { name: 'Ansible', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg' },
  { name: 'GCP', img: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-textSecondary">
              <p className="mb-4">
                I'm a passionate Full Stack Developer and aspiring DevOps engineer with expertise in modern web technologies
                and cloud infrastructure. My journey spans from frontend development to cloud architecture, allowing me to build
                and deploy scalable applications.
              </p>
              <p className="mb-4">
                As a Google Cloud Certified Associate Cloud Engineer, I specialize in cloud-native solutions
                and infrastructure automation.
              </p>
            </div>
            <motion.div
              className="grid grid-cols-4 gap-4 p-4 bg-primary/30 rounded-lg"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="flex flex-col items-center justify-center p-2"
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-10 h-10 mb-2"
                  />
                  <span className="text-xs text-textSecondary">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}