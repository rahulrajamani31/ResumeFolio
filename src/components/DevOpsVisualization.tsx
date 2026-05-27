import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitCommit, Container, Cloud, CheckCircle2, Activity, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const pipelineStages = [
  {
    icon: GitCommit,
    label: 'Git Push',
    sublabel: 'main branch',
    color: 'from-gray-500 to-gray-400',
    detail: 'git push origin main',
  },
  {
    icon: Activity,
    label: 'CI Pipeline',
    sublabel: 'Build & Test',
    color: 'from-blue-500 to-cyan-400',
    detail: 'npm test && npm run build',
  },
  {
    icon: Container,
    label: 'Docker Build',
    sublabel: 'Image Created',
    color: 'from-purple-500 to-violet-400',
    detail: 'docker build -t app:v2.1.0 .',
  },
  {
    icon: Zap,
    label: 'K8s Deploy',
    sublabel: 'Rolling Update',
    color: 'from-green-500 to-emerald-400',
    detail: 'kubectl rollout status deploy/app',
  },
  {
    icon: Cloud,
    label: 'Azure Cloud',
    sublabel: 'Live in Production',
    color: 'from-orange-500 to-amber-400',
    detail: '✓ Healthy — 99.9% uptime',
  },
];

export default function DevOpsVisualization() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeStage, setActiveStage] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev >= pipelineStages.length - 1 ? -1 : prev + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-sm">05. DevOps Pipeline</span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface">
            Continuous Delivery Workflow
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">
            From code commit to production deployment — fully automated.
          </p>
        </motion.div>

        {/* Pipeline Visualization */}
        <div className="relative">
          {/* Desktop Pipeline */}
          <div className="hidden lg:flex items-start justify-between relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-[10%] right-[10%] h-px">
              <div className="w-full h-full bg-dark-300 relative">
                <motion.div
                  animate={{ width: activeStage >= 0 ? `${((activeStage + 1) / pipelineStages.length) * 100}%` : '0%' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accent-light"
                />
              </div>
            </div>

            {pipelineStages.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center relative z-10 w-1/5"
              >
                {/* Node */}
                <div className={`relative w-24 h-24 rounded-2xl glass flex items-center justify-center transition-all duration-500 ${
                  activeStage >= i
                    ? 'glow-border shadow-lg shadow-accent/10 scale-105'
                    : 'border border-white/5'
                }`}>
                  {activeStage >= i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle2 size={12} className="text-dark" />
                    </motion.div>
                  )}
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stage.color} ${
                    activeStage >= i ? 'opacity-100' : 'opacity-40'
                  } transition-opacity duration-500`}>
                    <stage.icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Label */}
                <h4 className={`mt-4 text-sm font-semibold transition-colors duration-500 ${
                  activeStage >= i ? 'text-surface' : 'text-muted'
                }`}>
                  {stage.label}
                </h4>
                <p className="text-[10px] text-muted mt-0.5">{stage.sublabel}</p>

                {/* Command */}
                <motion.div
                  animate={{ opacity: activeStage === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 px-3 py-1.5 bg-dark-200 rounded-lg border border-white/5"
                >
                  <code className="text-[10px] font-mono text-accent">{stage.detail}</code>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pipeline */}
          <div className="lg:hidden space-y-4">
            {pipelineStages.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="relative pl-10"
              >
                {/* Vertical line */}
                {i < pipelineStages.length - 1 && (
                  <div className={`absolute left-4 top-10 bottom-0 w-px transition-colors duration-500 ${
                    activeStage >= i ? 'bg-accent/40' : 'bg-dark-300'
                  }`} />
                )}
                {/* Dot */}
                <div className={`absolute left-2.5 top-4 w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  activeStage >= i
                    ? 'bg-accent border-accent/40 shadow-md shadow-accent/30'
                    : 'bg-dark-200 border-dark-300'
                }`} />

                <div className={`glass rounded-xl p-4 transition-all duration-500 ${
                  activeStage >= i ? 'glow-border' : 'border border-white/5'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${stage.color} ${
                      activeStage >= i ? 'opacity-100' : 'opacity-40'
                    } transition-opacity`}>
                      <stage.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-surface">{stage.label}</h4>
                      <p className="text-[10px] text-muted">{stage.sublabel}</p>
                    </div>
                    {activeStage >= i && (
                      <CheckCircle2 size={16} className="text-green-400 ml-auto" />
                    )}
                  </div>
                  <code className="block mt-2 text-[10px] font-mono text-accent/80">{stage.detail}</code>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
