import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Megaphone,
  Palette,
  Smartphone,
  Sparkles,
  Server,
  Share2,
  BrainCircuit,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientOverlays from '@/components/ClientOverlays'

export const metadata: Metadata = {
  title: 'Careers | Summer Internships at DataX Technologies Islamabad',
  description:
    'DataX Technologies is hiring Summer Interns in Islamabad for frontend web development, backend development, AI engineering, SEO, UI/UX, Flutter mobile apps and social media management.',
  keywords: [
    'DataX Technologies careers',
    'summer internships Islamabad',
    'software internship Islamabad',
    'frontend internship Pakistan',
    'backend internship Islamabad',
    'AI internship Pakistan',
    'SEO internship Islamabad',
    'UI UX internship Pakistan',
    'Flutter internship Islamabad',
  ],
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Summer Internships at DataX Technologies',
    description:
      'Apply for hands-on internships in web development, AI, SEO, UI/UX, Flutter and social media management at DataX Technologies Islamabad.',
    url: 'https://www.datax.pk/careers',
    type: 'website',
  },
}

const positions = [
  {
    title: 'Frontend Web Development Intern',
    icon: Code2,
    skills: [
      'HTML, CSS, JavaScript fundamentals',
      'React.js / Next.js basic knowledge',
      'Responsive web design',
      'Bootstrap / Tailwind CSS',
      'API integration concepts',
      'Git & GitHub basics',
    ],
  },
  {
    title: 'Backend Web Development Intern',
    icon: Server,
    skills: [
      'Programming fundamentals',
      'Node.js / Express.js basics',
      'REST API development concepts',
      'Database basics (MongoDB / SQL)',
      'Authentication concepts',
      'Server-side application understanding',
    ],
  },
  {
    title: 'AI Engineer Intern',
    icon: BrainCircuit,
    skills: [
      'Python programming basics',
      'Machine Learning fundamentals',
      'Basic AI concepts',
      'Data preprocessing knowledge',
      'Understanding of datasets',
      'NumPy, Pandas, TensorFlow or Scikit-learn basics',
    ],
  },
  {
    title: 'SEO & Digital Marketing Intern',
    icon: Megaphone,
    skills: [
      'Search Engine Optimization basics',
      'Keyword research',
      'Website optimization concepts',
      'Content optimization',
      'Google tools knowledge',
      'Basic digital marketing understanding',
    ],
  },
  {
    title: 'UI/UX Design Intern',
    icon: Palette,
    skills: [
      'Design fundamentals',
      'Figma basics',
      'Wireframing & prototyping',
      'User experience understanding',
      'Creative thinking',
      'Basic knowledge of modern design trends',
    ],
  },
  {
    title: 'Mobile App Development Intern (Flutter)',
    icon: Smartphone,
    skills: [
      'Dart programming basics',
      'Flutter framework knowledge',
      'Mobile UI development',
      'API integration basics',
      'Firebase basics',
      'Cross-platform app concepts',
    ],
  },
  {
    title: 'Social Media Management Intern',
    icon: Share2,
    skills: [
      'Managing Facebook, LinkedIn & Instagram pages',
      'Content planning',
      'Post creation ideas',
      'Basic graphic design understanding',
      'Social media growth strategies',
      'Communication skills',
    ],
  },
]

const requirements = [
  'Currently pursuing or recently completed a degree in Computer Science, Software Engineering, IT, or a related field',
  'Strong problem-solving mindset',
  'Willingness to learn new technologies',
  'Ability to work with a team',
  'Creativity and passion for technology',
]

