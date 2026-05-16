'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'

type Project = {
  id: string
  title: string
  subtitle: string
  org: 'PwC' | 'Aakash'
  category: string
  description: string
  highlights: string[]
  metrics: { label: string; value: string }[]
  tags: string[]
  color: string
  glow: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 'frm-product',
    title: 'FRM Product',
    subtitle: 'Real-time Fraud Risk Management for Banking Clients',
    org: 'PwC',
    category: 'Fintech · Banking',
    description:
      'A real-time fraud-screening product deployed at 3 Indian banking clients. Monitors every channel — UPI, NEFT, RTGS — and applies full rules/ML evaluation before approving each transaction.',
    highlights: [
      'Scala backend on Kubernetes (AWS EKS + on-prem RHEL bare-metal) with Istio service mesh for inter-service routing.',
      'PostgreSQL for transactional/relational data, Cassandra for high-write event/fraud-score storage, Kafka for transaction event flow.',
      'Sustained 100+ TPS of fraud-screened throughput per client environment at <60% utilization — ~150 TPS headroom without re-tuning.',
      'Generated ₹10 crore+ (~$1.2M) in firm revenue across the 3 client deployments.',
    ],
    metrics: [
      { label: 'Banking Clients', value: '3' },
      { label: 'Sustained TPS', value: '100+' },
      { label: 'Headroom TPS', value: '~150' },
      { label: 'Firm Revenue', value: '₹10cr+' },
    ],
    tags: ['Scala', 'Kafka', 'PostgreSQL', 'Cassandra', 'Istio', 'Kubernetes', 'AWS EKS', 'RHEL'],
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(191, 90, 242, 0.20)',
    featured: true,
  },
  {
    id: 'report-card',
    title: 'Report Card System',
    subtitle: 'End-to-end personalized student report generation',
    org: 'Aakash',
    category: 'Ed-Tech · Pipeline',
    description:
      'A daily-batch pipeline generating personalized performance reports — ranks, insights, visual graphs — and delivering them via web and email to 250,000+ students. Eliminated manual report card collection, generation, and routing entirely.',
    highlights: [
      'EventBridge-scheduled sync of offline ↔ online test data, computed payloads persisted in MySQL.',
      'Payloads pushed to SQS → Lambda consumers render PDFs via headless Chromium.',
      'Generated PDFs uploaded to S3, served to students/parents via CloudFront, and dispatched via automatic email.',
      'Replaced manual report card generation entirely across the platform.',
    ],
    metrics: [
      { label: 'Students Served', value: '250K+' },
      { label: 'Manual Work', value: 'Eliminated' },
    ],
    tags: ['Java', 'Spring Boot', 'AWS Lambda', 'SQS', 'EventBridge', 'S3', 'CloudFront', 'MySQL', 'Headless Chromium'],
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(0, 113, 227, 0.20)',
    featured: true,
  },
  {
    id: 'dr-system',
    title: 'Disaster Recovery System',
    subtitle: 'Active-passive DR for FRM with ≤15 min RTO',
    org: 'PwC',
    category: 'Fintech · Infrastructure',
    description:
      'Active-passive disaster recovery system for the FRM product. Production fails over to a DR cluster within 15 minutes of outage, with T-1 data synced to standby. Sold as a standalone deliverable.',
    highlights: [
      'RTO ≤ 15 minutes — automatic traffic redirection to DR on production outage.',
      'RPO ≤ 24 hours — batched daily sync of production data to standby clusters.',
      'Single deliverable generated ₹3 crore (~$360K) in client revenue.',
    ],
    metrics: [
      { label: 'RTO', value: '≤15 min' },
      { label: 'RPO', value: '≤24h' },
      { label: 'Standalone Revenue', value: '₹3cr' },
    ],
    tags: ['Kubernetes', 'AWS', 'Failover', 'Active-Passive', 'Batched Sync'],
    color: 'from-rose-500 to-red-500',
    glow: 'rgba(244, 63, 94, 0.18)',
    featured: true,
  },
  {
    id: 'frm-deploy',
    title: 'FRM Deployment & Air-Gapped Infra',
    subtitle: 'Multi-environment K8s with offline bank deployments',
    org: 'PwC',
    category: 'Fintech · DevOps',
    description:
      'Full delivery pipeline for the FRM product across heterogeneous environments — AWS EKS (cloud) and on-prem RHEL bare-metal Kubernetes clusters. Solved the air-gapped deployment problem for bank environments with zero internet access.',
    highlights: [
      'Authored Dockerfiles, Helm charts, and Ansible playbooks for image builds, registry pushes, and rolling zero-downtime releases.',
      'Designed an internal private container registry inside each bank network, mirrored all product dependencies, and configured network/firewall rules for fully offline deployments.',
      'Defined hardware/capacity sizing per client based on projected transaction load and concurrent users.',
      'Differentiator: most engineers at SDE-1/2 level have never owned an air-gapped production K8s deployment.',
    ],
    metrics: [
      { label: 'Deploy Environments', value: 'Cloud + On-Prem' },
      { label: 'Bank Networks', value: 'Air-Gapped' },
      { label: 'Release Downtime', value: 'Zero' },
    ],
    tags: ['Kubernetes', 'Docker', 'Helm', 'Ansible', 'AWS EKS', 'RHEL Bare-metal', 'Private Registry', 'Jenkins'],
    color: 'from-yellow-500 to-orange-500',
    glow: 'rgba(234, 179, 8, 0.18)',
    featured: true,
  },
  {
    id: 'google-recon',
    title: 'Google Recon',
    subtitle: 'Payment Reconciliation Platform (Internal PwC Tool)',
    org: 'PwC',
    category: 'Fintech · Fullstack',
    description:
      'End-to-end payment validation and reconciliation system used internally by PwC for transaction-level investigation. Pipelined millions of daily transactions sourced from CBS (Core Banking System).',
    highlights: [
      'Python (Django + Flask) backend with custom business logic for transaction validation and flagging.',
      'Next.js frontend with interactive charts and dashboards letting auditors investigate transactions, flag anomalies, and trace reconciliation outcomes.',
      'End-to-end ownership — backend logic, frontend UI, and data pipeline integration with CBS.',
    ],
    metrics: [
      { label: 'Daily Transactions', value: 'Millions' },
      { label: 'Ownership', value: 'Fullstack' },
    ],
    tags: ['Python', 'Django', 'Flask', 'Next.js', 'React', 'CBS Integration'],
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(50, 173, 230, 0.18)',
  },
  {
    id: 'data-migration',
    title: 'Data Migration Pipeline',
    subtitle: 'Bank legacy → FRM Kubernetes environment',
    org: 'PwC',
    category: 'Fintech · Data',
    description:
      'Pipeline to migrate banks\' existing user datasets into the FRM product environment — 10M+ end-user records, with idempotent bulk-load and checkpointing for safe re-runs.',
    highlights: [
      'Batched extraction from legacy bank infrastructure → automated CSV generation → validation.',
      'Idempotent bulk-load into the FRM Kubernetes environment with checkpointing for safe re-runs.',
      'FRM portal held ~1 crore (10M) users\' data total across deployments.',
    ],
    metrics: [
      { label: 'Records Migrated', value: '10M+' },
      { label: 'Re-runs', value: 'Idempotent' },
    ],
    tags: ['Python', 'Batched ETL', 'CSV', 'Validation', 'Checkpointing', 'Kubernetes'],
    color: 'from-orange-500 to-amber-500',
    glow: 'rgba(249, 115, 22, 0.18)',
  },
  {
    id: 'concept-kundali',
    title: 'Concept Kundali',
    subtitle: 'Performance Analytics & Weak-Topic Engine',
    org: 'Aakash',
    category: 'Ed-Tech · Analytics',
    description:
      'Personalized preparation guidance system that analyzes each student\'s historical performance — attempts, accuracy, difficulty — and produces topic-level weakness profiles driving targeted practice suggestions.',
    highlights: [
      'Data sources: Elasticsearch + MySQL — historical attempts, accuracy, difficulty levels.',
      'Output: topic-level weakness profile per student → targeted practice suggestions.',
      'Scale: 250,000+ active learners.',
    ],
    metrics: [
      { label: 'Active Learners', value: '250K+' },
      { label: 'Precision', value: 'Topic-level' },
    ],
    tags: ['Java', 'Spring Boot', 'Elasticsearch', 'MySQL', 'Analytics'],
    color: 'from-blue-500 to-purple-500',
    glow: 'rgba(99, 102, 241, 0.18)',
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    subtitle: 'Topic-wise visual cheatsheets with progress tracking',
    org: 'Aakash',
    category: 'Ed-Tech · Feature',
    description:
      'Custom topic-wise visual cheatsheets delivered as images, with per-student progress tracking maintained across sessions. Owned end-to-end: schema, Spring Boot APIs, Redis caching, release.',
    highlights: [
      'Schema design, Spring Boot APIs, Redis-backed per-student progress state.',
      'Per-student progress maintained across sessions.',
      'Combined with Report Card + Concept Kundali, drove ₹5 crore (~$600K) in student revenue.',
    ],
    metrics: [
      { label: 'Ownership', value: 'End-to-End' },
      { label: 'Combined Revenue', value: '₹5cr' },
    ],
    tags: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'REST APIs'],
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.18)',
  },
  {
    id: 'practice-framework',
    title: 'Practice Module Framework',
    subtitle: 'Reusable Spring Boot framework for 5 practice formats',
    org: 'Aakash',
    category: 'Ed-Tech · Platform',
    description:
      'Reusable Spring Boot framework supporting multiple practice formats — topic-wise, full-length, adaptive, sectional, custom. Abstraction layer over the underlying question/test infrastructure so new clients can be onboarded with minimal code changes.',
    highlights: [
      'Supports topic-wise, full-length, adaptive, sectional, and custom practice formats.',
      'Abstraction over the question/test infrastructure — new clients onboard with minimal code.',
      'Designed for reusability and extensibility across the platform.',
    ],
    metrics: [
      { label: 'Practice Formats', value: '5' },
      { label: 'Onboarding', value: 'Low-code' },
    ],
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Reusable Framework'],
    color: 'from-violet-500 to-purple-500',
    glow: 'rgba(139, 92, 246, 0.18)',
  },
  {
    id: 'realtime-analytics',
    title: 'Real-Time Analytics Pipeline',
    subtitle: 'Elasticsearch-backed event ingestion for personalization',
    org: 'Aakash',
    category: 'Ed-Tech · Analytics',
    description:
      'Indexes the question bank and ingests student response events as they happen, surfacing accuracy and difficulty-level insights that feed personalized practice recommendations.',
    highlights: [
      'Live ingestion of student response events into Elasticsearch.',
      'Surfaces accuracy and difficulty-level insights in near real-time.',
      'Feeds Concept Kundali and personalized practice recommendations.',
    ],
    metrics: [
      { label: 'Latency', value: 'Near real-time' },
      { label: 'Indexed', value: 'Question Bank' },
    ],
    tags: ['Java', 'Spring Boot', 'Elasticsearch', 'Event Streaming'],
    color: 'from-cyan-500 to-teal-500',
    glow: 'rgba(20, 184, 166, 0.18)',
  },
  {
    id: 'notifications',
    title: 'Notification Platform',
    subtitle: 'Deeplink Mobile Push Notifications',
    org: 'Aakash',
    category: 'Ed-Tech · Platform',
    description:
      'Extended the platform\'s notification backend to deliver deeplink-enabled mobile push notifications — landing users directly on the relevant in-app destination instead of the home screen.',
    highlights: [
      'Stack: AWS Lambda + EventBridge + SQS + S3 + MySQL.',
      'Deeplinks route users into live classes, test results, and announcements — not the app home.',
      'Improves engagement on critical, time-sensitive communications.',
    ],
    metrics: [
      { label: 'Routing', value: 'Deeplinked' },
      { label: 'Engagement', value: 'Improved' },
    ],
    tags: ['AWS Lambda', 'EventBridge', 'SQS', 'S3', 'MySQL', 'Push Notifications'],
    color: 'from-green-500 to-emerald-500',
    glow: 'rgba(34, 197, 94, 0.18)',
  },
]

