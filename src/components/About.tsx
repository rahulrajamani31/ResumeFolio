'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-brutal-gray relative" ref={ref}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">
            ABOUT<span className="text-brutal-blue">.</span>
          </h2>
          <div className="w-32 h-2 bg-brutal-yellow mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="brutal-border brutal-shadow-lg bg-brutal-white p-8 relative">
              <div className="w-full aspect-square bg-brutal-dark brutal-border mb-6 relative overflow-hidden">
                <Image
                  src="/Rahul Casual.jfif"
                  alt="Rahul R"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 right-3 bg-brutal-green px-2 py-1 font-mono text-xs font-bold brutal-border">
                  2+ YRS EXP
                </div>
              </div>

              <h3 className="font-display font-black text-2xl mb-2">Rahul R</h3>
              <p className="font-mono text-sm text-brutal-dark mb-4">Software Engineer</p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 font-mono text-sm">
                  <MapPin size={16} className="text-brutal-pink" />
                  <span>Bengaluru, India</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <Calendar size={16} className="text-brutal-blue" />
                  <span>Feb 2024 – Present</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <GraduationCap size={16} className="text-brutal-purple" />
                  <span>B.E – CSE | CGPA 8.9</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <Award size={16} className="text-brutal-orange" />
                  <span>AZ-900 (In Progress)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 space-y-6"
          >
            <div className="brutal-border bg-brutal-white p-6 border-l-8 border-l-brutal-blue">
              <p className="text-lg leading-relaxed">
                Engineer with <strong>2+ years of experience</strong> at Siemens Healthineers
                spanning full-stack internal tooling, automation testing, and DevOps practices. I
                started as an Automation Test Engineer in February 2024, working on enterprise-level
                application automation using <strong>Java, Selenium, and Azure DevOps</strong>.
              </p>
            </div>

            <div className="brutal-border bg-brutal-white p-6 border-l-8 border-l-brutal-yellow">
              <p className="text-lg leading-relaxed">
                I identified operational challenges within the organization&apos;s Azure DevOps
                environment and independently designed a <strong>MERN stack application</strong> for
                centralized pipeline management — now serving <strong>100+ daily users</strong>{' '}
                across multiple teams. The platform manages 30+ pipelines and significantly improved
                operational efficiency.
              </p>
            </div>

            <div className="brutal-border bg-brutal-white p-6 border-l-8 border-l-brutal-pink">
              <p className="text-lg leading-relaxed">
                My long-term focus is aligned toward{' '}
                <strong>DevOps Engineering, Cloud Technologies, Infrastructure Automation</strong>,
                and scalable deployment architecture. I&apos;m continuously strengthening expertise
                in Docker, Kubernetes, Azure Cloud, CI/CD pipelines, and Linux systems.
              </p>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { number: '150+', label: 'Test Cases' },
                { number: '100+', label: 'Daily Users' },
                { number: '30+', label: 'Pipelines' },
                { number: '~90%', label: 'Effort Reduced' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  className="brutal-border bg-brutal-yellow p-4 text-center"
                >
                  <div className="font-display font-black text-2xl md:text-3xl">{stat.number}</div>
                  <div className="font-mono text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