export default function CareersPage() {
  const subject = encodeURIComponent('Summer Internship Application - DataX Technologies')
  const body = encodeURIComponent(
    'Name:\nPhone:\nPosition Applied For:\nUniversity / Degree:\nPortfolio or GitHub / LinkedIn:\n\nShort introduction:'
  )
  const whatsappText = encodeURIComponent(
    'Hello DataX Technologies, I want to apply for a Summer Internship. Please guide me about the application process.'
  )

  const jobsJsonLd = positions.map((position) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: position.title,
    description: `${position.title} internship at DataX Technologies in Islamabad, Pakistan. Basic skills: ${position.skills.join(', ')}.`,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'DataX Technologies',
      sameAs: 'https://www.datax.pk',
      logo: 'https://www.datax.pk/datax-logo.png',
    },
    employmentType: 'INTERN',
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office 11, 2nd Floor, Aaly Plaza, Blue Area',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
    },
    validThrough: '2026-08-31',
  }))

  return (
    <>
      <ClientOverlays />
      <Navbar />
      {jobsJsonLd.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <main className="relative z-[2] px-6 pb-20 pt-32">
        <section className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-mas-cyan)]/25 bg-[var(--color-mas-cyan)]/8 px-4 py-2">
                <Sparkles className="h-4 w-4 text-[var(--color-mas-cyan)]" />
                <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wider text-[var(--color-mas-cyan)]">
                  Summer Internships Open
                </span>
              </div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Start your technology career at DataX Technologies.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-mas-text-secondary)]">
                DataX Technologies is looking for passionate and motivated Summer Interns to join
                our team in Islamabad. This internship provides hands-on experience with real-world
                projects, modern technologies and industry-level development practices.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:datax.sol@gmail.com?subject=${subject}&body=${body}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-mas-cyan)] px-7 py-3 text-sm font-bold text-[var(--color-mas-bg)]"
                >
                  Apply by Email
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`https://wa.me/923135506623?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-mas-cyan)]/30 px-7 py-3 text-sm font-semibold text-[var(--color-mas-cyan)]"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/[0.045] p-7">
              <BriefcaseBusiness className="mb-5 h-8 w-8 text-[var(--color-mas-cyan)]" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Company Description
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                DataX Technologies is a modern software and IT solutions company dedicated to
                transforming ideas into innovative digital experiences. We specialize in web
                development, mobile applications, artificial intelligence, automation, data science,
                cyber security, digital marketing and custom software solutions.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                Based in Islamabad, Pakistan, our mission is to help businesses grow through
                reliable, scalable and future-ready technology solutions.
              </p>
            </div>
          </div>

          <section className="mb-14">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Available Internship Positions
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {positions.map((position) => {
                const Icon = position.icon
                return (
                  <article key={position.title} className="glass rounded-xl p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/8">
                      <Icon className="h-6 w-6 text-[var(--color-mas-cyan)]" />
                    </div>
                    <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                      {position.title}
                    </h3>
                    <ul className="space-y-2">
                      {position.skills.map((skill) => (
                        <li key={skill} className="flex gap-2 text-sm text-[var(--color-mas-text-secondary)]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-mas-cyan)]" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass rounded-xl p-6">
              <h2 className="mb-5 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                General Requirements
              </h2>
              <ul className="space-y-3">
                {requirements.map((requirement) => (
                  <li key={requirement} className="flex gap-3 text-sm text-[var(--color-mas-text-secondary)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-mas-cyan)]" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[var(--color-mas-cyan)]/20 bg-[var(--color-mas-cyan)]/[0.045] p-6">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Role Description
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-mas-text-secondary)]">
                Selected candidates will work with team members, contribute to projects, improve
                technical skills and gain practical exposure in their respective fields. Join DataX
                Technologies and start building the future with innovation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/services" className="rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--color-mas-text-secondary)] hover:text-white">
                  Explore Services
                </Link>
                <a href="https://www.datax.pk" className="rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--color-mas-text-secondary)] hover:text-white">
                  www.datax.pk
                </a>
                <a href="mailto:datax.sol@gmail.com" className="rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--color-mas-text-secondary)] hover:text-white">
                  datax.sol@gmail.com
                </a>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
