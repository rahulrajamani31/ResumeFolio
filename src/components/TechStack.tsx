import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Server, Container, Cloud, ArrowRight } from 'lucide-react';

const techFlow = [
  {
    category: 'Frontend',
    icon: Monitor,
    color: 'from-blue-500 to-cyan-400',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-400',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Automation Testing',
    icon: Container,
    color: 'from-purple-500 to-violet-400',
    items: ['Selenium', 'JUnit', 'TestNG'],
  },
  {
    category: 'Containerization',
    icon: Container,
    color: 'from-purple-500 to-violet-400',
    items: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm'],
  },
  {
    category: 'Cloud & CI/CD',
    icon: Cloud,
    color: 'from-orange-500 to-amber-400',
    items: ['Azure', 'GitHub Actions', 'Azure DevOps', 'Terraform'],
  },
];

const databases = ['MongoDB', 'Redis', 'CosmosDB'];

export default function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="tech" className="relative py-24 lg:py-32 bg-dark-100/50">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">02. Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface">
            Infrastructure Architecture
          </h2>
          <p className="text-muted mt-3 max-w-xl">
            End-to-end technology pipeline from frontend to cloud deployment.
          </p>
        </motion.div>

        {/* Flow Architecture */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {techFlow.map((tech, i) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="glass rounded-xl p-6 glow-border glow-border-hover h-full transition-all duration-300 hover:-translate-y-2">
                {/* Connector Arrow */}
                {i < techFlow.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.15 }}
                    >
                      <ArrowRight size={16} className="text-accent/40" />
                    </motion.div>
                  </div>
                )}

                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}
                >
                  <tech.icon size={20} className="text-white" />
                </div>

                <h3 className="text-surface font-semibold mb-1">{tech.category}</h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-transparent rounded mb-4" />

                <div className="space-y-2">
                  {tech.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted group-hover:text-surface/80 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      <span className="font-mono text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Database Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="glass rounded-xl p-6 glow-border"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              Data Layer →
            </span>
            {databases.map((db, i) => (
              <motion.span
                key={db}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
                className="px-4 py-2 text-sm font-mono text-surface bg-dark-200 border border-white/5 rounded-lg hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
              >
                {db}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
