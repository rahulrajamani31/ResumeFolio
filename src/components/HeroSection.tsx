import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  ArrowDown,
  FileText,
  Mail,
  Terminal,
  GitBranch,
  Container,
  Cloud,
  Activity,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const terminalLines = [
  { text: '$ kubectl get pods --namespace production', color: 'text-accent-light' },
  { text: 'NAME                          READY   STATUS    RESTARTS', color: 'text-muted' },
  { text: 'api-server-7d8f9c6b5-x2k4l   1/1     Running   0', color: 'text-green-400' },
  { text: 'web-client-5c4d8e7a3-m9n1p   1/1     Running   0', color: 'text-green-400' },
  { text: 'redis-cache-3b2a1c9d8-q5r7s  1/1     Running   0', color: 'text-green-400' },
  { text: '$ docker build -t app:latest . --push', color: 'text-accent-light' },
  { text: '[+] Building 24.3s (12/12) FINISHED', color: 'text-green-400' },
  { text: '$ az webapp deploy --name prod-api --slot staging', color: 'text-accent-light' },
  { text: '✓ Deployment successful — 99.9% uptime maintained', color: 'text-green-400' },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev >= terminalLines.length ? 0 : prev + 1));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-xl overflow-hidden glow-border w-full max-w-md">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-muted font-mono">deployment-pipeline</span>
      </div>
      <div className="p-4 font-mono text-xs leading-relaxed h-48 overflow-hidden">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={`${i}-${visibleLines > i ? 'visible' : 'hidden'}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`${line.color} mb-1`}
          >
            {line.text}
          </motion.div>
        ))}
        <span className="inline-block w-2 h-4 bg-accent animate-terminal-blink" />
      </div>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: any;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="glass rounded-xl p-3 glow-border glow-border-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-accent/10">
          <Icon size={16} className="text-accent" />
        </div>
        <div>
          <p className="text-lg font-bold text-surface">{value}</p>
          <p className="text-[10px] text-muted uppercase tracking-wider">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PipelineVisual() {
  return (
    <div className="hidden lg:flex items-center gap-3 mt-6">
      {[
        { icon: GitBranch, label: 'Commit' },
        { icon: Activity, label: 'CI/CD' },
        { icon: Container, label: 'Docker' },
        { icon: Cloud, label: 'Deploy' },
      ].map((item, i) => (
        <div key={item.label} className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 + i * 0.2 }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-10 h-10 rounded-lg glass glow-border flex items-center justify-center">
              <item.icon size={18} className="text-accent" />
            </div>
            <span className="text-[9px] text-muted font-mono">{item.label}</span>
          </motion.div>
          {i < 3 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4 + i * 0.2 }}
              className="w-8 h-px bg-gradient-to-r from-accent/60 to-accent/20"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const bgY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="section-container relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-muted font-mono">Available for opportunities</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-surface">Hi, I'm </span>
                <span className="text-gradient-accent">Rahul R</span>
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Software Engineer'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-md border border-accent/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-8"
              >
                Engineer with 2+ years of experience at Siemens Healthineers spanning full-stack
                internal tooling, automation testing, and DevOps practices.Actively deepening
                expertise in Docker, Kubernetes, and Azure Cloud with a long-term focus on DevOps
                and Cloud Engineering.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="/Resume.pdf"
                  download="Rahul_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
                >
                  <FileText size={16} />
                  Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 glass glow-border text-surface text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Contact Me
                </a>
              </motion.div>

              <PipelineVisual />
            </motion.div>
          </div>

          {/* Right Content - Terminal + Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <TerminalWindow />
            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              <MetricCard icon={Container} label="Containers" value="99.9%" delay={1.0} />
              <MetricCard icon={Activity} label="Pipelines" value="15+" delay={1.1} />
              <MetricCard icon={Cloud} label="Deployments" value="3+" delay={1.2} />
              <MetricCard icon={GitBranch} label="Commits" value="2K+" delay={1.3} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-muted/50" />
      </motion.div>
    </section>
  );
}
