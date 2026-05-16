'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Metric = {
  value: string
  label: string
  context: string
  color: string
  glow: string
  badge?: string
}

const metrics: Metric[] = [
  {
    value: '₹10cr+',
    label: 'Firm Revenue Generated',
    context: 'PwC FRM engagement across 3 banking clients (~$1.2M)',
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(191, 90, 242, 0.20)',
    badge: 'PwC · Fintech',
  },
  {
    value: '₹5cr',
    label: 'Aakash Feature Revenue',
    context: 'Report Card + Concept Kundali + Flashcards (~$600K)',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(0, 113, 227, 0.20)',
    badge: 'Aakash · Ed-Tech',
  },
  {
    value: '₹3cr',
    label: 'DR Standalone Revenue',
    context: 'Disaster Recovery sold as a standalone deliverable (~$360K)',
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(244, 63, 94, 0.18)',
    badge: 'PwC · Infrastructure',
  },
  {
    value: '500K+',
    label: 'Concurrent Users Served',
    context: 'Combined across fintech + ed-tech production systems',
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(50, 173, 230, 0.20)',
  },
  {
    value: '250K+',
    label: 'Active Learners',
    context: 'Aakash test-prep platform — Report Card, Concept Kundali, Flashcards',
    color: 'from-blue-500 to-purple-500',
    glow: 'rgba(0, 113, 227, 0.18)',
    badge: 'Aakash',
  },
  {
    value: '100+ TPS',
    label: 'Fraud-Screened Throughput',
    context: 'Sustained per client env, ~150 TPS headroom at <60% utilization',
    color: 'from-purple-500 to-fuchsia-500',
    glow: 'rgba(217, 70, 239, 0.18)',
    badge: 'FRM',
  },
  {
    value: '10M+',
    label: 'User Records Migrated',
    context: 'Bank legacy systems → FRM Kubernetes environment',
    color: 'from-orange-500 to-amber-500',
    glow: 'rgba(249, 115, 22, 0.18)',
    badge: 'FRM',
  },
  {
    value: '3',
    label: 'Banking Clients',
    context: 'Small finance banks + major private-sector bank — FRM product',
    color: 'from-violet-500 to-purple-500',
    glow: 'rgba(139, 92, 246, 0.18)',
    badge: 'FRM',
  },
  {
    value: '64%',
    label: 'API Response Reduction',
    context: 'Hot-path endpoints — Redis caching, MySQL tuning, ES indexing',
    color: 'from-green-500 to-emerald-500',
    glow: 'rgba(34, 197, 94, 0.18)',
    badge: 'Aakash',
  },
  {
    value: '99.9%',
    label: 'Production Uptime',
    context: 'Aakash peak traffic windows',
    color: 'from-teal-500 to-cyan-500',
    glow: 'rgba(20, 184, 166, 0.18)',
    badge: 'Aakash',
  },
  {
    value: '≤15 min',
    label: 'Disaster Recovery RTO',
    context: 'Active-passive failover · RPO ≤ 24h batched sync',
    color: 'from-rose-500 to-red-500',
    glow: 'rgba(244, 63, 94, 0.18)',
    badge: 'FRM',
  },
  {
    value: 'Air-gapped',
    label: 'On-Prem K8s Deployments',
    context: 'Internal private registry inside bank network · RHEL bare-metal',
    color: 'from-yellow-500 to-orange-500',
    glow: 'rgba(234, 179, 8, 0.18)',
    badge: 'FRM',
  },
]

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!inView) return
    // Extract numeric portion for animation; preserve prefix/suffix
    const match = value.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)([^\d]*)$/)
    if (!match) {
      setDisplay(value)
      return
    }
    const [, prefix, num, suffix] = match
    const target = parseFloat(num)
    const duration = 1100
    const start = performance.now()
    let frame: number
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      const current = target * eased
      const formatted = num.includes('.') ? current.toFixed(1) : Math.round(current).toString()
      setDisplay(`${prefix}${formatted}${suffix}`)
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return <span ref={ref}>{display}</span>
}

export default function Impact() {
  return (
    <section id="impact" className="py-32 section-padding bg-apple-dark/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest text-apple-purple uppercase mb-4"
        >
          Impact at a Glance
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(32px,5vw,72px)] font-bold text-white leading-tight mb-6 max-w-4xl"
        >
          Numbers that{' '}
          <span className="gradient-text">moved the needle.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-apple-gray text-lg max-w-2xl mb-16 leading-relaxed"
        >
          Production metrics from real engagements — revenue generated, users served, throughput
          sustained, and latency squeezed out.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group"
              style={{ boxShadow: `0 0 40px ${m.glow}` }}
            >
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-20 blur-2xl bg-gradient-to-br ${m.color} group-hover:opacity-30 transition-opacity`}
              />

              {m.badge && (
                <div className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-apple-gray mb-4">
                  {m.badge}
                </div>
              )}

              <div
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${m.color} bg-clip-text text-transparent mb-2 leading-none`}
              >
                <AnimatedValue value={m.value} />
              </div>

              <div className="text-white text-sm font-medium mb-2">{m.label}</div>
              <div className="text-apple-gray text-xs leading-relaxed">{m.context}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
