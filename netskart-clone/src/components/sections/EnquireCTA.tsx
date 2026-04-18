import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'

export default function EnquireCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-navy rounded-3xl overflow-hidden px-8 py-14 lg:px-16 lg:py-20">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-teal/10 blur-3xl" />
          <div className="absolute inset-0 grid-texture opacity-10" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <div className="inline-block text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/20 px-3 py-1 rounded-full mb-5">
                Get Started Today
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to protect<br />
                your space with<br />
                <span className="text-brand-orange">ProNet®?</span>
              </h2>
              <p className="text-white/60 text-lg mt-4 leading-relaxed">
                Free consultation · Free site visit · Free measurement.<br />
                Our experts are standing by.
              </p>
            </div>

            {/* Right: contact cards */}
            <div className="space-y-4">
              {/* Enquire form card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-semibold text-lg mb-1">Request a Callback</h3>
                <p className="text-white/50 text-sm mb-4">Fill the form and we'll call you within 2 hours.</p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="flex-1 bg-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm border border-white/20 focus:outline-none focus:border-brand-orange"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="flex-1 bg-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm border border-white/20 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <Link
                  href="/enquire"
                  className="mt-3 w-full flex items-center justify-center gap-2 bg-brand-orange text-white font-semibold py-3 rounded-xl hover:bg-brand-orange-dark transition-colors text-sm"
                >
                  Request Free Consultation <ArrowRight size={15} />
                </Link>
              </div>

              {/* Direct contact */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Call Us</div>
                    <div className="text-sm font-semibold">+91 98765 43210</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500/20 text-white p-4 rounded-xl border border-green-500/20 hover:bg-green-500/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-500/30 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">WhatsApp</div>
                    <div className="text-sm font-semibold">Chat Now</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
