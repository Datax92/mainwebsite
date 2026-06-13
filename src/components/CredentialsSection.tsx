'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Cpu, Factory, Rocket, ShoppingCart, type LucideIcon } from 'lucide-react'

interface Industry {
  icon: LucideIcon
  title: string
  description: string
}

const industries: Industry[] = [
  {
    icon: Rocket,
    title: 'Startups',
    description: 'MVPs, product prototypes, launch platforms, and lean engineering support for fast-moving founders.',
  },
  {
    icon: Building2,
    title: 'Businesses',
    description: 'Websites, internal tools, CRM workflows, automation systems, and digital transformation support.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Online stores, payment integrations, product catalogs, inventory flows, SEO, and analytics.',
  },
  {
    icon: Factory,
    title: 'Enterprise Solutions',
    description: 'Scalable web applications, dashboards, secure APIs, cloud systems, and operational software.',
  },
  {
    icon: Cpu,
    title: 'Automation Solutions',
    description: 'AI workflows, chatbots, reporting pipelines, and process automation for smarter operations.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

export default function CredentialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="solutions" className="relative py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'linear-gradient(180deg, rgba(0,200,255,0.035) 0%, rgba(15,22,41,0.36) 48%, rgba(0,200,255,0.025) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--color-mas-cyan)]">
            Industries & Solutions
          </p>
          <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Technology solutions for the teams building what comes next.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-mas-text-secondary)] md:text-lg">
            We partner with companies at every stage, from first product launch to enterprise
            modernization and AI-powered operations.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5"
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.article
                key={industry.title}
                variants={item}
                className="card-gradient-hover glass rounded-xl p-6 text-center"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-mas-cyan)]/25 bg-[var(--color-mas-cyan)]/10">
                  <Icon className="h-6 w-6 text-[var(--color-mas-cyan)]" />
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {industry.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                  {industry.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
