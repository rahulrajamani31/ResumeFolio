import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'CI/CD Pipeline Architecture',
    description:
      'Designed end-to-end CI/CD pipeline and cloud deployment architecture using Docker and Azure, covering build automation, environment management, and release workflows.',
    image: null,
    tech: ['Docker', 'Kubernetes', 'Azure', 'MongoDB'],
    status: 'Production',
    architecture: ['React UI', 'API Gateway', 'Microservices', 'K8s Cluster', 'Azure Cloud'],
  },
  {
    title: 'Pipeline Management Platform',
    description:
      'Centralized app managing 30+ pipelines across teams with execution, scheduling, monitoring, analytics, and PDF reporting — preventing accidental modifications and improving governance.',
    image: null,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    status: 'Production',
    architecture: [
      'Next.js App',
      'REST API',
      'GitHub Webhooks',
      'MongoDB Atlas',
      'PDF Generation Service',
    ],
  },
  {
    title: 'Ooru Connect - Real-time Chat App',
    description:
      'Ooru Connect is a community-driven platform designed to connect people with their hometown, local communities, businesses, events, and opportunities in one digital space. The platform focuses on building meaningful local connections by helping users discover services, share updates, network with people, and stay engaged with their “ooru” (native place/community) from anywhere.',
    image: null,
    tech: ['React', 'Node.js', 'MongoDB', 'Api Gateway', 'Socket.IO'],
    status: 'Staging',
    architecture: [
      'React Client',
      'API Gateway',
      'Node.js Services',
      'MongoDB Atlas',
      'Socket.IO Real-time',
    ],
  },
  {
    title: 'Drag-and-Drop Website Builder',
    description:
      'Intuitive drag-and-drop website builder enabling users to create responsive websites without coding. Features include customizable templates, real-time preview, and seamless deployment.',
    image: null,
    tech: ['React js', 'Puck Package', 'Static Site Generation'],
    status: 'Beta',
    architecture: ['Dashboard UI', 'Puck Component Library', 'Static Site Generator'],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-dark-100/50">
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
            <span className="text-accent font-mono text-sm">04. Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface">Production Systems</h2>
          <p className="text-muted mt-3 max-w-xl">
            Deployable, scalable applications built with modern architecture patterns.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
              className="glass rounded-xl glow-border glow-border-hover overflow-hidden group transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Header Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <GitBranch size={14} className="text-accent" />
                  <span className="text-xs font-mono text-muted">main</span>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono rounded border ${
                    project.status === 'Production'
                      ? 'bg-green-400/10 text-green-400 border-green-400/20'
                      : project.status === 'Staging'
                        ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20'
                        : 'bg-accent/10 text-accent border-accent/20'
                  }`}
                >
                  <CheckCircle size={10} />
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-surface mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Mini Architecture */}
                <div className="flex flex-wrap items-center gap-1 mb-5 text-[10px] font-mono">
                  {project.architecture.map((node, j) => (
                    <span key={node} className="flex items-center gap-1">
                      <span className="px-2 py-1 bg-dark-300/50 text-muted rounded border border-white/5">
                        {node}
                      </span>
                      {j < project.architecture.length - 1 && (
                        <span className="text-accent/40">→</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] font-mono text-accent bg-accent/8 rounded border border-accent/15"
                    >
                      {t}
                    </span>
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
