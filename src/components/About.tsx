'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '500K+', label: 'Users Served' },
  { value: '99.9%', label: 'API Uptime' },
  { value: '64%', label: 'Latency Reduction' },
]

const domains = [
  {
    label: 'Fintech',
    org: 'PwC India',
    detail: 'Fraud-risk + payment recon for 3 banking clients',
    color: 'from-purple-500 to-pink-500',
  },
  {
    label: 'Ed-Tech',
    org: 'Aakash Educational Services',
    detail: 'Test-prep platform serving 250K+ active learners',
    color: 'from-blue-500 to-cyan-500',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest text-apple-blue uppercase mb-4"
        >
          Professional Summary
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(32px,5vw,72px)] font-bold text-white leading-tight max-w-4xl mb-16"
        >
          Building systems that{' '}
          <span className="gradient-text">scale, perform,</span>
          {' '}and never go down.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-apple-gray text-lg leading-relaxed"
          >
            <p>
              Full-Stack Software Engineer with 3+ years of experience designing and operating{' '}
              <span className="text-white">event-driven, distributed systems</span> across two very
              different domains —{' '}
              <span className="text-white">fintech</span> at PwC India and{' '}
              <span className="text-white">ed-tech</span> at Aakash Educational Services.
            </p>
            <p>
              Combined exposure spans{' '}
              <span className="text-white">high-throughput product engineering</span>,{' '}
              <span className="text-white">fullstack feature ownership</span>, and production-grade
              DevOps — including{' '}
              <span className="text-white">air-gapped on-prem Kubernetes</span> deployments at
              banking clients and an{' '}
              <span className="text-white">active-passive disaster recovery</span> system with
              ≤15 min RTO.
            </p>
            <p>
              Hands-on across <span className="text-white">Java (Spring Boot)</span>,{' '}
              <span className="text-white">Scala</span>, <span className="text-white">Python</span>,
              and <span className="text-white">Next.js</span>, with production experience in
              MySQL, PostgreSQL, Cassandra, Redis, Elasticsearch, and Apache Kafka. Targeting{' '}
              <span className="text-white">SDE-2 (fullstack-leaning)</span> roles at product-based
              companies.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {domains.map((d) => (
                <motion.div
                  key={d.org}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${d.color}`} />
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      {d.label}
                    </span>
                  </div>
                  <div className="text-sm text-white font-medium">{d.org}</div>
                  <div className="text-xs text-apple-gray mt-1">{d.detail}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass rounded-2xl p-6 glow-blue"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-apple-gray text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
