import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle2, MessageCircle, Search } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientOverlays from '@/components/ClientOverlays'
import { blogPosts, getBlogPost } from '@/lib/blog-posts'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} | DataX Technologies Blog`,
    description: post.summary,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | DataX Technologies`,
      description: post.summary,
      url: `https://www.datax.pk/blog/${post.slug}`,
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const whatsappText = encodeURIComponent(
    `Hello DataX Technologies, I read your article "${post.title}" and want to discuss ${post.service}.`
  )

  return (
    <>
      <ClientOverlays />
      <Navbar />
      <main className="relative z-[2] px-6 pb-20 pt-32">
        <article className="mx-auto max-w-5xl">
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-mas-cyan)]">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <header className="mb-12">
            <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--color-mas-cyan)]">
              {post.service}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-mas-text-secondary)]">
              {post.summary}
            </p>
          </header>

          <section className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="glass rounded-xl p-6 md:col-span-2">
              <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Overview
              </h2>
              <div className="space-y-4">
                {post.overview.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-[var(--color-mas-text-secondary)]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/[0.045] p-6">
              <Search className="mb-4 h-6 w-6 text-[var(--color-mas-cyan)]" />
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                SEO Keywords
              </h2>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-[var(--color-mas-text-secondary)]">
                    {keyword}
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
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--color-mas-cyan)] to-blue-500 shadow-[0_0_18px_rgba(19,200,255,0.28)]"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="glass rounded-xl p-6">
              <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Deliverables
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
                Tools & Technologies
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
              Questions About {post.service}
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {post.faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[var(--color-mas-cyan)]/25 bg-[var(--color-mas-cyan)]/[0.06] p-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Need {post.service} for your business?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
              Message DataX Technologies on WhatsApp and share your project details. We will help
              you choose the right software solution for your budget, timeline, and growth plan.
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
