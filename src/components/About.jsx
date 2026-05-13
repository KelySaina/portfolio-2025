import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Layers,
  Cloud,
  Zap,
} from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-12">
            <span className="section-number">01</span>
            <h2 className="text-3xl font-bold text-textPrimary relative z-10">
              About Me
            </h2>
            <div className="w-20 h-1 bg-secondary/50 rounded mt-3" />
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Code2,
                title: "Full Stack Developer & DevOps Engineer",
                text: "I work across the entire software stack, from frontend UI to backend logic, automating infrastructure and deployments.",
              },
              {
                icon: Layers,
                title: "Responsive frontends, scalable backends",
                text: "I create interfaces that work on any device, engineer APIs that grow with demand, and design cloud-native architectures.",
              },
              {
                icon: Cloud,
                title: "Google Cloud Certified ACE",
                text: "I specialize in automation, CI/CD pipelines, and infrastructure as code with tools like Terraform and Ansible.",
              },
              {
                icon: Zap,
                title: "Fast, secure, and reliable software",
                text: "Performance, security, and stability are at the core of everything I build.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glow-card bg-white/[0.03] backdrop-blur-sm rounded-xl p-5 border border-white/5"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg shrink-0">
                      <Icon size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-textPrimary font-semibold text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-textSecondary text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { value: "10+", label: "Projects Built" },
                { value: "GCP ACE", label: "Certified" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-4 bg-white/[0.03] rounded-xl border border-white/5"
                >
                  <p className="text-secondary font-bold text-xl font-mono">
                    {stat.value}
                  </p>
                  <p className="text-textSecondary text-xs mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
