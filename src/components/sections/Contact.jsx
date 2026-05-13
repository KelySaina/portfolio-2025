import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { MapPin, Phone, Download, Send, Loader2, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [cvOpen, setCvOpen] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: form.email,
          to: "thierrymichael2001@gmail.com",
          subject: `[Portfolio] - ${form.name} contacted you`,
          message: `<div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a192f;border-radius:12px;overflow:hidden;border:1px solid rgba(94,174,255,0.15)">
<div style="background:linear-gradient(135deg,#112240,#0a192f);padding:28px 32px;border-bottom:2px solid rgba(94,174,255,0.2)">
<h1 style="margin:0;color:#5eaeff;font-size:14px;font-weight:600;letter-spacing:1px;text-transform:uppercase">Opportunity: ${form.subject}</h1>
</div>
<div style="padding:28px 32px">
<p style="color:#ccd6f6;font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap">${form.message}</p>
</div>
<div style="padding:20px 32px;background:rgba(94,174,255,0.04);border-top:1px solid rgba(94,174,255,0.1)">
<p style="margin:0 0 4px;color:#8892b0;font-size:13px"><strong style="color:#ccd6f6">${form.name}</strong></p>
<p style="margin:0;color:#5eaeff;font-size:13px">${form.email}</p>
</div>
</div>`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.isOK) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-12 text-left">
            <span className="section-number">08</span>
            <h2 className="text-3xl font-bold text-textPrimary relative z-10">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-secondary/50 rounded mt-3" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — Form */}
            <div>
              <p className="text-textSecondary mb-6 leading-relaxed">
                I'm always looking for new opportunities in software development
                and DevOps. Drop me a message and I'll get back to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-textSecondary text-xs font-mono mb-1.5 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-textPrimary text-sm placeholder:text-textSecondary/30 focus:outline-none focus:border-secondary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-textSecondary text-xs font-mono mb-1.5 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-textPrimary text-sm placeholder:text-textSecondary/30 focus:outline-none focus:border-secondary/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-textSecondary text-xs font-mono mb-1.5 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-textPrimary text-sm placeholder:text-textSecondary/30 focus:outline-none focus:border-secondary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-textSecondary text-xs font-mono mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-textPrimary text-sm placeholder:text-textSecondary/30 focus:outline-none focus:border-secondary/50 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full border-2 border-secondary text-secondary px-6 py-3 rounded-xl font-mono text-sm
                         hover:bg-secondary hover:text-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle size={16} />
                      Sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle size={16} />
                      Failed — try again
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Right — Info + CV */}
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="glow-card flex items-center gap-3 bg-white/[0.03] backdrop-blur-sm rounded-xl px-5 py-4 border border-white/5">
                  <MapPin size={18} className="text-secondary shrink-0" />
                  <span className="text-textSecondary text-sm">
                    Antsirabe, Madagascar
                  </span>
                </div>
                <div className="glow-card flex items-center gap-3 bg-white/[0.03] backdrop-blur-sm rounded-xl px-5 py-4 border border-white/5">
                  <Phone size={18} className="text-secondary shrink-0" />
                  <span className="text-textSecondary text-sm">
                    +261 34 88 359 57
                  </span>
                </div>
              </div>

              <div className="mt-8 relative">
                <motion.button
                  onClick={() => setCvOpen(!cvOpen)}
                  className="flex items-center justify-center gap-2 w-full bg-secondary text-primary px-8 py-4 rounded-xl text-lg font-mono font-bold
                         hover:bg-secondary/90 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={20} />
                  Download CV
                  <ChevronDown size={16} className={`transition-transform duration-200 ${cvOpen ? "rotate-180" : ""}`} />
                </motion.button>
                {cvOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white/[0.05] backdrop-blur-md rounded-xl border border-white/10 overflow-hidden z-10"
                  >
                    <a
                      href="/CV_RAVELOMAHARAVO_EN.pdf"
                      onClick={() => setCvOpen(false)}
                      className="flex items-center gap-3 px-5 py-3.5 text-textPrimary hover:bg-secondary/10 transition-colors font-mono text-sm"
                    >
                      <span className="text-base">🇬🇧</span> English
                    </a>
                    <a
                      href="/CV_RAVELOMAHARAVO_FR.pdf"
                      onClick={() => setCvOpen(false)}
                      className="flex items-center gap-3 px-5 py-3.5 text-textPrimary hover:bg-secondary/10 transition-colors font-mono text-sm border-t border-white/5"
                    >
                      <span className="text-base">🇫🇷</span> Français
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-white/5 text-center">
            <p className="text-textSecondary/50 text-xs font-mono">
              Designed & Built by Thierry Michaël
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