type Filter = 'All' | 'PwC' | 'Aakash'

const filters: { label: Filter; count: number; color: string }[] = [
  { label: 'All', count: projects.length, color: 'from-blue-500 via-purple-500 to-pink-500' },
  { label: 'PwC', count: projects.filter((p) => p.org === 'PwC').length, color: 'from-purple-500 to-pink-500' },
  { label: 'Aakash', count: projects.filter((p) => p.org === 'Aakash').length, color: 'from-blue-500 to-cyan-500' },
]

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.org === filter)),
    [filter],
  )

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
          className="text-[clamp(32px,5vw,72px)] font-bold text-white leading-tight mb-6"
        >
          Things I&apos;ve{' '}
          <span className="gradient-text">built and shipped.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-apple-gray text-lg max-w-2xl mb-10 leading-relaxed"
        >
          A cross-section of production work spanning fraud-screening at banking scale, payment
          reconciliation, ed-tech feature ownership, and the infrastructure underneath it all.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => {
            const active = filter === f.label
            return (
              <button
                key={f.label}
                onClick={() => setFilter(f.label)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  active
                    ? 'border-white/20 text-white'
                    : 'border-white/10 text-apple-gray hover:text-white hover:border-white/20'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="projectFilterPill"
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${f.color} opacity-20`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {f.label}
                  <span className="ml-2 text-xs text-apple-gray">{f.count}</span>
                </span>
              </button>
            )
          })}
        </motion.div>

        <motion.div layout className="grid lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-3xl p-8 md:p-10 flex flex-col group hover:scale-[1.01] transition-transform duration-500 relative overflow-hidden"
                style={{ boxShadow: `0 0 80px ${project.glow}` }}
              >
                {project.featured && (
                  <div className="absolute top-6 right-6">
                    <div className="text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-full bg-white/5 border border-white/10 text-apple-gray">
                      ★ Featured
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-apple-gray">{project.category}</span>
                    <span className="text-apple-border">·</span>
                    <span className="text-xs text-apple-gray">{project.org === 'PwC' ? 'PwC India' : 'Aakash'}</span>
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                <div className={`grid gap-3 mb-6 ${project.metrics.length > 2 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2'}`}>
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-white/5 rounded-xl p-3 border border-white/5">
                      <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent leading-tight`}>
                        {metric.value}
                      </div>
                      <div className="text-apple-gray text-[11px] mt-1 leading-snug">{metric.label}</div>
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
