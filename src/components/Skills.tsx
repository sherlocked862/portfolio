'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    color: 'from-blue-500 to-blue-700',
    glow: 'rgba(59, 130, 246, 0.15)',
    skills: ['Java', 'Scala', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend Frameworks',
    color: 'from-purple-500 to-purple-700',
    glow: 'rgba(168, 85, 247, 0.15)',
    skills: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'Django', 'Flask', 'REST APIs', 'Microservices'],
  },
  {
    category: 'Frontend',
    color: 'from-sky-500 to-sky-700',
    glow: 'rgba(14, 165, 233, 0.15)',
    skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS'],
  },
  {
    category: 'Databases & Search',
    color: 'from-cyan-500 to-cyan-700',
    glow: 'rgba(6, 182, 212, 0.15)',
    skills: ['MySQL', 'PostgreSQL', 'Cassandra', 'Redis', 'Elasticsearch', 'OpenSearch'],
  },
  {
    category: 'Streaming & Messaging',
    color: 'from-orange-500 to-orange-700',
    glow: 'rgba(249, 115, 22, 0.15)',
    skills: ['Apache Kafka', 'AWS SQS', 'AWS EventBridge'],
  },
  {
    category: 'Cloud — AWS',
    color: 'from-yellow-500 to-yellow-700',
    glow: 'rgba(234, 179, 8, 0.15)',
    skills: ['EKS', 'Fargate', 'Lambda', 'S3', 'API Gateway', 'CloudFront', 'EventBridge', 'SQS', 'EC2'],
  },
  {
    category: 'Containers & Orchestration',
    color: 'from-indigo-500 to-indigo-700',
    glow: 'rgba(99, 102, 241, 0.15)',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Istio (Service Mesh)'],
  },
  {
    category: 'DevOps & CI/CD',
    color: 'from-green-500 to-green-700',
    glow: 'rgba(34, 197, 94, 0.15)',
    skills: ['Jenkins', 'Bitbucket Pipelines', 'Ansible', 'Git', 'GitHub', 'Private Container Registries', 'Linux (RHEL)', 'Shell Scripting'],
  },
  {
    category: 'Monitoring & Observability',
    color: 'from-emerald-500 to-emerald-700',
    glow: 'rgba(16, 185, 129, 0.15)',
    skills: ['New Relic', 'Grafana', 'Log Analysis', 'Query Profiling', 'Metrics Monitoring'],
  },
  {
    category: 'Architecture & Systems',
    color: 'from-red-500 to-red-700',
    glow: 'rgba(239, 68, 68, 0.15)',
    skills: [
      'Distributed Systems',
      'Event-Driven Architecture',
      'Low-Latency Services',
      'System Design',
      'Schema & Query Optimization',
      'Disaster Recovery (RTO/RPO)',
      'Zero-Downtime Deployments',
      'Air-Gapped Deployments',
      'Idempotent Data Pipelines',
      'High Availability',
      'Horizontal Scaling',
    ],
  },
  {
    category: 'Practices',
    color: 'from-teal-500 to-teal-700',
    glow: 'rgba(20, 184, 166, 0.15)',
    skills: ['Agile/Scrum', 'Code Reviews', 'Unit Testing', 'Production Support', 'Cross-Team Collaboration', 'Technical Documentation'],
  },
  {
    category: 'AI Development Tools',
    color: 'from-pink-500 to-pink-700',
    glow: 'rgba(236, 72, 153, 0.15)',
    skills: ['Claude', 'GitHub Copilot', 'Cursor'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest text-apple-purple uppercase mb-4"
        >
          Technical Skills
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(32px,5vw,72px)] font-bold text-white leading-tight mb-16"
        >
          The full toolkit —{' '}
          <span className="gradient-text">code to cluster.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: groupIdx * 0.05 }}
              className="glass rounded-2xl p-6"
              style={{ boxShadow: `0 0 40px ${group.glow}` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${group.color}`} />
                <span className="text-xs font-semibold text-apple-gray tracking-wide uppercase">
                  {group.category}
                </span>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
