import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, FileText, Send, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { useState, FormEvent } from 'react';

const socialLinks = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/rahulrajamani31',
    handle: '@rahulrajamani31',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'www.linkedin.com/in/rahul-rajamani',
    handle: '/in/rahul-rajamani',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:rahulrajamani310702@gmail.com',
    handle: 'rahulrajamani310702@gmail.com',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">07. Contact</span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface">Let's Build Something</h2>
          <p className="text-muted mt-3 max-w-md mx-auto">
            Open to exciting opportunities in software engineering and DevOps. Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social Cards */}
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 glass rounded-xl glow-border glow-border-hover group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <link.icon size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-surface group-hover:text-accent transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-muted font-mono">{link.handle}</p>
                </div>
              </motion.a>
            ))}

            {/* Resume Download */}
            <motion.a
              href="/Resume.pdf"
              download="Rahul_Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-4 p-4 bg-accent/10 border border-accent/20 rounded-xl group transition-all duration-300 hover:bg-accent/15 hover:-translate-y-1"
            >
              <div className="p-3 rounded-lg bg-accent/20">
                <FileText size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-surface">Download Resume</p>
                <p className="text-xs text-muted font-mono">Rahul_Resume.pdf</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact Form - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="glass rounded-xl overflow-hidden glow-border">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-dark-200/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <Terminal size={12} className="text-muted" />
                  <span className="text-xs font-mono text-muted">contact-form</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-mono text-muted mb-2">
                    <span className="text-accent">$</span> name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-dark-200/60 border border-white/5 rounded-lg text-sm text-surface placeholder:text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted mb-2">
                    <span className="text-accent">$</span> email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-dark-200/60 border border-white/5 rounded-lg text-sm text-surface placeholder:text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted mb-2">
                    <span className="text-accent">$</span> message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-dark-200/60 border border-white/5 rounded-lg text-sm text-surface placeholder:text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark disabled:bg-accent/50 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                >
                  {submitted ? (
                    <>
                      <span className="text-green-300 font-mono text-xs">
                        ✓ Message sent successfully
                      </span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
