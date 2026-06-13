import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, BookOpen, Clock, Search } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientOverlays from '@/components/ClientOverlays'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog | DataX Technologies Services, Software, AI & Digital Growth',
  description:
    'Read DataX Technologies blog articles about web development, mobile apps, AI automation, data science, cybersecurity, cloud, UI/UX, SEO, and digital marketing in Pakistan.',
  keywords: [
    'DataX blog',
    'software company blog Pakistan',
    'software agency in Pakistan',
    'web development blog',
    'AI automation Pakistan',
    'SEO services Islamabad',
  ],
}

export default function BlogPage() {
  return (
    <>
      <ClientOverlays />
      <Navbar />
      <main className="relative z-[2] px-6 pb-20 pt-32">
        <section className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--color-mas-cyan)]">
              DataX Blog
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Service guides for software, AI, cloud, security, design, and growth.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-mas-text-secondary)]">
              Detailed articles for startups, businesses, e-commerce brands, and enterprises looking
              for the best software solution in Pakistan.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              ['8', 'Detailed service pages'],
              ['40+', 'SEO keyword clusters'],
              ['100%', 'DataX focused content'],
            ].map(([value, label]) => (
              <div key={label} className="glass rounded-xl p-6">
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-mas-cyan)]">
                  {value}
                </div>
                <div className="mt-1 text-sm text-[var(--color-mas-text-secondary)]">{label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-mas-cyan)]/40"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/8 px-3 py-1 text-[11px] font-semibold text-[var(--color-mas-cyan)]">
                    <BookOpen className="h-3.5 w-3.5" />
                    {post.service}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[var(--color-mas-text-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-mas-cyan)]" />
                </div>
                <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-white">
                  {post.title}
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                  {post.summary}
                </p>
                <div className="mb-5 flex items-center gap-2 text-xs text-[var(--color-mas-text-muted)]">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.slice(0, 4).map((keyword) => (
                    <span key={keyword} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-[var(--color-mas-text-muted)]">
                      {keyword}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/[0.04] p-6">
              <Search className="mb-4 h-6 w-6 text-[var(--color-mas-cyan)]" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Keywords covered
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                Software company in Pakistan, software agency, software house Islamabad, best
                software solution in Pakistan, web development, mobile app development, AI
                automation, cybersecurity, cloud, UI/UX, SEO, and digital marketing.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/[0.04] p-6">
              <BarChart3 className="mb-4 h-6 w-6 text-[var(--color-mas-cyan)]" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Every article includes charts
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                Each blog subpage includes a service chart, deliverables, tools, FAQs, and a direct
                WhatsApp CTA for project discussions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
