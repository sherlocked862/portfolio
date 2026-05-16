'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type Diagram = {
  id: string
  title: string
  subtitle: string
  org: 'Aakash' | 'PwC'
  color: string
  glow: string
  description: string
  render: () => JSX.Element
  callouts: { label: string; value: string }[]
}

function Node({
  label,
  sub,
  color = 'from-white/10 to-white/5',
}: {
  label: string
  sub?: string
  color?: string
}) {
  return (
    <div
      className={`relative rounded-xl border border-white/10 bg-gradient-to-br ${color} px-4 py-3 text-center min-w-[110px] backdrop-blur-sm`}
    >
      <div className="text-white text-xs font-semibold leading-tight">{label}</div>
      {sub && <div className="text-apple-gray text-[10px] mt-0.5 leading-tight">{sub}</div>}
    </div>
  )
}

function FlowArrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center ${vertical ? 'h-6 w-full flex-col' : 'h-full w-6'}`}
    >
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className={
          vertical
            ? 'w-px h-6 bg-gradient-to-b from-transparent via-white/40 to-transparent'
            : 'h-px w-6 bg-gradient-to-r from-transparent via-white/40 to-transparent'
        }
      />
    </div>
  )
}

function ReportCardDiagram() {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="min-w-[760px] py-6">
        <div className="flex items-center justify-between gap-2">
          <Node label="EventBridge" sub="Daily schedule" color="from-amber-500/30 to-amber-700/10" />
          <FlowArrow />
          <Node label="Backend" sub="MySQL · format" color="from-blue-500/30 to-blue-700/10" />
          <FlowArrow />
          <Node label="SQS" sub="Queue" color="from-purple-500/30 to-purple-700/10" />
          <FlowArrow />
          <Node label="Lambda" sub="Headless Chromium" color="from-pink-500/30 to-pink-700/10" />
          <FlowArrow />
          <Node label="S3" sub="PDF storage" color="from-green-500/30 to-green-700/10" />
          <FlowArrow />
          <Node label="CloudFront" sub="Delivery" color="from-cyan-500/30 to-cyan-700/10" />
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-white/10" />
          <div className="text-[10px] uppercase tracking-widest text-apple-gray">
            + Email dispatch to students &amp; parents
          </div>
          <div className="h-px w-16 bg-white/10" />
        </div>
      </div>
    </div>
  )
}

function DRDiagram() {
  return (
    <div className="w-full py-4">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Primary */}
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-6">
          <div className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
            Active
          </div>
          <div className="text-xs text-apple-gray mb-2">Production</div>
          <div className="text-lg font-bold text-white mb-4">Primary K8s Cluster</div>
          <div className="space-y-2">
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              FRM Services · Scala
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              PostgreSQL · Cassandra
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              Live Traffic · 100+ TPS
            </div>
          </div>
        </div>

        {/* Standby */}
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-rose-500/10 to-red-500/5 p-6">
          <div className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-rose-400 font-semibold">
            Passive
          </div>
          <div className="text-xs text-apple-gray mb-2">Disaster Recovery</div>
          <div className="text-lg font-bold text-white mb-4">Standby K8s Cluster</div>
          <div className="space-y-2">
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              FRM Services · Idle
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              T-1 Synced Data
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              Awaiting Failover
            </div>
          </div>
        </div>
      </div>

      {/* Sync + failover labels */}
      <div className="mt-6 grid md:grid-cols-2 gap-4 text-center">
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="text-xs text-apple-gray">Batched Daily Sync</div>
          <div className="text-sm text-white font-semibold mt-1">RPO ≤ 24h</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <div className="text-xs text-apple-gray">Automatic Traffic Redirect</div>
          <div className="text-sm text-white font-semibold mt-1">RTO ≤ 15 min</div>
        </div>
      </div>
    </div>
  )
}

function AirGappedDiagram() {
  return (
    <div className="w-full py-4">
      <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* External world */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="text-[10px] uppercase tracking-widest text-apple-gray mb-3">
            Internet · PwC build env
          </div>
          <div className="space-y-2">
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              Build &amp; Test Pipelines
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              All Container Dependencies
            </div>
          </div>
        </div>

        {/* Firewall + mirror */}
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-[10px] uppercase tracking-widest text-yellow-300">
            Firewall · No Internet
          </div>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-10 w-px bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
          />
          <div className="text-[10px] text-apple-gray">Mirror</div>
        </div>

        {/* Bank network */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 p-5">
          <div className="text-[10px] uppercase tracking-widest text-orange-300 mb-3">
            Air-Gapped Bank Network
          </div>
          <div className="space-y-2">
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              Private Container Registry
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              RHEL Bare-Metal K8s
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white">
              FRM Services Running
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const diagrams: Diagram[] = [
  {
    id: 'report-card',
    title: 'Report Card Pipeline',
    subtitle: 'Daily-batch personalized PDFs for 250K+ students',
    org: 'Aakash',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(0, 113, 227, 0.18)',
    description:
      'A fully serverless daily batch — EventBridge schedules sync, backend formats payloads in MySQL, SQS fans out to Lambda where headless Chromium renders PDFs, S3 stores them, CloudFront serves them, and email dispatch closes the loop.',
    render: ReportCardDiagram,
    callouts: [
      { label: 'Students', value: '250K+' },
      { label: 'Cadence', value: 'Daily' },
      { label: 'Manual Ops', value: 'Eliminated' },
    ],
  },
  {
    id: 'dr',
    title: 'FRM Active-Passive DR',
    subtitle: '₹3cr standalone deliverable — ≤15 min RTO',
    org: 'PwC',
    color: 'from-rose-500 to-red-500',
    glow: 'rgba(244, 63, 94, 0.18)',
    description:
      'Production runs on the active cluster; data is synced T-1 to a standby. On outage, traffic redirects automatically — production back up within 15 minutes, no more than 24 hours of data at risk.',
    render: DRDiagram,
    callouts: [
      { label: 'RTO', value: '≤15 min' },
      { label: 'RPO', value: '≤24h' },
      { label: 'Revenue', value: '₹3cr' },
    ],
  },
  {
    id: 'air-gapped',
    title: 'Air-Gapped Bank Deployment',
    subtitle: 'Offline K8s rollouts inside bank networks',
    org: 'PwC',
    color: 'from-yellow-500 to-orange-500',
    glow: 'rgba(234, 179, 8, 0.18)',
    description:
      'Bank servers have zero internet access. Built a mirror of every container dependency into a private registry inside the bank network, configured network/firewall rules, and ran fully offline K8s rollouts on RHEL bare-metal.',
    render: AirGappedDiagram,
    callouts: [
      { label: 'Network', value: 'Air-Gapped' },
      { label: 'Cluster', value: 'RHEL · K8s' },
      { label: 'Registry', value: 'Private Mirror' },
    ],
  },
]

export default function Architecture() {
  const [active, setActive] = useState(diagrams[0].id)
  const current = diagrams.find((d) => d.id === active) ?? diagrams[0]

  return (
    <section id="architecture" className="py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest text-apple-cyan uppercase mb-4"
        >
          System Design Snapshots
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(32px,5vw,72px)] font-bold text-white leading-tight mb-6"
        >
          A few systems,{' '}
          <span className="gradient-text">drawn out.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-apple-gray text-lg max-w-2xl mb-10 leading-relaxed"
        >
          The pieces I&apos;m proudest of — quick visual walkthroughs of the architectures behind
          the headline metrics.
        </motion.p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {diagrams.map((d) => {
            const isActive = d.id === active
            return (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  isActive
                    ? 'border-white/20 text-white'
                    : 'border-white/10 text-apple-gray hover:text-white hover:border-white/20'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="archTab"
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${d.color} opacity-20`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{d.title}</span>
              </button>
            )
          })}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-3xl p-6 md:p-10"
          style={{ boxShadow: `0 0 80px ${current.glow}` }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div className="max-w-2xl">
              <div className="text-xs text-apple-gray mb-2">
                {current.org === 'PwC' ? 'PwC India · Fintech' : 'Aakash · Ed-Tech'}
              </div>
              <h3
                className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent mb-2`}
              >
                {current.title}
              </h3>
              <p className="text-white font-medium text-sm mb-3">{current.subtitle}</p>
              <p className="text-apple-gray text-sm leading-relaxed">{current.description}</p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-1 gap-3 md:min-w-[180px]">
              {current.callouts.map((c) => (
                <div key={c.label} className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-center md:text-left">
                  <div
                    className={`text-base md:text-lg font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent leading-tight`}
                  >
                    {c.value}
                  </div>
                  <div className="text-[10px] text-apple-gray mt-1 uppercase tracking-widest">{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-black/30 p-4 md:p-8">
            {current.render()}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
