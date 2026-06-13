'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BarChart3,
  Bot,
  CloudCog,
  Code2,
  Megaphone,
  Palette,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  accent: string
  href: string
}

const services: Service[] = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Modern responsive websites and scalable web applications using latest technologies.',
    tags: ['React.js', 'Next.js', 'Node.js', 'APIs', 'Databases'],
    accent: 'var(--color-mas-cyan)',
    href: '/services/web-development',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'High-quality Android and iOS mobile applications with smooth user experience.',
    tags: ['Flutter', 'React Native', 'Firebase'],
    accent: '#60a5fa',
    href: '/services/mobile-app-development',
  },
  {
    icon: Bot,
    title: 'Artificial Intelligence & Automation',
    description: 'AI-powered solutions that automate workflows and improve business efficiency.',
    tags: ['AI Integration', 'Machine Learning', 'Chatbots', 'Business Automation'],
    accent: '#22d3ee',
    href: '/services/artificial-intelligence-and-automation',
  },
  {
    icon: BarChart3,
    title: 'Data Science & Analytics',
    description: 'Transforming raw data into valuable insights and smarter business decisions.',
    tags: ['Data Analysis', 'Machine Learning Models', 'Predictive Analytics'],
    accent: '#38bdf8',
    href: '/services/data-science-and-analytics',
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security',
    description: 'Secure digital solutions to protect businesses and applications.',
    tags: ['Security Testing', 'Application Security', 'Secure Development'],
    accent: '#34d399',
    href: '/services/cyber-security',
  },
  {
    icon: CloudCog,
    title: 'DevOps & Cloud Solutions',
    description: 'Reliable deployment, automation, and scalable infrastructure solutions.',
    tags: ['CI/CD', 'Cloud Deployment', 'Server Management'],
    accent: '#818cf8',
    href: '/services/devops-and-cloud-solutions',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Modern user-friendly interfaces focused on beautiful design and user experience.',
    tags: ['Figma', 'Prototyping', 'Product Design'],
    accent: '#f0abfc',
    href: '/services/ui-ux-design',
  },
  {
    icon: Megaphone,
    title: 'SEO & Digital Marketing',
    description: 'Helping businesses increase online presence and reach more customers.',
    tags: ['SEO', 'Social Media Marketing', 'Content Strategy'],
    accent: '#facc15',
    href: '/services/seo-and-digital-marketing',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

export default function EnterpriseServices() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="enterprise-grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--color-mas-cyan)]">
            Services
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Complete digital product engineering for ambitious teams.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-mas-text-secondary)] md:text-lg">
            From first concept to launch-ready systems, DataX Technologies combines software
            engineering, AI, cloud, design, security, and growth strategy under one roof.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-xl p-6"
              >
                <Link href={service.href} className="absolute inset-0 z-10" aria-label={`View ${service.title} service`} />
                <span className="absolute right-4 top-4 font-[family-name:var(--font-display)] text-5xl font-bold text-white/[0.035]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${service.accent} 16%, transparent), transparent)`,
                    boxShadow: `0 0 0 1px color-mix(in srgb, ${service.accent} 25%, transparent)`,
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: service.accent }} />
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-[var(--color-mas-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
