'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Backend Software Engineer',
    company: 'Aakash Educational Services',
    location: 'India',
    period: 'Oct 2024 – Present',
    type: 'Ed-Tech · 250K+ Active Learners',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(0, 113, 227, 0.15)',
    highlights: [
      'Owned end-to-end delivery of the Report Card System — a daily-batch pipeline (EventBridge → SQS → Lambda → headless Chromium → S3 → CloudFront → email) generating personalized ranks, performance graphs, and PDFs for 250K+ students and eliminating manual report distribution entirely.',
      'Built Concept Kundali, a performance analytics engine combining Elasticsearch + MySQL to produce topic-level weakness profiles per student, driving targeted practice suggestions for 250K+ active learners.',
      'Shipped the Flashcards feature end-to-end — schema, Spring Boot APIs, Redis-backed per-student progress tracking, and release. Combined with Report Card and Concept Kundali, these features drove ₹5 crore (~$600K) in student revenue.',
      'Designed a reusable Practice Module API framework in Spring Boot supporting topic-wise, full-length, adaptive, sectional, and custom formats — an abstraction layer enabling new clients to onboard with minimal code changes.',
      'Built a real-time analytics pipeline on Elasticsearch ingesting student response events as they happen, surfacing accuracy and difficulty-level insights that feed personalized practice recommendations.',
      'Extended the notification platform (Lambda + EventBridge + SQS + S3 + MySQL) to deliver deeplink-enabled mobile push notifications, landing users directly on relevant in-app destinations and improving engagement on time-sensitive comms.',
      'Reduced API response times by 64% and backend latency by 40% on hot-path endpoints via Redis caching, MySQL query/schema tuning, composite indexes, and Elasticsearch indexes for search-heavy reads — sustaining 99.9% uptime during peak traffic.',
      'Owned CI/CD on Jenkins + Bitbucket and led production incident response — log analysis, query profiling, metrics monitoring on New Relic and Grafana.',
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Elasticsearch', 'AWS Lambda', 'SQS', 'EventBridge', 'S3', 'CloudFront', 'Jenkins', 'Bitbucket', 'New Relic', 'Grafana'],
  },
  {
    role: 'Software Engineer',
    company: 'PwC India',
    location: 'Mumbai, India',
    period: 'Jul 2023 – Oct 2024',
    type: 'Fintech · 3 Banking Clients · ₹10cr+ Revenue',
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(191, 90, 242, 0.15)',
    highlights: [
      'Shipped the Fraud Risk Management (FRM) product to 3 Indian banking clients (small finance banks + a major private-sector bank), monitoring every channel — UPI, NEFT, RTGS — and applying real-time fraud-detection logic. Firm revenue from the engagement exceeded ₹10 crore (~$1.2M).',
      'Sustained 100+ TPS of fraud-screened throughput per client environment at <60% system utilization (~150 TPS headroom) — each transaction triggering full rules/ML evaluation before approval. Stack: Scala backend, PostgreSQL + Cassandra, Kafka, Istio service mesh.',
      'Designed and built an active-passive Disaster Recovery system for FRM — RTO ≤ 15 min, RPO ≤ 24h via batched daily sync with automatic traffic redirection on outage. Sold as a standalone deliverable generating ₹3 crore (~$360K) in additional client revenue.',
      'Solved the air-gapped deployment problem for bank on-prem environments with zero internet access — designed an internal private container registry inside the bank network, mirrored all product dependencies, and configured network/firewall rules for fully offline rollouts.',
      'Owned multi-environment CI/CD across AWS EKS (cloud) and on-prem RHEL bare-metal Kubernetes clusters — authored Dockerfiles, Helm charts, and Ansible playbooks; built pipelines for image builds, registry pushes, and rolling zero-downtime releases.',
      'Built the data migration pipeline that moved 10M+ end-user records from legacy bank infrastructure into the FRM Kubernetes environment — batched extraction, automated CSV generation, validation, and idempotent bulk-load with checkpointing for safe re-runs.',
      'Delivered Google Recon, an internal PwC payment reconciliation tool pipelining millions of daily transactions from CBS — Python (Django + Flask) backend with custom validation logic, Next.js frontend with interactive auditor dashboards for transaction-level investigation. End-to-end fullstack ownership.',
      'Defined hardware/capacity sizing per client based on projected transaction load and concurrent users; partnered with security on data-protection and compliance controls (+35% coverage); authored runbooks across backend, infrastructure, and security.',
    ],
    tags: ['Scala', 'Python', 'Django', 'Flask', 'Next.js', 'PostgreSQL', 'Cassandra', 'Apache Kafka', 'Kubernetes', 'AWS EKS', 'RHEL', 'Istio', 'Helm', 'Ansible', 'Docker', 'Jenkins'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest text-apple-cyan uppercase mb-4"
        >
          Professional Experience
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(32px,5vw,72px)] font-bold text-white leading-tight mb-16"
        >
          Where I&apos;ve made{' '}
          <span className="gradient-text">real impact.</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-apple-blue via-apple-purple to-transparent hidden lg:block ml-6" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:pl-16 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-8 w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} hidden lg:block ml-[18px] -translate-x-1/2`}
                  style={{ boxShadow: `0 0 12px ${exp.glow}` }}
                />

                <div
                  className="glass rounded-3xl p-8 md:p-10 hover:border-white/15 transition-all duration-500 group"
                  style={{ boxShadow: `0 0 60px ${exp.glow}` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                    <div>
                      <div
                        className="inline-block text-xs font-semibold px-3 py-1 rounded-full text-white mb-3 border border-white/10"
                        style={{ background: exp.glow }}
                      >
                        {exp.type}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-apple-gray text-lg">
                        {exp.company}
                        <span className="text-apple-border mx-2">·</span>
                        {exp.location}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-block px-4 py-2 rounded-full glass border border-white/10 text-apple-gray text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {exp.highlights.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.04 }}
                        className="flex items-start gap-3 text-apple-gray text-sm md:text-base leading-relaxed"
                      >
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} shrink-0`} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-apple-gray"
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
      </div>
    </section>
  )
}
