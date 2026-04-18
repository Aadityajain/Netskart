import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { STATS } from '@/data'
import Link from 'next/link'

export const metadata = {
  title: 'About Us — Netskart ProNet®',
  description: 'The story behind India\'s leading factory-direct protective netting brand.',
}

const TEAM = [
  { name: 'Aakash Mehta', role: 'Founder & CEO', initials: 'AM', bg: 'bg-brand-orange' },
  { name: 'Priyanka Rao', role: 'Head of Operations', initials: 'PR', bg: 'bg-brand-teal' },
  { name: 'Vikram Singh', role: 'Head of Manufacturing', initials: 'VS', bg: 'bg-brand-navy' },
  { name: 'Nisha Kapoor', role: 'Customer Success Lead', initials: 'NK', bg: 'bg-purple-500' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-brand-navy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Our Story</h1>
            <p className="text-white/60 text-lg mt-3 max-w-2xl mx-auto">
              From a small factory in Navi Mumbai to protecting 50,000+ homes and businesses across India.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-warm rounded-3xl p-8 md:p-12 border border-gray-100 mb-10">
                <div className="text-4xl mb-4">🏭</div>
                <h2 className="font-display text-3xl font-bold text-brand-navy mb-4">Born from a Real Problem</h2>
                <p className="text-gray-600 leading-relaxed">
                  Netskart began in 2018 when our founder Aakash Mehta, tired of pigeons destroying his Mumbai apartment's balcony, 
                  couldn't find a reliable, affordable, professionally installed net solution. The options available were either 
                  flimsy hardware-store rolls with no support, or overpriced contractors with no quality guarantee.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  So he built one himself. Starting with a 2,000 sq ft manufacturing unit in MIDC Turbhe, Navi Mumbai, 
                  Netskart launched the ProNet® brand — factory-direct, BIS-certified netting with end-to-end 
                  installation and a 5-year warranty. The product sold out in the first month.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Today, we operate out of a 25,000 sq ft facility, serve 15+ cities with 120+ certified installers, 
                  and have protected over 50,000 homes, businesses, construction sites and sports facilities.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-3xl font-bold text-brand-orange">{value}</div>
                  <div className="text-gray-500 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Team */}
            <h2 className="font-display text-3xl font-bold text-brand-navy text-center mb-8">The Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {TEAM.map(({ name, role, initials, bg }) => (
                <div key={name} className="text-center">
                  <div className={`w-20 h-20 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-xl font-display">{initials}</span>
                  </div>
                  <div className="font-semibold text-brand-navy text-sm">{name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-warm text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-brand-navy">Join 50,000+ Protected Spaces</h2>
            <p className="text-gray-500 mt-3 mb-7">Get your free site assessment today — no commitment required.</p>
            <Link href="/enquire" className="btn-primary">Get Free Quote →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
