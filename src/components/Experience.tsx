import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Siemens Healthineers',
    location: 'Bengaluru, India',
    period: '02/2024 — Present',
    status: 'active',
    description: '',
    highlights: [
      'Built a centralized MERN stack pipeline management platform used by 100+ daily users, enabling execution, scheduling, monitoring, and PDF report downloads replacing direct Azure DevOps portal access .',
      'Implemented YAML-based CI/CD pipelines in Azure DevOps covering build, test, and release stages; reduced manual deployment effort by ~90% .',
      'Worked on automation testing using Java and Selenium, contributing to regression and smoke test execution .',
      'Designed cloud hosting for the internal platform, including infrastructure planning and Azure deployment strategy .',
    ],
    tech: [
      'Selenium',
      'React js',
      'Express.js',
      'MongoDB',
      'Azure DevOps',
      'REST APIs',
      'Node js',
      'Docker',
      'Kubernetes',
      'Azure Cloud',
    ],
  },
  {
    title: 'AI Imaging Intern',
    company: 'L&T Technology Services',
    location: 'Coimbatore, India',
    period: '07/2022 — 11/2022',
    status: 'completed',
    description: '',
    highlights: [
      'Contributed to an AI-based liver segmentation and tumor detection solution using Machine Learning with 1000+ medical imaging DICOM datasets .',
      'Received formal appreciation from the Imaging COE Specialist team for technical contributions to the project .',
      'Worked with AI/ML technologies, medical imaging systems, and DICOM image processing .',
    ],
    tech: ['AI/ML', 'Data Analytics', 'DICOM'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
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
            <span className="text-accent font-mono text-sm">03. Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface">Deployment History</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      exp.status === 'active'
                        ? 'bg-green-400 border-green-400/40 shadow-lg shadow-green-400/20'
                        : 'bg-accent border-accent/40'
                    }`}
                  />
                  {exp.status === 'active' && (
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400/40 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div className="glass rounded-xl glow-border glow-border-hover overflow-hidden transition-all duration-300 hover:-translate-y-1">
                  {/* Card Header */}
                  <div className="p-6 border-b border-white/5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {exp.status === 'active' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono bg-green-400/10 text-green-400 rounded border border-green-400/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              ACTIVE
                            </span>
                          )}
                          {exp.status === 'completed' && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono bg-accent/10 text-accent rounded border border-accent/20">
                              COMPLETED
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-surface">{exp.title}</h3>
                        <p className="text-accent text-sm font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-right">
                        <span className="flex items-center gap-1 text-xs text-muted">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>

                    {/* Highlights as deployment logs */}
                    <div className="bg-dark/50 rounded-lg p-4 mb-4 font-mono text-xs space-y-2">
                      {exp.highlights.map((h, j) => (
                        <div key={j} className="flex items-start gap-2 text-muted">
                          <ChevronRight size={12} className="text-accent mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-[10px] font-mono text-accent bg-accent/10 rounded border border-accent/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
