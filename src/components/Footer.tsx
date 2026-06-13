'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const services = [
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'AI & Automation', href: '/services/artificial-intelligence-and-automation' },
  { label: 'Data Science', href: '/services/data-science-and-analytics' },
  { label: 'Cyber Security', href: '/services/cyber-security' },
  { label: 'DevOps & Cloud', href: '/services/devops-and-cloud-solutions' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  { label: 'SEO & Marketing', href: '/services/seo-and-digital-marketing' },
]

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Insights', href: '#insights' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
]

const solutions = ['Startups', 'Businesses', 'E-Commerce', 'Enterprise Solutions', 'Automation Solutions']

const technologies = ['React.js', 'Next.js', 'Node.js', 'Flutter', 'React Native', 'Firebase', 'Cloud', 'Figma']

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer className="relative border-t border-[var(--color-mas-border)] px-6 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr_1.15fr]">
          <div>
            <Link href="/" className="mb-5 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#22d3ee]/45 bg-white p-1 shadow-[0_0_24px_rgba(34,211,238,0.22)] ring-1 ring-[#2563eb]/20">
                <Image src="/datax-logo.png" alt="DataX Technologies logo" width={40} height={40} className="h-10 w-10 object-contain" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                DataX Technologies
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
              Building Intelligent Solutions for a Smarter Tomorrow. A modern software and IT
              solutions company based in Islamabad, Pakistan.
            </p>
            <div className="mt-5 rounded-xl border border-[var(--color-mas-cyan)]/15 bg-[var(--color-mas-cyan)]/5 p-4 text-xs leading-relaxed text-[var(--color-mas-text-secondary)]">
              Office 11, Aaly Plaza, 2nd Floor, Blue Area, Islamabad 44000, Pakistan
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="grid grid-cols-1 gap-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="link-underline text-sm text-[var(--color-mas-text-muted)] transition-colors hover:text-[var(--color-mas-cyan)]">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Solutions</h3>
            <ul className="grid grid-cols-1 gap-3">
              {solutions.map((solution) => (
                <li key={solution} className="text-sm text-[var(--color-mas-text-muted)]">
                  {solution}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-[var(--color-mas-text-muted)] transition-colors hover:text-[var(--color-mas-cyan)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-[var(--color-mas-text-muted)]">
              <li>Office 11, Aaly Plaza, 2nd Floor, Blue Area, Islamabad 44000, Pakistan</li>
              <li>
                <a className="link-underline hover:text-[var(--color-mas-cyan)]" href="mailto:datax.sol@gmail.com">
                  datax.sol@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="link-underline hover:text-[var(--color-mas-cyan)]"
                  href="https://www.datax.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.datax.pk
                </a>
              </li>
            </ul>
            <h3 className="mb-3 mt-7 text-sm font-semibold uppercase tracking-wider text-white">Core Stack</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-[var(--color-mas-text-muted)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[var(--color-mas-border)] to-transparent" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-[var(--color-mas-text-muted)] md:flex-row">
          <p>&copy; 2026 DataX Technologies. All rights reserved.</p>
          <p className="font-[family-name:var(--font-mono)] uppercase tracking-wider">
            Software · AI · Cloud · Security
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
