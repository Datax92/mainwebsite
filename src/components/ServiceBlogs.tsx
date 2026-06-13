'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react'
import Link from 'next/link'

const posts = [
  {
    slug: 'web-development-services-pakistan',
    title: 'How a Modern Website Becomes a Growth Engine',
    service: 'Web Development',
    read: '4 min read',
    excerpt:
      'Responsive design, fast performance, SEO structure, secure APIs, and analytics turn a website into a measurable business asset.',
  },
  {
    slug: 'mobile-app-development-islamabad',
    title: 'Choosing the Right Mobile App Stack',
    service: 'Mobile App Development',
    read: '5 min read',
    excerpt:
      'Flutter, React Native, and Firebase can shorten delivery while keeping Android and iOS experiences smooth, maintainable, and scalable.',
  },
  {
    slug: 'ai-automation-company-pakistan',
    title: 'AI Automation That Actually Saves Time',
    service: 'AI & Automation',
    read: '6 min read',
    excerpt:
      'Useful automation starts with repeatable workflows, clean data, human review points, and integrations that fit the way your team works.',
  },
  {
    slug: 'data-science-analytics-services',
    title: 'From Raw Data to Better Business Decisions',
    service: 'Data Science & Analytics',
    read: '5 min read',
    excerpt:
      'Dashboards, data analysis, machine learning models, and predictive analytics help teams understand trends before they become problems.',
  },
  {
    slug: 'cyber-security-services-pakistan',
    title: 'Security Should Start Before Launch',
    service: 'Cyber Security',
    read: '4 min read',
    excerpt:
      'Application security, secure development, and testing protect customer trust and reduce expensive fixes after your product is live.',
  },
  {
    slug: 'devops-cloud-solutions-islamabad',
    title: 'Reliable Cloud Delivery for Growing Products',
    service: 'DevOps & Cloud',
    read: '5 min read',
    excerpt:
      'CI/CD, cloud deployment, monitoring, and server management keep digital products stable while traffic and teams grow.',
  },
  {
    slug: 'ui-ux-design-services-pakistan',
    title: 'Why UI/UX Is Product Strategy',
    service: 'UI/UX Design',
    read: '3 min read',
    excerpt:
      'Great interfaces reduce friction, improve conversion, and make complex software feel simple through research, prototyping, and design systems.',
  },
  {
    slug: 'seo-digital-marketing-pakistan',
    title: 'SEO and Content for Software Companies',
    service: 'SEO & Digital Marketing',
    read: '4 min read',
    excerpt:
      'Technical SEO, content strategy, and social media marketing help businesses reach the right customers with compounding visibility.',
  },
]

const keywordGroups = [
  {
    title: 'Software Company Keywords',
    words: [
      'best software solution in Pakistan',
      'software agency in Pakistan',
      'software company in Pakistan',
      'software house Islamabad',
      'IT solutions Islamabad',
      'custom software development Pakistan',
      'software development company Islamabad',
      'business software solutions',
    ],
  },
  {
    title: 'Web & App Development',
    words: [
      'web development Islamabad',
      'React.js development',
      'Next.js website development',
      'Node.js API development',
      'mobile app development Pakistan',
      'Flutter app development',
      'React Native apps',
      'Firebase application development',
    ],
  },
  {
    title: 'AI, Data & Automation',
    words: [
      'AI automation company Pakistan',
      'AI chatbot development',
      'machine learning solutions',
      'business automation Islamabad',
      'data science services',
      'predictive analytics',
      'data analysis Pakistan',
      'AI integration services',
    ],
  },
  {
    title: 'Cloud, Security & Growth',
    words: [
      'cyber security services Pakistan',
      'application security testing',
      'DevOps cloud deployment',
      'CI/CD pipeline setup',
      'server management Islamabad',
      'UI UX design Pakistan',
      'SEO services Islamabad',
      'digital marketing Pakistan',
    ],
  },
]

const serviceDescriptions = [
  {
    service: 'Web Development',
    description:
      'DataX Technologies builds responsive websites, SaaS platforms, admin dashboards, e-commerce systems, landing pages, portals, APIs, and database-driven web applications for Pakistani and international businesses.',
  },
  {
    service: 'Mobile App Development',
    description:
      'Our mobile app development service covers Android apps, iOS apps, cross-platform Flutter apps, React Native apps, Firebase backends, push notifications, authentication, analytics, and app launch support.',
  },
  {
    service: 'AI & Automation',
    description:
      'We help companies automate repetitive workflows with AI chatbots, AI integrations, machine learning, document processing, customer support automation, reporting flows, and intelligent business assistants.',
  },
  {
    service: 'SEO & Digital Marketing',
    description:
      'DataX supports online growth with technical SEO, keyword strategy, content planning, social media marketing, conversion-focused landing pages, local SEO, and analytics tracking.',
  },
]

export default function ServiceBlogs() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--color-mas-cyan)]">
              Service Insights
            </p>
            <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Practical thinking for every service we deliver.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--color-mas-text-secondary)] md:text-base">
            Blog-style resources that explain how DataX approaches product quality, speed,
            security, automation, and growth.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {posts.map((post) => (
            <motion.div
              key={post.title}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="group glass rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-mas-cyan)]/35"
            >
              <Link href={`/blog/${post.slug}`} className="block p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/8 px-3 py-1 text-[11px] font-semibold text-[var(--color-mas-cyan)]">
                    <BookOpen className="h-3.5 w-3.5" />
                    {post.service}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--color-mas-text-muted)] transition-colors group-hover:text-[var(--color-mas-cyan)]" />
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-white">
                  {post.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--color-mas-text-muted)]">
                  <Clock className="h-3.5 w-3.5" />
                  {post.read}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-4">
          {keywordGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-[var(--color-mas-cyan)]/15 bg-[var(--color-mas-cyan)]/[0.035] p-5">
              <h3 className="mb-4 font-[family-name:var(--font-display)] text-base font-semibold text-white">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.words.map((word) => (
                  <span key={word} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-[var(--color-mas-text-muted)]">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {serviceDescriptions.map((item) => (
            <article key={item.service} className="glass rounded-xl p-6">
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                {item.service} Services in Pakistan
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
