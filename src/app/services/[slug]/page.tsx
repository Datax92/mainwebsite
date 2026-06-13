import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, BarChart3, CheckCircle2, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientOverlays from '@/components/ClientOverlays'
import { blogPosts, getServicePost, serviceSlug } from '@/lib/blog-posts'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: serviceSlug(post.service) }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getServicePost(slug)
  if (!post) return {}

  return {
    title: `${post.service} | DataX Technologies Islamabad`,
    description: post.summary,
    keywords: post.keywords,
    alternates: { canonical: `/services/${serviceSlug(post.service)}` },
    openGraph: {
      title: `${post.service} by DataX Technologies`,
      description: post.summary,
      url: `https://www.datax.pk/services/${serviceSlug(post.service)}`,
      type: 'website',
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const post = getServicePost(slug)
  if (!post) notFound()

  const whatsappText = encodeURIComponent(
    `Hello DataX Technologies, I need ${post.service}. Please guide me about the process and estimate.`
  )

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: post.service,
    serviceType: post.service,
    provider: {
      '@type': 'Organization',
      name: 'DataX Technologies',
      url: 'https://www.datax.pk',
      email: 'datax.sol@gmail.com',
    },
    areaServed: ['Islamabad', 'Pakistan', 'Worldwide'],
    description: post.summary,
    keywords: post.keywords.join(', '),
  }

  return (
    <>
      <ClientOverlays />
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <main className="relative z-[2] px-6 pb-20 pt-32">
        <article className="mx-auto max-w-6xl">
          <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-mas-cyan)]">
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>

          <header className="mb-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--color-mas-cyan)]">
                Software Company in Islamabad
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                {post.service} Services by DataX Technologies
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-mas-text-secondary)]">
                {post.summary}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/[0.045] p-6">
              <BarChart3 className="mb-4 h-7 w-7 text-[var(--color-mas-cyan)]" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Built for ranking, speed and scale.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                Every DataX service combines strategy, clean UI, secure engineering, performance,
                analytics and launch support.
              </p>
            </div>
          </header>

          <section className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="glass rounded-xl p-6">
              <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                What We Deliver
              </h2>
              <ul className="space-y-3">
                {post.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[var(--color-mas-text-secondary)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-mas-cyan)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-xl p-6">
              <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {post.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/8 px-4 py-2 text-sm text-[var(--color-mas-cyan)]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-10 glass rounded-xl p-6 md:p-8">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              {post.chartTitle}
            </h2>
            <div className="space-y-5">
              {post.chart.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-[var(--color-mas-text-secondary)]">{item.label}</span>
                    <span className="font-[family-name:var(--font-mono)] text-[var(--color-mas-cyan)]">{item.value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full rounded-full bg-gradient-to-r from-[var(--color-mas-cyan)] to-blue-500" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {post.overview.map((paragraph, index) => (
              <div key={paragraph} className="glass rounded-xl p-6">
                <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                  {index === 0 ? 'Why It Matters' : index === 1 ? 'How DataX Builds It' : 'Why Choose DataX'}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">{paragraph}</p>
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-[var(--color-mas-cyan)]/25 bg-[var(--color-mas-cyan)]/[0.06] p-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Start your {post.service} project.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
              Message DataX Technologies on WhatsApp and tell us what you want to build. We will
              guide you with the best software solution for your business.
            </p>
            <a
              href={`https://wa.me/923135506623?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 text-sm font-bold text-black"
            >
              <MessageCircle className="h-4 w-4" />
              Discuss on WhatsApp
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
