import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CredentialsSection from '@/components/CredentialsSection'
import EnterpriseServices from '@/components/EnterpriseServices'
import CredibilitySection from '@/components/CredibilitySection'
import ContactSection from '@/components/ContactSection'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import ClientOverlays from '@/components/ClientOverlays'
import ServiceBlogs from '@/components/ServiceBlogs'

export default function HomePage() {
  return (
    <SmoothScroll>
      <ClientOverlays />
      <Navbar />
      <main className="relative z-[2]" style={{ background: 'transparent' }}>
        <div id="hero">
          <Hero />
        </div>

        <div className="w-[60%] mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

        <section id="enterprise" className="relative enterprise-grid-bg" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(0,200,255,0.05) 0%, transparent 55%)' }}>
          <EnterpriseServices />
        </section>

        <div className="w-[60%] mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

        <section id="solutions" className="relative" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(0,200,255,0.04) 0%, transparent 50%)' }}>
          <CredentialsSection />
        </section>

        <div className="w-[60%] mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

        <section id="credibility" className="relative">
          <CredibilitySection />
        </section>

        <div className="w-[60%] mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

        <section id="insights" className="relative">
          <ServiceBlogs />
        </section>

        <div className="w-[60%] mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

        <section id="contact" className="relative">
          <ContactSection />
        </section>

        <div className="w-[60%] mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

        <section id="faq" className="relative">
          <FAQ />
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
