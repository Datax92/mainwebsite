'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, CheckCircle2, Layers3, LockKeyhole, Sparkles, Workflow } from 'lucide-react'

const principles = [
  {
    icon: Brain,
    title: 'AI-aware engineering',
    text: 'We design products that can use intelligence where it matters: automation, analytics, chatbots, recommendations, and smarter workflows.',
  },
  {
    icon: Layers3,
    title: 'Scalable architecture',
    text: 'Every build is planned around performance, maintainability, clean APIs, reliable databases, and future product growth.',
  },
  {
    icon: LockKeyhole,
    title: 'Security-first delivery',
    text: 'We treat application security, safe development practices, cloud configuration, and data protection as core product requirements.',
  },
  {
    icon: Workflow,
    title: 'Launch to iteration',
    text: 'We move from discovery to design, engineering, deployment, measurement, and improvement with a practical product mindset.',
  },
]

const values = ['Creativity', 'Engineering discipline', 'AI innovation', 'Secure systems', 'Business impact']

export default function CredibilitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative px-6 py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, rgba(0,200,255,0.08), transparent 46%), radial-gradient(ellipse at 80% 70%, rgba(37,99,235,0.08), transparent 48%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/8 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-mas-cyan)]" />
            <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wider text-[var(--color-mas-cyan)]">
              About DataX
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            A future-focused software company built around creativity, engineering, and AI.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[var(--color-mas-text-secondary)] md:text-lg">
            DataX Technologies helps organizations turn business ideas into reliable digital
            products. We blend elegant interface design, strong software architecture, automation,
            data intelligence, cloud delivery, and security practices to create systems that are
            useful today and ready for tomorrow.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[var(--color-mas-text-secondary)] md:text-lg">
            Based in Islamabad, Pakistan, we work with startups, businesses, and enterprises that
            need a professional technology partner with a modern product mindset.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {values.map((value) => (
              <span
                key={value}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[var(--color-mas-text-secondary)]"
              >
                <CheckCircle2 className="h-4 w-4 text-[var(--color-mas-cyan)]" />
                {value}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {principles.map((principle) => {
            const Icon = principle.icon
            return (
              <article key={principle.title} className="glass rounded-xl p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/8">
                  <Icon className="h-6 w-6 text-[var(--color-mas-cyan)]" />
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                  {principle.text}
                </p>
              </article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
