"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "DevOps & Cloud",
    color: "bg-brutal-blue",
    textColor: "text-brutal-white",
    skills: [
      "Azure DevOps",
      "CI/CD Pipelines",
      "Docker",
      "Kubernetes",
      "Azure Cloud",
      "YAML",
      "Linux",
      "Git / GitHub",
    ],
  },
  {
    title: "Full-Stack",
    color: "bg-brutal-pink",
    textColor: "text-brutal-white",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Automation",
    color: "bg-brutal-yellow",
    textColor: "text-brutal-black",
    skills: [
      "Java",
      "Selenium",
      "TestNG",
      "Azure Pipelines",
      "Regression Testing",
      "Smoke Testing",
      "REST APIs",
      "Postman",
    ],
  },
  {
    title: "Other",
    color: "bg-brutal-green",
    textColor: "text-brutal-black",
    skills: [
      "Python",
      "Networking",
      "Infrastructure Planning",
      "Deployment Strategy",
      "Containerization",
      "Release Workflows",
      "Analytics",
      "PDF Reporting",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-brutal-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            SKILLS<span className="text-brutal-pink">.</span>
          </h2>
          <div className="w-32 h-2 bg-brutal-blue mb-12" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              className="brutal-border brutal-shadow bg-brutal-white overflow-hidden"
            >
              {/* Category Header */}
              <div
                className={`${category.color} ${category.textColor} px-6 py-4 brutal-border border-t-0 border-l-0 border-r-0`}
              >
                <h3 className="font-display font-bold text-xl uppercase tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="p-6 flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.15 + skillIndex * 0.05,
                    }}
                    className="brutal-border px-4 py-2 font-mono text-sm font-bold hover:bg-brutal-yellow hover:-translate-y-1 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 brutal-border brutal-shadow bg-brutal-dark text-brutal-white p-8"
        >
          <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-6 text-brutal-yellow">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "AZ-900: Azure Fundamentals",
                org: "Microsoft",
                status: "In Progress",
              },
              {
                name: "Problem Solving",
                org: "HackerRank",
                status: "Completed",
              },
              {
                name: "Introduction to Networking",
                org: "CISCO",
                status: "Completed",
              },
            ].map((cert) => (
              <div
                key={cert.name}
                className="brutal-border border-brutal-gray/30 p-4 bg-brutal-black/50"
              >
                <p className="font-bold text-sm mb-1">{cert.name}</p>
                <p className="font-mono text-xs text-brutal-gray">{cert.org}</p>
                <span
                  className={`inline-block mt-2 px-2 py-1 font-mono text-xs font-bold brutal-border ${
                    cert.status === "In Progress"
                      ? "bg-brutal-orange text-brutal-black"
                      : "bg-brutal-green text-brutal-black"
                  }`}
                >
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
