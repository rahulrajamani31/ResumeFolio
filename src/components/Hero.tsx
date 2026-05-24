'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './icons';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-brutal-white"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 md:right-32 w-24 h-24 md:w-40 md:h-40 brutal-border bg-brutal-yellow opacity-60"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-32 left-10 md:left-20 w-16 h-16 md:w-28 md:h-28 brutal-border bg-brutal-pink opacity-40 rounded-full"
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 left-1/4 w-12 h-12 brutal-border bg-brutal-blue opacity-30"
        style={{ transform: 'rotate(45deg)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting Tag */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="brutal-border brutal-shadow-sm bg-brutal-green px-4 py-2 font-mono text-sm font-bold uppercase tracking-widest">
              Hello, World! I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-6">
            <span className="block">RAHUL</span>
            <span className="block text-stroke">RAJAMANI</span>
          </h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <span className="brutal-border bg-brutal-yellow px-4 py-2 font-mono text-sm font-bold">
              SOFTWARE ENGINEER
            </span>
            <span className="brutal-border bg-brutal-blue text-brutal-white px-4 py-2 font-mono text-sm font-bold">
              DEVOPS ENTHUSIAST
            </span>
            <span className="brutal-border bg-brutal-pink text-brutal-white px-4 py-2 font-mono text-sm font-bold">
              FULL-STACK DEV
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="max-w-2xl text-lg md:text-xl font-body leading-relaxed mb-10 text-brutal-dark"
          >
            Software Engineer at{' '}
            <span className="font-bold underline decoration-brutal-yellow decoration-4 underline-offset-4">
              Siemens Healthineers
            </span>{' '}
            — shipping real tools, cutting real effort, heading toward{' '}
            <span className="font-bold bg-brutal-blue text-brutal-white px-1">DevOps & Cloud</span>.
          </motion.p>

          {/* CTA Buttons & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="brutal-btn bg-brutal-yellow">
              View Projects
            </a>
            <a href="#contact" className="brutal-btn bg-brutal-white">
              Get in Touch
            </a>

            <div className="flex items-center gap-3 ml-4">
              <a
                href="https://github.com/rahulrajamani31"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border p-2 hover:bg-brutal-dark hover:text-brutal-white transition-colors"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rahul-rajamani"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border p-2 hover:bg-brutal-blue hover:text-brutal-white transition-colors"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href="mailto:rahulrajamani310702@gmail.com"
                className="brutal-border p-2 hover:bg-brutal-pink hover:text-brutal-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 font-mono text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
        >
          <span>Scroll</span>
          <ArrowDown size={16} />
        </a>
      </motion.div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-brutal-black text-brutal-white py-3 overflow-hidden">
        <div className="marquee whitespace-nowrap">
          <span className="font-mono text-sm tracking-widest">
            AUTOMATION ● DEVOPS ● CLOUD ● MERN STACK ● CI/CD ● DOCKER ● KUBERNETES ● AZURE ● JAVA ●
            SELENIUM ● REACT ● NODE.JS ● AUTOMATION ● DEVOPS ● CLOUD ● MERN STACK ● CI/CD ● DOCKER ●
            KUBERNETES ● AZURE ● JAVA ● SELENIUM ● REACT ● NODE.JS ●
          </span>
        </div>
      </div>
    </section>
  );
}
