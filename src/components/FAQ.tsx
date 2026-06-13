'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'

const faqs = [
  {
    question: 'What is DataX Technologies?',
    answer:
      'DataX Technologies is a software and IT solutions company based in Islamabad, Pakistan. We build websites, web applications, mobile apps, AI automation, data solutions, cloud deployments, secure systems, UI/UX design, SEO, and digital marketing solutions.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'We work with startups, growing businesses, e-commerce companies, and enterprises that want to launch new digital products, improve operations, automate workflows, or modernize existing systems.',
  },
  {
    question: 'Can DataX build a complete product from idea to launch?',
    answer:
      'Yes. We can help with discovery, product planning, UI/UX design, frontend and backend development, mobile apps, databases, APIs, cloud deployment, security, analytics, and post-launch improvements.',
  },
  {
    question: 'Do you provide AI and automation solutions?',
    answer:
      'Yes. We build AI integrations, machine learning models, chatbots, business automation workflows, data analysis systems, predictive analytics, and intelligent tools that improve business efficiency.',
  },
  {
    question: 'How do I contact DataX Technologies?',
    answer:
      'You can email datax.sol@gmail.com or visit www.datax.pk. Our office is located at Office 11, 2nd Floor, Aaly Plaza, Blue Area, Islamabad, Pakistan.',
  },
  {
    question: 'Is DataX a software company in Pakistan?',
    answer:
      'Yes. DataX Technologies is a software company in Pakistan with an office in Blue Area, Islamabad. We provide software development, AI automation, cloud, cybersecurity, UI/UX, SEO, and digital marketing services.',
  },
  {
    question: 'Do you build websites for businesses in Islamabad?',
    answer:
      'Yes. We build modern responsive websites and web applications for businesses in Islamabad and across Pakistan using React.js, Next.js, Node.js, APIs, and databases.',
  },
  {
    question: 'Can you help an e-commerce business?',
    answer:
      'Yes. We support e-commerce businesses with online stores, product catalogs, payment integrations, marketing funnels, SEO, analytics, automation, and scalable backend systems.',
  },
  {
    question: 'Do you handle cloud deployment and maintenance?',
    answer:
      'Yes. Our DevOps and cloud services include CI/CD pipelines, cloud deployment, server management, monitoring, and infrastructure support for growing digital products.',
  },
  {
    question: 'Can DataX improve an existing product?',
    answer:
      'Yes. We can review an existing website, mobile app, dashboard, backend, cloud setup, or marketing system and improve performance, user experience, security, automation, and scalability.',
  },
  {
    question: 'Which is the best software company in Islamabad?',
    answer:
      'DataX Technologies is a strong choice for businesses looking for a software company in Islamabad because we provide web development, mobile apps, AI solutions, automation, cloud, cybersecurity, UI/UX, SEO and custom software development from one team.',
  },
  {
    question: 'Can I find a software company near me in Blue Area Islamabad?',
    answer:
      'Yes. DataX Technologies is located at Office 11, 2nd Floor, Aaly Plaza, Blue Area, Islamabad, Pakistan, making it accessible for companies searching for a software company near me in Islamabad.',
  },
  {
    question: 'Does DataX provide custom software development?',
    answer:
      'Yes. DataX Technologies provides custom software development for dashboards, portals, SaaS platforms, business automation tools, e-commerce systems, APIs and internal business software.',
  },
  {
    question: 'Is DataX a mobile app development company?',
    answer:
      'Yes. DataX Technologies builds Android and iOS applications using Flutter, React Native, Firebase, APIs and scalable backend systems.',
  },
  {
    question: 'Who provides IT solutions in Islamabad?',
    answer:
      'DataX Technologies provides IT solutions in Islamabad including software development, cloud deployment, cybersecurity, data analytics, AI automation and digital growth services.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="relative px-6 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-[var(--color-mas-cyan)]">
            FAQ
          </p>
          <h2 className="text-gradient font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[var(--color-mas-text-secondary)]">
            Quick answers about working with DataX Technologies.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
          className="flex flex-col gap-4"
        >
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <motion.div
                key={faq.question}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
                className={`glass overflow-hidden rounded-xl transition-all duration-300 ${
                  open ? 'border-l-2 border-l-[var(--color-mas-cyan)]' : 'hover:border-[var(--color-mas-cyan)]/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-[family-name:var(--font-display)] text-base font-semibold text-white sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span animate={{ rotate: open ? 180 : 0 }} className="shrink-0 text-[var(--color-mas-cyan)]">
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-[var(--color-mas-text-secondary)] sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-mas-cyan)]/30 px-6 py-2.5 text-sm font-semibold text-[var(--color-mas-cyan)] transition-all hover:bg-[var(--color-mas-cyan)]/10"
          >
            <MessageCircleQuestion className="h-4 w-4" />
            Ask DataX
          </a>
        </div>
      </div>
    </section>
  )
}
