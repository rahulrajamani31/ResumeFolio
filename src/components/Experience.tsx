"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Siemens Healthineers",
    location: "Bengaluru",
    date: "Feb 2024 – Present",
    color: "bg-brutal-blue",
    highlights: [
      {
        text: 'Built a centralized MERN stack pipeline management platform used by 100+ daily users, enabling execution, scheduling, monitoring, and PDF report downloads — replacing direct Azure DevOps portal access.',
        tags: ["MERN", "Azure DevOps", "Platform"],
      },
      {
        text: "Implemented YAML-based CI/CD pipelines in Azure DevOps covering build, test, and release stages; reduced manual deployment effort by ~80%.",
        tags: ["CI/CD", "YAML", "Azure"],
      },
      {
        text: "Automated 150+ regression and smoke test cases for complex CPQ modules using Java and Selenium; integrated test suites into pipelines for continuous execution.",
        tags: ["Java", "Selenium", "Automation"],
      },
      {
        text: "Developed automation analytics dashboards comparing manual vs automated effort, helping teams track productivity improvements and time savings.",
        tags: ["Analytics", "React", "Dashboard"],
      },
      {
        text: "Designed cloud hosting architecture for the internal platform, including infrastructure planning and Azure deployment strategy.",
        tags: ["Cloud", "Architecture", "Azure"],
      },
    ],
  },
  {
    title: "AI Imaging Intern",
    company: "L&T Technology Services",
    location: "Coimbatore",
    date: "Jul 2022 – Nov 2022",
    color: "bg-brutal-pink",
    highlights: [
      {
        text: "Contributed to an AI-based liver segmentation and tumor detection solution using Machine Learning with 1000+ medical imaging DICOM datasets.",
        tags: ["AI/ML", "Medical Imaging", "DICOM"],
      },
      {
        text: "Received formal appreciation from the Imaging COE Specialist team for technical contributions to the project.",
        tags: ["Recognition", "Healthcare AI"],
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-brutal-gray relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            EXPERIENCE<span className="text-brutal-yellow">.</span>
          </h2>
          <div className="w-32 h-2 bg-brutal-pink mb-12" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-brutal-black" />

          <div className="space-y-12">
            {experiences.map((exp, expIndex) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: expIndex * 0.2 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-3 md:left-5 top-2 w-7 h-7 md:w-7 md:h-7 ${exp.color} brutal-border flex items-center justify-center`}
                >
                  <Briefcase size={14} className="text-brutal-white" />
                </div>

                {/* Experience Card */}
                <div className="brutal-border brutal-shadow-lg bg-brutal-white overflow-hidden">
                  {/* Header */}
                  <div className={`${exp.color} text-brutal-white px-6 py-4`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="font-display font-black text-xl md:text-2xl uppercase">
                          {exp.title}
                        </h3>
                        <p className="font-mono text-sm opacity-90">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="font-mono text-sm font-bold bg-brutal-black/20 px-3 py-1 self-start md:self-auto">
                        {exp.date}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="p-6 space-y-4">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={hIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: expIndex * 0.2 + hIndex * 0.1,
                        }}
                        className="flex gap-3 group"
                      >
                        <ChevronRight
                          size={18}
                          className="text-brutal-blue flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                        />
                        <div>
                          <p className="text-sm leading-relaxed">{highlight.text}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {highlight.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs font-mono font-bold bg-brutal-gray brutal-border border-1"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 brutal-border brutal-shadow bg-brutal-white p-8"
        >
          <h3 className="font-display font-black text-2xl uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-brutal-purple brutal-border flex items-center justify-center">
              <span className="text-brutal-white text-sm">🎓</span>
            </span>
            Education
          </h3>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-lg">Sri Ramakrishna Engineering College</h4>
              <p className="font-mono text-sm text-brutal-dark">
                B.E – Computer Science Engineering
              </p>
            </div>
            <div className="flex gap-3">
              <span className="brutal-border bg-brutal-yellow px-3 py-1 font-mono text-sm font-bold">
                2020 – 2024
              </span>
              <span className="brutal-border bg-brutal-green px-3 py-1 font-mono text-sm font-bold">
                CGPA 8.9
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
