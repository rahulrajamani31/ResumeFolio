'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';

const projects = [
  {
    title: 'Pipeline Management Platform',
    date: 'Jul 2025 – Present',
    description:
      'Centralized app managing 30+ pipelines across teams with execution, scheduling, monitoring, analytics, and PDF reporting — preventing accidental modifications and improving governance.',
    longDescription:
      'Identified a major operational challenge where multiple projects shared the same Azure DevOps instance, causing usability issues. Built an end-to-end MERN stack solution that enabled users to execute pipelines, schedule runs, monitor results, download PDF reports, and view analytics from a centralized interface.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Azure DevOps REST API', 'Azure Cloud'],
    color: 'bg-brutal-blue',
    impact: ['100+ daily users', '30+ pipelines managed', '~90% effort reduction'],
    featured: true,
  },
  {
    title: 'CI/CD Architecture – MERN Application',
    date: 'Mar 2026 – Present',
    description:
      'Designed end-to-end CI/CD pipeline and cloud deployment architecture for the Pipeline Management application using Docker and Azure.',
    longDescription:
      'Planned CI/CD workflows, deployment strategies, infrastructure management concepts, and scalable hosting approaches. Covers build automation, environment management, and release workflows.',
    stack: ['Azure DevOps', 'Docker', 'Kubernetes', 'Linux', 'Azure Cloud', 'YAML', 'Git'],
    color: 'bg-brutal-orange',
    impact: ['End-to-end automation', 'Docker containerized', 'Multi-env support'],
    featured: true,
  },
  {
    title: 'Drag-and-Drop Website Builder',
    date: 'Feb 2024 – May 2024',
    description:
      'Dynamic page builder with real-time layout editing and reusable component architecture using Next.js and Puck Editor.',
    longDescription:
      'Built an application that allows users to dynamically create and customize web pages using reusable components and real-time editing capabilities. Also designed the CI/CD pipeline architecture for this project.',
    stack: ['Next.js', 'React.js', 'Puck Editor', 'TypeScript', 'Tailwind CSS'],
    color: 'bg-brutal-pink',
    impact: ['Real-time editing', 'Drag & Drop UI', 'Reusable components'],
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 bg-brutal-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            PROJECTS<span className="text-brutal-orange">.</span>
          </h2>
          <div className="w-32 h-2 bg-brutal-green mb-12" />
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`brutal-border brutal-shadow-lg bg-brutal-white overflow-hidden ${
                project.featured ? '' : ''
              }`}
            >
              <div className="grid md:grid-cols-3">
                {/* Project Visual */}
                <div
                  className={`${project.color} p-8 flex flex-col justify-between min-h-[200px] md:min-h-[300px]`}
                >
                  <div>
                    <span className="font-mono text-xs text-brutal-white/80 uppercase tracking-widest">
                      {project.date}
                    </span>
                    <h3 className="font-display font-black text-2xl md:text-3xl text-brutal-white uppercase mt-2 leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Impact Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.impact.map((imp) => (
                      <span
                        key={imp}
                        className="flex items-center gap-1 bg-brutal-black/20 text-brutal-white px-2 py-1 font-mono text-xs font-bold"
                      >
                        <Zap size={10} />
                        {imp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-base leading-relaxed mb-4">{project.longDescription}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="brutal-border px-3 py-1 font-mono text-xs font-bold bg-brutal-gray hover:bg-brutal-yellow transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
