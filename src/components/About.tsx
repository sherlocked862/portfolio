'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '99.9%', label: 'API Uptime' },
  { value: '64%', label: 'Latency Reduction' },
  { value: '50%', label: 'Manual Ops Reduced' },
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
              Full-Stack Software Engineer with 3+ years of experience designing and scaling{' '}
              <span className="text-white">distributed systems</span>,{' '}
              <span className="text-white">REST APIs</span>, and{' '}
              <span className="text-white">microservices</span> for fintech and ed-tech platforms
              serving thousands of concurrent users.
            </p>
            <p>
              Hands-on across <span className="text-white">Python (Flask)</span>,{' '}
              <span className="text-white">Java (Spring Boot)</span>, and{' '}
              <span className="text-white">Scala</span>, with production experience in MySQL,
              PostgreSQL, Redis, Elasticsearch, and Apache Kafka.
            </p>
            <p>
              Cloud-native deployment on <span className="text-white">AWS (EKS, Fargate)</span>,
              Docker, and Kubernetes through Jenkins CI/CD pipelines. Passionate about
              high-throughput, low-latency systems, event-driven architectures, and AI-augmented
              development.
            </p>
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
