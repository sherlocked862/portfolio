'use client'

import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest text-apple-blue uppercase mb-4"
        >
          Education
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(32px,5vw,72px)] font-bold text-white leading-tight mb-16"
        >
          The{' '}
          <span className="gradient-text">foundation.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-3xl p-8 md:p-12 max-w-3xl glow-blue"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-apple-blue to-apple-purple flex items-center justify-center text-white font-bold text-xl mb-6">
                VIT
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                B.Tech, Computer Science and Engineering
              </h3>
              <p className="text-apple-gray text-lg mb-1">
                Vellore Institute of Technology (VIT), Chennai
              </p>
              <p className="text-apple-gray text-sm">2019 – 2023</p>
            </div>

            <div className="shrink-0 text-center">
              <div className="text-5xl font-bold gradient-text">8.7</div>
              <div className="text-apple-gray text-sm mt-1">GPA / 10</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}