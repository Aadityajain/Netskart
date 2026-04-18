import { Factory, Clock, ShieldCheck, Headphones, MapPin, Award } from 'lucide-react'

const USPS = [
  {
    Icon: Factory,
    title: 'Factory Direct',
    description: 'No middlemen. We manufacture every net ourselves, so you get premium quality at wholesale prices.',
  },
  {
    Icon: Clock,
    title: '24–48 Hr Dispatch',
    description: 'Standard sizes ship within 24 hours. Custom orders cut and dispatched within 48 hours.',
  },
  {
    Icon: ShieldCheck,
    title: 'BIS & ISO Certified',
    description: 'Every batch is tested and certified. We provide full compliance documentation on request.',
  },
  {
    Icon: Headphones,
    title: 'Post-Install Support',
    description: 'Our technicians are on-call for adjustments, repairs or replacements within the warranty period.',
  },
  {
    Icon: MapPin,
    title: 'Pan-India Coverage',
    description: 'Installation teams in 15+ cities. Supply to all pin codes across India via our logistics partners.',
  },
  {
    Icon: Award,
    title: '5-Year Warranty',
    description: 'Industry-leading warranty on both materials and workmanship — we stand behind every install.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <div className="inline-block text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full mb-4">
              Why Netskart
            </div>
            <h2 className="section-title">
              Built Different,<br />
              <span className="text-brand-orange">Backed by Quality</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 leading-relaxed">
              From a factory floor in Navi Mumbai to 50,000+ installations across India — 
              Netskart is built on precision engineering and obsessive customer service.
            </p>

            {/* Visual highlight box */}
            <div className="mt-8 bg-brand-navy rounded-2xl p-6 text-white">
              <div className="font-display text-3xl font-bold text-brand-orange mb-1">₹0</div>
              <div className="font-semibold text-lg mb-2">Site Visit & Measurement</div>
              <p className="text-white/60 text-sm">
                We send our technician to your property for a free assessment — 
                no hidden charges, no obligations.
              </p>
              <a href="/enquire" className="inline-flex items-center gap-2 mt-4 bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-orange-dark transition-colors">
                Book Free Visit →
              </a>
            </div>
          </div>

          {/* Right: USP grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {USPS.map(({ Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  <Icon size={20} className="text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-base mb-1.5">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
