'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, BrainCircuit, Code2, ShieldCheck, Sparkles } from 'lucide-react'

const capabilities = [
  { icon: BrainCircuit, label: 'AI & Automation' },
  { icon: Code2, label: 'Web & Mobile Engineering' },
  { icon: ShieldCheck, label: 'Secure Cloud Delivery' },
]

const metrics = [
  { value: '08+', label: 'core services' },
  { value: '05', label: 'solution verticals' },
  { value: 'PK', label: 'Islamabad based' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px), (pointer: coarse)').matches
    if (isMobile) return

    const section = sectionRef.current
    const light = lightRef.current
    if (!section || !light) return

    const onMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      light.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      light.style.setProperty('--my', `${event.clientY - rect.top}px`)
      light.style.opacity = '1'
    }

    const onLeave = () => {
      light.style.opacity = '0'
    }

    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)
    return () => {
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:pt-36"
    >
      <div
        ref={lightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), rgba(0, 200, 255, 0.13), transparent 62%)',
          mixBlendMode: 'screen',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[var(--color-mas-cyan)]/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[620px] w-[620px] rounded-full bg-blue-600/18 blur-[150px]"
      />
      <div aria-hidden className="enterprise-grid-bg absolute inset-0 opacity-35" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-mas-cyan)]/25 bg-[var(--color-mas-cyan)]/8 px-4 py-2">
            <Sparkles className="h-4 w-4 text-[var(--color-mas-cyan)]" />
            <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wider text-[var(--color-mas-cyan)]">
              DataX Technologies
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Leading Software Development Company in{' '}
            <span className="text-gradient">Islamabad.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-mas-text-secondary)] md:text-xl">
            DataX Technologies builds web platforms, mobile apps, AI automation, data systems,
            cybersecurity solutions, cloud infrastructure, UI/UX experiences, SEO campaigns, and
            custom software for ambitious businesses in Pakistan and beyond.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="btn-ripple group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-mas-cyan)] px-8 py-4 text-sm font-bold text-[var(--color-mas-bg)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_var(--color-mas-cyan-glow)]"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-mas-border)] px-8 py-4 text-sm font-semibold text-[var(--color-mas-text)] transition-all duration-300 hover:border-[var(--color-mas-cyan)]/50 hover:bg-[var(--color-mas-cyan)]/8 hover:text-white"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {capabilities.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[var(--color-mas-text-secondary)]"
                >
                  <Icon className="h-4 w-4 text-[var(--color-mas-cyan)]" />
                  {item.label}
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative">
          <div className="animated-border relative overflow-hidden rounded-2xl p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,200,255,0.18),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.16),transparent_38%)]" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] text-[var(--color-mas-cyan)]">
                    Intelligent delivery stack
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                    Strategy. Design. Code. Cloud.
                  </h2>
                </div>
                <div className="h-12 w-12 rounded-xl border border-[var(--color-mas-cyan)]/25 bg-[var(--color-mas-cyan)]/10 p-3">
                  <BrainCircuit className="h-full w-full text-[var(--color-mas-cyan)]" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ['01', 'Discover the business goal and technical path'],
                  ['02', 'Design premium user experiences and system architecture'],
                  ['03', 'Build secure apps, AI workflows, APIs, and cloud pipelines'],
                  ['04', 'Launch, measure, improve, and scale with confidence'],
                ].map(([step, text]) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.035] px-4 py-4"
                  >
                    <span className="font-[family-name:var(--font-mono)] text-sm font-bold text-[var(--color-mas-cyan)]">
                      {step}
                    </span>
                    <span className="text-sm text-[var(--color-mas-text-secondary)]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/8 bg-black/20 p-4 text-center">
                    <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-[var(--color-mas-text-muted)]">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
