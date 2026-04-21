'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const NAME_CHARS = 'SHYAM PIPALIA'.split('')

const letterVariant = {
  hidden: { opacity: 0, y: 60, rotateX: -30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
}

const techTags = ['Java', 'Spring Boot', 'Python', 'Scala', 'AWS', 'Kafka', 'Kubernetes', 'Redis']

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0071e3 0%, transparent 70%)' }}
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #bf5af2 0%, transparent 70%)' }}
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #32ade6 0%, transparent 60%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Location badge */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-apple-gray text-xs mb-10 border border-white/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Hyderabad, India · Available for opportunities
        </motion.div>

        {/* Animated name */}
        <div className="overflow-hidden mb-6">
          <h1 className="text-[clamp(52px,10vw,140px)] font-bold tracking-tight leading-none text-white flex flex-wrap justify-center">
            {NAME_CHARS.map((char, i) =>
              char === ' ' ? (
                <span key={i} className="w-[0.3em]" />
              ) : (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariant}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ perspective: '1000px' }}
                >
                  {char}
                </motion.span>
              )
            )}
          </h1>
        </div>

        {/* Title */}
        <motion.p
          variants={fadeUp}
          custom={0.7}
          initial="hidden"
          animate="visible"
          className="text-[clamp(18px,3vw,32px)] font-medium mb-6 gradient-text"
        >
          Full-Stack Software Engineer
        </motion.p>

        {/* Summary line */}
        <motion.p
          variants={fadeUp}
          custom={0.9}
          initial="hidden"
          animate="visible"
          className="text-apple-gray text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Designing and scaling distributed systems, REST APIs, and microservices — and shipping end-to-end features across the full stack for fintech and ed-tech platforms.
        </motion.p>

        {/* Tech tags */}
        <motion.div
          variants={fadeUp}
          custom={1.1}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-apple-gray hover:text-white hover:border-white/20 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          custom={1.3}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="px-8 py-3 rounded-full bg-apple-blue text-white font-medium text-sm hover:bg-blue-600 transition-colors duration-200"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-apple-gray"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-apple-gray to-transparent"
        />
      </motion.div>
    </section>
  )
}
