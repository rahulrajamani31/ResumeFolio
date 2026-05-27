import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Cloud, GitBranch, Boxes, Cpu, BarChart3 } from 'lucide-react';

const stats = [
  { value: '25+', label: 'Projects Built', icon: Code2 },
  { value: '150+', label: 'Automated Tests', icon: GitBranch },
  { value: '10+', label: 'Technologies', icon: Cpu },
  { value: '3+', label: 'Cloud Deployments', icon: Cloud },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">01. About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface">Engineering with Purpose</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3 space-y-5"
          >
            {/* Profile photo card */}
            <div className="flex items-center gap-4 p-4 glass rounded-xl glow-border mb-2">
              <div className="relative flex-shrink-0">
                <img
                  src="/Rahul Casual.jfif"
                  alt="Rahul R"
                  className="w-16 h-16 rounded-xl object-cover object-top border-2 border-accent/20"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-dark" />
              </div>
              <div>
                <p className="text-surface font-semibold">Rahul R</p>
                <p className="text-xs text-accent font-mono">Software Engineer</p>
                <p className="text-xs text-muted">Siemens Healthineers · Bengaluru</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed text-base">
              Engineer with <strong>2+ years of experience</strong> at Siemens Healthineers spanning
              full-stack internal tooling, automation testing, and DevOps practices. I started as an
              Automation Test Engineer in February 2024, working on enterprise-level application
              automation using <strong>Java, Selenium, and Azure DevOps</strong>.
            </p>
            <p className="text-muted leading-relaxed text-base">
              I identified operational challenges within the organization&apos;s Azure DevOps
              environment and independently designed a <strong>MERN stack application</strong> for
              centralized pipeline management — now serving <strong>100+ daily users</strong> across
              multiple teams. The platform manages 30+ pipelines and significantly improved
              operational efficiency.
            </p>
            <p className="text-muted leading-relaxed text-base">
              My long-term focus is aligned toward{' '}
              <strong>DevOps Engineering, Cloud Technologies, Infrastructure Automation</strong>,
              and scalable deployment architecture. I&apos;m continuously strengthening expertise in
              Docker, Kubernetes, Azure Cloud, CI/CD pipelines, and Linux systems.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                'JavaScript',
                'TypeScript',
                'Java',
                'Docker',
                'Kubernetes',
                'Azure',
                'CI/CD',
                'Selenium',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono text-muted bg-dark-200 border border-white/5 rounded-md hover:text-accent hover:border-accent/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-5 glow-border glow-border-hover group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-2 rounded-lg bg-accent/10 w-fit mb-3 group-hover:bg-accent/20 transition-colors">
                  <stat.icon size={20} className="text-accent" />
                </div>
                <p className="text-2xl font-bold text-surface mb-1">{stat.value}</p>
                <p className="text-xs text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
