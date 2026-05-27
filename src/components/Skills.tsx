import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Server, Cloud, TestTube, Database, Container } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: Monitor,
    color: 'border-blue-500/30',
    accent: 'text-blue-400',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'border-green-500/30',
    accent: 'text-green-400',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Python',
      'JWT Auth',
      'WebSockets',
      'Microservices',
    ],
  },
  {
    name: 'DevOps',
    icon: Container,
    color: 'border-purple-500/30',
    accent: 'text-purple-400',
    items: [
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Azure DevOps',
      'CI/CD',
      'Terraform',
      'Shell Scripting',
    ],
  },
  {
    name: 'Cloud',
    icon: Cloud,
    color: 'border-orange-500/30',
    accent: 'text-orange-400',
    items: [
      'Azure',
      'AKS',
      'Azure Functions',
      'App Service',
      'Azure Monitor',
      'Container Registry',
      'Key Vault',
      'Blob Storage',
    ],
  },
  {
    name: 'Testing',
    icon: TestTube,
    color: 'border-cyan-500/30',
    accent: 'text-cyan-400',
    items: [
      'Jest',
      'React Testing Library',
      'Cypress',
      'Selenium',
      'Postman',
      'Unit Testing',
      'Integration Testing',
      'E2E Testing',
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    color: 'border-pink-500/30',
    accent: 'text-pink-400',
    items: ['MongoDB', 'Redis', 'CosmosDB', 'Mongoose'],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-dark-100/50">
      <div className="absolute inset-0 bg-grid opacity-30" />
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
            <span className="text-accent font-mono text-sm">06. Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface">Technology Arsenal</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className={`glass rounded-xl overflow-hidden glow-border-hover transition-all duration-300 hover:-translate-y-1 border ${cat.color}`}
            >
              {/* Terminal-style header */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-dark-200/30">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <cat.icon size={13} className={cat.accent} />
                  <span className="text-xs font-mono text-muted">{cat.name.toLowerCase()}/</span>
                </div>
              </div>

              {/* Skills */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.05 + j * 0.03, duration: 0.3 }}
                      className="px-3 py-1.5 text-xs font-mono text-surface/80 bg-dark-200/60 rounded-md border border-white/5 hover:border-accent/30 hover:text-accent cursor-default transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
