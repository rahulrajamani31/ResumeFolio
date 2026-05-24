'use client';

import { Mail, Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './icons';

export default function Footer() {
  return (
    <footer className="bg-brutal-black text-brutal-white border-t-4 border-brutal-yellow">
      {/* Top Marquee */}
      <div className="overflow-hidden py-4 bg-brutal-yellow text-brutal-black">
        <div className="marquee-reverse whitespace-nowrap">
          <span className="font-display font-black text-2xl uppercase tracking-tighter">
            AVAILABLE FOR OPPORTUNITIES ● DEVOPS ● CLOUD ENGINEERING ● FULL-STACK ● AUTOMATION ●
            AVAILABLE FOR OPPORTUNITIES ● DEVOPS ● CLOUD ENGINEERING ● FULL-STACK ● AUTOMATION ●
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <h3 className="font-display font-black text-3xl tracking-tighter">
              RAHUL<span className="text-brutal-blue">.</span>R
            </h3>
            <p className="font-mono text-xs text-brutal-gray mt-2 uppercase tracking-wider">
              Software Engineer & DevOps Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-wider text-brutal-gray hover:text-brutal-yellow transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3 justify-end">
            <a
              href="https://github.com/rahulrajamani31"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border border-brutal-gray/30 p-3 hover:bg-brutal-white hover:text-brutal-black transition-all"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/rahul-rajamani"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border border-brutal-gray/30 p-3 hover:bg-brutal-blue transition-all"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="mailto:rahulrajamani310702@gmail.com"
              className="brutal-border border-brutal-gray/30 p-3 hover:bg-brutal-pink transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-brutal-gray/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-brutal-gray flex items-center gap-1">
            Built with <Heart size={12} className="text-brutal-pink" />
          </p>
          <p className="font-mono text-xs text-brutal-gray">
            © {new Date().getFullYear()} Rahul R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
