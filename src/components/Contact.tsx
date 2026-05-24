"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brutal-dark text-brutal-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4 text-brutal-white">
            LET&apos;S TALK<span className="text-brutal-green">.</span>
          </h2>
          <div className="w-32 h-2 bg-brutal-yellow mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg leading-relaxed text-brutal-gray">
              I&apos;m always open to discussing new opportunities in DevOps Engineering, Cloud
              Technologies, or Full-Stack Development. Let&apos;s connect!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:rahulrajamani310702@gmail.com"
                className="flex items-center gap-4 brutal-border border-brutal-gray/30 p-4 bg-brutal-black/50 hover:bg-brutal-blue/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-brutal-blue brutal-border border-brutal-gray/30 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-brutal-gray">
                    Email
                  </p>
                  <p className="font-bold group-hover:text-brutal-blue transition-colors">
                    rahulrajamani310702@gmail.com
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>

              <a
                href="tel:+919600942104"
                className="flex items-center gap-4 brutal-border border-brutal-gray/30 p-4 bg-brutal-black/50 hover:bg-brutal-green/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-brutal-green brutal-border border-brutal-gray/30 flex items-center justify-center text-brutal-black">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-brutal-gray">
                    Phone
                  </p>
                  <p className="font-bold group-hover:text-brutal-green transition-colors">
                    +91 9600942104
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>

              <div className="flex items-center gap-4 brutal-border border-brutal-gray/30 p-4 bg-brutal-black/50">
                <div className="w-12 h-12 bg-brutal-pink brutal-border border-brutal-gray/30 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-brutal-gray">
                    Location
                  </p>
                  <p className="font-bold">Bengaluru, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/rahulrajamani31"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border border-brutal-gray/30 p-4 bg-brutal-black/50 hover:bg-brutal-white hover:text-brutal-black transition-all flex items-center gap-3 font-mono text-sm font-bold"
              >
                <GitHubIcon size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rahul-rajamani"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border border-brutal-gray/30 p-4 bg-brutal-black/50 hover:bg-brutal-blue hover:text-brutal-white transition-all flex items-center gap-3 font-mono text-sm font-bold"
              >
                <LinkedInIcon size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="brutal-border border-brutal-gray/30 bg-brutal-black/50 p-8 space-y-6"
            >
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-brutal-gray block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full brutal-border border-brutal-gray/30 bg-brutal-dark p-3 font-mono text-sm text-brutal-white focus:border-brutal-yellow focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-brutal-gray block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full brutal-border border-brutal-gray/30 bg-brutal-dark p-3 font-mono text-sm text-brutal-white focus:border-brutal-yellow focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-brutal-gray block mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full brutal-border border-brutal-gray/30 bg-brutal-dark p-3 font-mono text-sm text-brutal-white focus:border-brutal-yellow focus:outline-none transition-colors resize-none"
                  placeholder="Let's build something together..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className={`w-full brutal-btn flex items-center justify-center gap-2 ${
                  formStatus === "sent"
                    ? "bg-brutal-green text-brutal-black"
                    : "bg-brutal-yellow text-brutal-black"
                }`}
              >
                {formStatus === "idle" && (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
                {formStatus === "sending" && "Sending..."}
                {formStatus === "sent" && "Message Sent!"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
