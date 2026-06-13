import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientOverlays from '@/components/ClientOverlays'
import { blogPosts, serviceSlug } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Services | Software Development, AI, Cloud & SEO in Islamabad',
  description:
    'Explore DataX Technologies services: web development, mobile apps, AI automation, data science, cyber security, DevOps, UI/UX, SEO and custom software development in Islamabad, Pakistan.',
  keywords: [
    'software development services Islamabad',
    'web development agency Islamabad',
    'mobile app development company Pakistan',
    'AI company Pakistan',
    'IT solutions Islamabad',
    'custom software development company',
  ],
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <ClientOverlays />
      <Navbar />
      <main className="relative z-[2] px-6 pb-20 pt-32">
        <section className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--color-mas-cyan)]">
              DataX Services
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Custom software development, AI and IT solutions in Islamabad.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-mas-text-secondary)]">
              DataX Technologies helps startups, businesses and enterprises build premium digital
              products with secure engineering, scalable architecture and AI-first thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/services/${serviceSlug(post.service)}`}
                className="group glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-mas-cyan)]/40"
              >
                <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                  {post.service}
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                  {post.summary}
                </p>
                <ul className="mb-6 space-y-2">
                  {post.tools.slice(0, 4).map((tool) => (
                    <li key={tool} className="flex items-center gap-2 text-xs text-[var(--color-mas-text-muted)]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[var(--color-mas-cyan)]" />
                      {tool}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-mas-cyan)]">
                  View service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
