'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Backend Software Engineer',
    company: 'Aakash Educational Services',
    location: 'India',
    period: 'Oct 2024 – Present',
    type: 'Ed-Tech',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(0, 113, 227, 0.15)',
    highlights: [
      'Architected and maintained production REST APIs and microservices in Java Spring Boot serving thousands of concurrent students and educators with 99.9% uptime during peak traffic windows.',
      'Reduced API response times by 64% and backend latency by 40% by implementing Redis caching strategies for hot-path reads, tuning slow MySQL queries, and introducing Elasticsearch indexes for search-heavy endpoints.',
      'Led end-to-end feature development across the full software development lifecycle — scoping, design, implementation, testing, and release — collaborating closely with frontend, QA, and product teams.',
      'Established and owned CI/CD pipelines using Jenkins and Bitbucket, enabling rapid, safe releases and reducing deployment friction for the engineering team.',
      'Diagnosed and resolved production incidents through log analysis, metrics monitoring, and query profiling; contributed to design and code reviews and authored technical documentation.',
    ],
    tags: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'Elasticsearch', 'Jenkins', 'Kubernetes'],
  },
  {
    role: 'Software Engineer',
    company: 'PwC India',
    location: 'Mumbai, India',
    period: 'Jul 2023 – Oct 2024',
    type: 'Fintech / Consulting',
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(191, 90, 242, 0.15)',
    highlights: [
      'Built backend services and DevOps automation for fintech clients, specializing in scalable, secure, and compliant systems for large-scale payment reconciliation and fraud-risk detection platforms.',
      'Developed backend services in Scala for a Fraud and Risk Management (FRM) platform, and Python (Flask) microservices for payment reconciliation consuming data from NPCI, CBS, and switch systems.',
      'Designed and operated event-driven data pipelines using Apache Kafka to stream transaction events between ingestion and reconciliation services, improving throughput and decoupling upstream producers from downstream consumers.',
      'Deployed containerized microservices to AWS EKS and Fargate using Docker and Kubernetes, authoring Dockerfiles, Kubernetes manifests, and Jenkins CI/CD pipelines for automated build, test, and release workflows.',
      'Reduced manual operations by 50% and release downtime by 40%; lowered API response times by 25% via performance tuning, query optimization, and caching.',
      'Partnered with security teams on compliance and data protection initiatives (improving coverage by 35%), authored runbooks and technical documentation.',
    ],
    tags: ['Scala', 'Python', 'Flask', 'Kafka', 'AWS EKS', 'Docker', 'Kubernetes', 'PostgreSQL'],
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
                viewport={{ once: true, amount: 0.15 }}
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
                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-20 text-white mb-3`}
                        style={{ background: `linear-gradient(135deg, ${exp.glow}, ${exp.glow})`, border: `1px solid rgba(255,255,255,0.1)` }}
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
                        transition={{ duration: 0.5, delay: i * 0.05 }}
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