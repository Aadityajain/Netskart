import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Enquire Now — Netskart ProNet®',
  description: 'Get a free quote and consultation for your netting requirements.',
}

const PRODUCT_OPTIONS = [
  'Bird Net', 'Monkey Net', 'Safety Net', 'Shade Net',
  'Cricket Net', 'Anti-Bird Spikes', 'Custom / Other',
]

export default function EnquirePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-brand-navy py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Get a Free Quote</h1>
            <p className="text-white/60 text-lg mt-3 max-w-xl mx-auto">
              Fill in your details and we'll respond within 2 hours with a personalised quote.
            </p>
          </div>
        </section>

        <section className="py-16 bg-warm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              
              {/* Form */}
              <div className="lg:col-span-2 bg-white rounded-3xl shadow-card p-8">
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-6">Your Requirement</h2>
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">Full Name *</label>
                      <input type="text" placeholder="Rahul Sharma" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">Phone Number *</label>
                      <input type="tel" placeholder="+91 98765 43210" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Email Address</label>
                    <input type="email" placeholder="rahul@example.com" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">City / Location *</label>
                    <input type="text" placeholder="Mumbai, Maharashtra" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Product Interested In *</label>
                    <select className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors bg-white">
                      <option value="">Select a product...</option>
                      {PRODUCT_OPTIONS.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Area / Dimensions (approx.)</label>
                    <input type="text" placeholder="e.g. 10 ft × 8 ft balcony, or 3 cricket lanes" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Additional Requirements</label>
                    <textarea rows={4} placeholder="Tell us more about your problem or specific requirements..." className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors resize-none" />
                  </div>

                  <button className="btn-primary w-full justify-center py-4 text-base">
                    Submit Enquiry — It's Free
                  </button>
                  <p className="text-xs text-gray-400 text-center">No spam. We'll only contact you about your enquiry.</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                <div className="bg-white rounded-2xl shadow-card p-6">
                  <h3 className="font-display font-bold text-brand-navy mb-4">Contact Us Directly</h3>
                  <div className="space-y-4">
                    <a href="tel:+919876543210" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                        <Phone size={16} className="text-brand-orange group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Phone</div>
                        <div className="text-sm font-semibold text-brand-navy">+91 98765 43210</div>
                      </div>
                    </a>
                    <a href="https://wa.me/919876543210" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                        <MessageCircle size={16} className="text-green-500 group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">WhatsApp</div>
                        <div className="text-sm font-semibold text-brand-navy">Chat Now</div>
                      </div>
                    </a>
                    <a href="mailto:hello@netskart.in" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center group-hover:bg-brand-navy transition-colors">
                        <Mail size={16} className="text-brand-navy group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Email</div>
                        <div className="text-sm font-semibold text-brand-navy">hello@netskart.in</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-gray-500" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Factory</div>
                        <div className="text-sm text-brand-navy">Plot 42, MIDC Turbhe,<br />Navi Mumbai — 400705</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-orange rounded-2xl p-6 text-white">
                  <div className="font-display text-lg font-bold mb-1">⚡ Quick Response</div>
                  <p className="text-white/80 text-sm">We typically respond to enquiries within 2 business hours. For urgent needs, call us directly.</p>
                </div>

                <div className="bg-warm rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-semibold text-brand-navy text-sm mb-3">What happens next?</h4>
                  <ol className="space-y-2.5">
                    {[
                      'We review your requirement',
                      'A specialist calls you back',
                      'Free site measurement scheduled',
                      'Custom quote provided',
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-3 text-xs text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
