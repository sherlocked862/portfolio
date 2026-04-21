'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Google Recon',
    subtitle: 'Payment Transaction Reconciliation Platform',
    description:
      'Built Python (Flask) microservices to reconcile high-volume payment transactions across NPCI, CBS, and switch-header data sources using cycle-based matching logic, serving as a critical control for payment integrity.',
    highlights: [
      'Integrated Apache Kafka for event streaming between ingestion and reconciliation services, enabling near real-time validation of payment flows and decoupled scaling of consumers.',
      'Persisted reconciliation state in MySQL and PostgreSQL and leveraged Redis caching for low-latency lookups of frequently-accessed reference data, keeping P95 latency within SLAs.',
      'Reduced manual validation effort by 75% and cut transaction mismatch errors by 20%, improving operational efficiency and reliability for large-scale payment processing.',
    ],
    metrics: [
      { label: 'Manual Effort Reduced', value: '75%' },
      { label: 'Error Reduction', value: '20%' },
    ],
    tags: ['Python', 'Flask', 'Apache Kafka', 'MySQL', 'PostgreSQL', 'Redis'],
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(0, 113, 227, 0.2)',
    org: 'PwC India',
  },
  {
    title: 'FRM Platform',
    subtitle: 'Fraud and Risk Management — Deployment & Optimization',
    description:
      'Contributed Scala backend services to a Fraud and Risk Management platform deployed across a hybrid on-premises and AWS cloud environment serving real-time risk scoring.',
    highlights: [
      'Implemented container orchestration using Kubernetes on AWS EKS and Fargate to optimize infrastructure utilization, enable auto-scaling, and improve fault tolerance.',
      'Built Jenkins CI/CD pipelines for rapid, repeatable releases; collaborated with security teams on data protection and compliance controls.',
      'Tuned system monitoring to reduce mean time to detection and authored technical documentation across backend, infrastructure, and security functions.',
    ],
    metrics: [
      { label: 'Release Downtime Reduced', value: '40%' },
      { label: 'Security Coverage', value: '+35%' },
    ],
    tags: ['Scala', 'Kubernetes', 'AWS EKS', 'AWS Fargate', 'Jenkins', 'Docker'],
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(191, 90, 242, 0.2)',
    org: 'PwC India',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 section-padding bg-apple-dark/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest text-apple-purple uppercase mb-4"
        >
          Key Projects
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(32px,5vw,72px)] font-bold text-white leading-tight mb-16"
        >
          Things I&apos;ve{' '}
          <span className="gradient-text">built and shipped.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-8 md:p-10 flex flex-col group hover:scale-[1.01] transition-transform duration-500"
              style={{ boxShadow: `0 0 80px ${project.glow}` }}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-apple-gray">{project.org}</span>
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${project.color} opacity-80`} />
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}>
                  {project.title}
                </h3>
                <p className="text-white font-medium text-sm">{project.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-apple-gray text-sm leading-relaxed mb-6">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-3 mb-8 flex-1">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-apple-gray text-sm leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="bg-white/5 rounded-xl p-4">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {metric.value}
                    </div>
                    <div className="text-apple-gray text-xs mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-apple-gray"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}