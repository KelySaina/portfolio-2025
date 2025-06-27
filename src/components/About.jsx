import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

const techStack = [
  {
    name: "React",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Vue",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Node.js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Java",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    name: "PHP",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
  },
  {
    name: "Docker",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    name: "Supabase",
    img: "https://img.icons8.com/?size=48&id=sH0rW2TvYdr9&format=png",
  },
  {
    name: "Tailwind CSS",
    img: "https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png",
  },
  {
    name: "Jenkins",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
  },
  {
    name: "Ansible",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg",
  },
  {
    name: "GCP",
    img: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  },
  {
    name: "AWS",
    img: "https://img.icons8.com/?size=48&id=33039&format=png",
  },
  {
    name: "Kubernetes",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "GitLab",
    img: "https://img.icons8.com/?size=48&id=34886&format=png",
  },
];

export default function About() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 12,
        },
      },
    },
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (!slider) return;

    const interval = setInterval(() => {
      slider.current?.next();
    }, 1500);

    return () => clearInterval(interval); // cleanup on unmount
  }, [slider]);

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

          <div className="grid gap-8">
            {/* Left Section: Intro */}
            <div className="text-textSecondary space-y-4">
              <div className="text-textSecondary space-y-6">
                <div>
                  <p>
                    👋 I'm a{" "}
                    <span className="font-semibold">Full Stack Developer</span>{" "}
                    and
                    <span className="font-semibold">
                      {" "}
                      aspiring DevOps Engineer
                    </span>
                    .
                  </p>
                  <p className="text-sm text-textTertiary mt-1">
                    I work across the entire software stack, from frontend UI to
                    backend logic, and I’m growing my skills in automating
                    infrastructure and deployments.
                  </p>
                </div>

                <div>
                  <p>
                    🛠️ I build responsive frontends, scalable backends, and
                    design cloud-native architectures.
                  </p>
                  <p className="text-sm text-textTertiary mt-1">
                    I create interfaces that work on any device, engineer APIs
                    and systems that grow with demand, and design systems for
                    the cloud from the ground up.
                  </p>
                </div>

                <div>
                  <p>
                    ☁️ As a{" "}
                    <span className="font-semibold">
                      Google Cloud Certified Associate Cloud Engineer
                    </span>
                    , I specialize in automation, CI/CD, and infrastructure as
                    code.
                  </p>
                  <p className="text-sm text-textTertiary mt-1">
                    I automate repetitive tasks, configure continuous
                    integration/deployment pipelines, and use tools like
                    Terraform or Ansible to manage infrastructure
                    programmatically.
                  </p>
                </div>

                <div>
                  <p>
                    🚀 I love delivering fast, secure, and reliable software
                    across the full stack.
                  </p>
                  <p className="text-sm text-textTertiary mt-1">
                    Performance, security, and stability are at the core of
                    everything I build—ensuring users and teams have a great
                    experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section: Toolbox */}
            <motion.div
              className="keen-slider bg-primary/30 rounded-lg p-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              ref={sliderRef}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="keen-slider__slide flex flex-col items-center justify-center overflow-visible"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-10 h-10 mb-1"
                  />
                  <span className="text-xs text-textSecondary">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
