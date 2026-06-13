'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'

const services = [
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile Apps', href: '/services/mobile-app-development' },
  { label: 'AI & Automation', href: '/services/artificial-intelligence-and-automation' },
  { label: 'Data Science', href: '/services/data-science-and-analytics' },
  { label: 'Cyber Security', href: '/services/cyber-security' },
  { label: 'DevOps & Cloud', href: '/services/devops-and-cloud-solutions' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  { label: 'SEO & Marketing', href: '/services/seo-and-digital-marketing' },
]

const solutions = [
  { label: 'Startups', href: '/#solutions' },
  { label: 'Businesses', href: '/#solutions' },
  { label: 'E-Commerce', href: '/#solutions' },
  { label: 'Enterprise', href: '/#solutions' },
  { label: 'Automation', href: '/#solutions' },
]

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '/#about' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Contact', href: '/#contact' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll-lock while the mobile menu is open. Without this, swiping
  // inside the menu drags the page behind it on iOS, which feels broken.
  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  // Close the menu when the route hash changes (e.g. user taps "#contact")
  // or when Escape is pressed. The link-level onClick already handles taps
  // on the menu items themselves, but hash navigation can come from other
  // places (back/forward buttons).
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    const onHash = () => setMobileOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('hashchange', onHash)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('hashchange', onHash)
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex items-center justify-between gap-2 transition-all duration-500 rounded-2xl border ${
          scrolled
            ? 'w-full max-w-6xl bg-[var(--color-mas-bg)]/80 backdrop-blur-2xl [-webkit-backdrop-filter:blur(40px)] border-[var(--color-mas-border)] shadow-[0_8px_40px_rgba(0,0,0,0.5)] px-6 py-3'
            : 'w-full max-w-7xl bg-[var(--color-mas-bg)]/40 backdrop-blur-md [-webkit-backdrop-filter:blur(20px)] border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.28)] px-6 py-4'
        }`}
      >
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#22d3ee]/45 bg-white shadow-[0_0_22px_rgba(34,211,238,0.22)] ring-1 ring-[#2563eb]/20">
            <Image src="/datax-logo.png" alt="DataX Technologies logo" width={32} height={32} className="h-8 w-8 object-contain" priority />
          </span>
          <span className="font-[family-name:var(--font-display)] text-base font-bold tracking-wide text-white sm:text-lg">
            DataX
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          <Dropdown label="Services" href="/#services" items={services} />
          <Dropdown label="Solutions" href="/#solutions" items={solutions} />
          {navLinks.map((link) => (
            <MagneticLink key={link.label} href={link.href} external={link.external}>
              {link.label}
            </MagneticLink>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://www.datax.pk"
            target="_blank"
            rel="noopener"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold font-[family-name:var(--font-mono)] tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              color: 'var(--color-mas-cyan)',
              borderColor: 'color-mix(in srgb, var(--color-mas-cyan) 30%, transparent)',
              background: 'color-mix(in srgb, var(--color-mas-cyan) 6%, transparent)',
            }}
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--color-mas-cyan)]" style={{ boxShadow: '0 0 8px var(--color-mas-cyan)' }} />
            datax.pk
          </a>

          <a
            href="/#contact"
            className="hidden lg:inline-flex rounded-full px-6 py-2 text-sm font-bold text-[var(--color-mas-bg)] transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--color-mas-cyan)',
              boxShadow: '0 0 24px var(--color-mas-cyan-glow)',
            }}
          >
            Start a Project
          </a>

          {/* Mobile toggle (also shown at md / tablet portrait) */}
          <button
            className="lg:hidden p-2 text-[var(--color-mas-text)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 rounded-2xl bg-[var(--color-mas-bg)]/95 backdrop-blur-2xl border border-[var(--color-mas-border)] shadow-[0_20px_60px_rgba(0,0,0,0.6)] lg:hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              <MobileGroup title="Services" items={services} href="/#services" onClick={() => setMobileOpen(false)} />
              <MobileGroup title="Solutions" items={solutions} href="/#solutions" onClick={() => setMobileOpen(false)} />
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="text-[var(--color-mas-text-secondary)] hover:text-[var(--color-mas-text)] transition-colors py-3 text-base border-b border-[var(--color-mas-border)]/30 last:border-0"
                >
                  {link.label}
                  {link.external && <span className="ml-1.5 text-xs opacity-50" aria-hidden>↗</span>}
                </a>
              ))}
              <a
                href="https://www.datax.pk"
                target="_blank"
                rel="noopener"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-center text-xs font-semibold font-[family-name:var(--font-mono)] tracking-wider"
                style={{
                  color: 'var(--color-mas-cyan)',
                  borderColor: 'color-mix(in srgb, var(--color-mas-cyan) 30%, transparent)',
                  background: 'color-mix(in srgb, var(--color-mas-cyan) 6%, transparent)',
                }}
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--color-mas-cyan)]" />
                datax.pk
              </a>
              <a
                href="/#contact"
                className="mt-2 rounded-full px-5 py-3 text-center text-sm font-bold text-[var(--color-mas-bg)]"
                style={{
                  background: 'var(--color-mas-cyan)',
                }}
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Dropdown({ label, href, items }: { label: string; href: string; items: { label: string; href: string }[] }) {
  return (
    <div className="group relative">
      <a
        href={href}
        className="relative inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm text-[var(--color-mas-text-secondary)] transition-colors hover:bg-white/[0.03] hover:text-[var(--color-mas-text)]"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </a>
      <div className="pointer-events-none absolute left-0 top-full z-50 min-w-64 translate-y-2 rounded-2xl border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-bg)]/95 p-3 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block rounded-xl px-4 py-3 text-sm text-[var(--color-mas-text-secondary)] transition-colors hover:bg-[var(--color-mas-cyan)]/8 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function MobileGroup({
  title,
  items,
  href,
  onClick,
}: {
  title: string
  items: { label: string; href: string }[]
  href: string
  onClick: () => void
}) {
  return (
    <div className="border-b border-[var(--color-mas-border)]/30 py-2">
      <a href={href} onClick={onClick} className="block py-2 text-base font-semibold text-white">
        {title}
      </a>
      <div className="grid grid-cols-2 gap-2 pb-2">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClick}
            className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-[var(--color-mas-text-secondary)]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function MagneticLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch('ontouchstart' in window)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouch || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = Math.max(-5, Math.min(5, (e.clientX - cx) * 0.12))
      const dy = Math.max(-3, Math.min(3, (e.clientY - cy) * 0.12))
      ref.current.style.transform = `translate(${dx}px, ${dy}px)`
    },
    [isTouch]
  )

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
    ref.current.style.transition =
      'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
  }, [])

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transition = 'transform 0.08s ease'
  }, [])

  return (
    <a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative px-4 py-2 text-sm text-[var(--color-mas-text-secondary)] hover:text-[var(--color-mas-text)] transition-colors will-change-transform rounded-lg hover:bg-white/[0.03]"
    >
      {children}
      {external && <span className="ml-1 text-[0.65rem] opacity-50" aria-hidden>↗</span>}
    </a>
  )
}
