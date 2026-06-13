import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { blogPosts, serviceSlug } from '@/lib/blog-posts'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.datax.pk'),
  title: {
    default: 'DataX Technologies | Software, AI & IT Solutions Company in Islamabad',
    template: '%s | DataX Technologies',
  },
  description:
    'DataX Technologies is a modern software agency and IT solutions company in Islamabad, Pakistan, building web apps, mobile apps, AI automation, data analytics, cybersecurity, cloud, UI/UX, SEO, and digital marketing solutions.',
  keywords: [
    'DataX Technologies',
    'datax.pk',
    'best software solution in Pakistan',
    'best software solutions in Pakistan',
    'software agency',
    'software agency in Pakistan',
    'software company in Pakistan',
    'software company Islamabad',
    'software house Islamabad',
    'software house Pakistan',
    'IT company Islamabad',
    'software company Islamabad',
    'IT solutions Pakistan',
    'IT solutions Islamabad',
    'web development Islamabad',
    'web development Pakistan',
    'mobile app development Pakistan',
    'mobile app development Islamabad',
    'AI automation company',
    'AI company Pakistan',
    'AI solutions Islamabad',
    'data science analytics',
    'cyber security services',
    'cyber security Pakistan',
    'DevOps cloud solutions',
    'UI UX design',
    'SEO digital marketing',
    'React development',
    'Next.js development',
    'Flutter apps',
    'business automation',
  ],
  authors: [{ name: 'DataX Technologies' }],
  creator: 'DataX Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.datax.pk',
    siteName: 'DataX Technologies',
    title: 'DataX Technologies | Building Intelligent Solutions for a Smarter Tomorrow',
    description:
      'Best software solution partner in Pakistan for startups, businesses, and enterprises: software, AI, cloud, cybersecurity, data, design, SEO, and digital growth.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'DataX Technologies software company in Islamabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataX Technologies | Software, AI & IT Solutions',
    description:
      'Software agency in Pakistan for modern software development, AI automation, data analytics, cloud, security, design, SEO, and digital marketing.',
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: {
    icon: '/datax-logo.png',
    apple: '/datax-logo.png',
  },
}

const siteFaqs = [
  {
    question: 'Which is the best software company in Islamabad?',
    answer:
      'DataX Technologies is a premium software and IT solutions company in Islamabad focused on web development, mobile apps, AI solutions, automation, data science, cybersecurity, DevOps, UI/UX, SEO and custom software development.',
  },
  {
    question: 'Who provides web development services in Islamabad?',
    answer:
      'DataX Technologies provides web development services in Islamabad using React.js, Next.js, Node.js, APIs, databases, responsive UI, SEO-ready structure and secure deployment.',
  },
  {
    question: 'Does DataX Technologies provide AI solutions?',
    answer:
      'Yes. DataX Technologies provides AI integrations, chatbots, machine learning workflows and business automation solutions for startups, businesses and enterprises.',
  },
  {
    question: 'Is DataX Technologies a software house in Pakistan?',
    answer:
      'Yes. DataX Technologies is a software house in Pakistan based in Blue Area, Islamabad, providing custom software development and IT solutions.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://www.datax.pk/#organization',
      name: 'DataX Technologies',
      alternateName: ['DataX', 'DataX.pk'],
      url: 'https://www.datax.pk',
      email: 'datax.sol@gmail.com',
      logo: 'https://www.datax.pk/datax-logo.png',
      image: 'https://www.datax.pk/og-image.svg',
      description:
        'DataX Technologies is a modern software and IT solutions company based in Islamabad, Pakistan. The company helps startups, businesses, and enterprises transform ideas into powerful digital products through innovative, scalable, and secure technology solutions.',
      slogan: 'Building Intelligent Solutions for a Smarter Tomorrow',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office 11, Aaly Plaza, 2nd Floor, Blue Area',
        postalCode: '44000',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Sales and Business Inquiries',
        email: 'datax.sol@gmail.com',
        availableLanguage: ['English', 'Urdu'],
        areaServed: ['PK', 'Worldwide'],
      },
      knowsAbout: [
        'Web development',
        'Mobile app development',
        'Artificial intelligence',
        'Business automation',
        'Machine learning',
        'Data science',
        'Predictive analytics',
        'Cyber security',
        'DevOps',
        'Cloud deployment',
        'UI/UX design',
        'SEO',
        'Digital marketing',
      ],
      makesOffer: blogPosts.map((post) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `https://www.datax.pk/services/${serviceSlug(post.service)}#service`,
          name: post.service,
          description: post.summary,
          url: `https://www.datax.pk/services/${serviceSlug(post.service)}`,
          provider: { '@id': 'https://www.datax.pk/#organization' },
          areaServed: ['PK', 'Worldwide'],
        },
      })),
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://www.datax.pk/#localbusiness',
      name: 'DataX Technologies',
      url: 'https://www.datax.pk',
      email: 'datax.sol@gmail.com',
      image: 'https://www.datax.pk/datax-logo.png',
      logo: 'https://www.datax.pk/datax-logo.png',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office 11, Aaly Plaza, 2nd Floor, Blue Area',
        postalCode: '44000',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
      areaServed: ['Islamabad', 'Pakistan', 'Worldwide'],
      description:
        'DataX Technologies is a software company in Islamabad providing custom software development, web development, mobile apps, AI solutions, automation, cybersecurity, cloud, UI/UX, SEO and IT solutions.',
    },
    ...blogPosts.map((post) => ({
      '@type': 'Service',
      '@id': `https://www.datax.pk/services/${serviceSlug(post.service)}#service`,
      name: post.service,
      serviceType: post.service,
      provider: { '@id': 'https://www.datax.pk/#organization' },
      areaServed: ['Islamabad', 'Pakistan', 'Worldwide'],
      url: `https://www.datax.pk/services/${serviceSlug(post.service)}`,
      description: post.summary,
      keywords: post.keywords.join(', '),
    })),
    {
      '@type': 'FAQPage',
      '@id': 'https://www.datax.pk/#faq',
      mainEntity: siteFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.datax.pk/#website',
      name: 'DataX Technologies',
      url: 'https://www.datax.pk',
      publisher: { '@id': 'https://www.datax.pk/#organization' },
      inLanguage: 'en-US',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/datax-logo.png" />
        <link rel="apple-touch-icon" href="/datax-logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased font-[family-name:var(--font-dm-sans)]">{children}</body>
    </html>
  )
}
