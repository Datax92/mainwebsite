'use client'

import { useRef, useState, type FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle, Globe2, Loader2, Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!name || !email || !message) return

    setState('loading')
    const whatsappMessage = encodeURIComponent(
      `DataX Website Inquiry\n\nName: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`
    )
    window.open(`https://wa.me/923135506223?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer')
    setState('success')
  }

  return (
    <section id="contact" className="relative px-6 py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0,200,255,0.04) 42%, rgba(0,200,255,0.035) 68%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--color-mas-cyan)]">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s build your next digital product.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-mas-text-secondary)] md:text-lg">
            Tell us what you want to launch, automate, secure, or improve. DataX Technologies will
            help you shape the right technical path.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-5"
        >
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: MapPin,
                title: 'Location',
                text: 'Office 11, Aaly Plaza, 2nd Floor, Blue Area, Islamabad 44000, Pakistan',
              },
              { icon: Mail, title: 'Email', text: 'datax.sol@gmail.com', href: 'mailto:datax.sol@gmail.com' },
              { icon: Globe2, title: 'Website', text: 'www.datax.pk', href: 'https://www.datax.pk' },
            ].map((item) => {
              const Icon = item.icon
              const content = (
                <div className="glass flex gap-4 rounded-xl p-6 transition-all duration-300 hover:border-[var(--color-mas-cyan)]/30">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/8">
                    <Icon className="h-5 w-5 text-[var(--color-mas-cyan)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              )

              return item.href ? (
                <a key={item.title} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              )
            })}
          </div>

          <div className="lg:col-span-3 space-y-6">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-mas-cyan)]/20 bg-[rgba(15,22,41,0.62)] shadow-[0_0_40px_rgba(0,200,255,0.08)]">
            <iframe
              title="DataX Technologies office location map"
              src="https://www.google.com/maps?q=Office%2011%2C%20Aaly%20Plaza%2C%202nd%20Floor%2C%20Blue%20Area%2C%20Islamabad%2044000%2C%20Pakistan&output=embed"
              className="h-72 w-full border-0 grayscale-[0.15] invert-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl border border-[var(--color-mas-cyan)]/15 bg-[rgba(15,22,41,0.62)] p-7 backdrop-blur-xl md:p-9">
            {state === 'success' ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/12">
                  <CheckCircle className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Your WhatsApp message is ready
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                  Send it in WhatsApp and the DataX team will review your project details.
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="mt-6 rounded-full border border-[var(--color-mas-cyan)]/30 px-5 py-2 text-sm font-semibold text-[var(--color-mas-cyan)]"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-mas-text-muted)]">
                      Name
                    </span>
                    <input
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="w-full rounded-xl border border-[var(--color-mas-border)] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-all focus:border-[var(--color-mas-cyan)]/50"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-mas-text-muted)]">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full rounded-xl border border-[var(--color-mas-border)] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-all focus:border-[var(--color-mas-cyan)]/50"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-mas-text-muted)]">
                    Project Details
                  </span>
                  <textarea
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={7}
                    className="w-full resize-none rounded-xl border border-[var(--color-mas-border)] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-all focus:border-[var(--color-mas-cyan)]/50"
                    placeholder="Tell us about your website, app, AI automation, data, cloud, security, design, or marketing goals."
                  />
                </label>
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-ripple group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-mas-cyan)] px-8 py-3.5 text-sm font-bold text-[var(--color-mas-bg)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_var(--color-mas-cyan-glow)] disabled:opacity-60"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {state === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                    Send on WhatsApp
                  </span>
                </button>
              </form>
            )}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
