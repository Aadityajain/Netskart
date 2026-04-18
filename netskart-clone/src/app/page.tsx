import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import ProblemNav from '@/components/sections/ProblemNav'
import ProductsSection from '@/components/sections/ProductsSection'
import HowItWorks from '@/components/sections/HowItWorks'
import StatsSection from '@/components/sections/StatsSection'
import WhyUs from '@/components/sections/WhyUs'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import EnquireCTA from '@/components/sections/EnquireCTA'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemNav />
        <ProductsSection />
        <StatsSection />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <EnquireCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
