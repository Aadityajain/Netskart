import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, Twitter } from 'lucide-react'

const FOOTER_LINKS = {
  Products: [
    { label: 'Bird Net', href: '/products/bird-net' },
    { label: 'Monkey Net', href: '/products/monkey-net' },
    { label: 'Safety Net', href: '/products/safety-net' },
    { label: 'Shade Net', href: '/products/shade-net' },
    { label: 'Cricket Net', href: '/products/cricket-net' },
    { label: 'Anti-Bird Spikes', href: '/products/anti-bird-spikes' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Installation Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  Support: [
    { label: 'Enquire Now', href: '/enquire' },
    { label: 'Custom Size Quote', href: '/custom-size' },
    { label: 'Measure Guide', href: '/measure' },
    { label: 'Installation Tips', href: '/install' },
    { label: 'Warranty Claims', href: '/warranty' },
    { label: 'FAQ', href: '/faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* CTA Banner */}
      <div className="bg-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                Need a custom size or bulk order?
              </h3>
              <p className="text-white/80 mt-1">Our team will measure, quote and install — end to end.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/enquire" className="bg-white text-brand-orange font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors text-sm">
                Get Free Quote
              </Link>
              <a href="tel:+919876543210" className="border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">N</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">Netskart</div>
                <div className="text-[10px] text-brand-orange font-semibold tracking-widest uppercase">ProNet®</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              India's factory-direct protective netting brand. Quality certified, professionally installed, 
              trusted by 50,000+ homes and businesses nationwide.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-white/70 hover:text-brand-orange transition-colors">
                <Phone size={15} className="text-brand-orange" />
                +91 98765 43210
              </a>
              <a href="mailto:hello@netskart.in" className="flex items-center gap-3 text-sm text-white/70 hover:text-brand-orange transition-colors">
                <Mail size={15} className="text-brand-orange" />
                hello@netskart.in
              </a>
              <p className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={15} className="text-brand-orange mt-0.5 shrink-0" />
                Factory: Plot 42, MIDC Turbhe, Navi Mumbai — 400705
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 text-sm hover:text-brand-orange transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Netskart. All rights reserved. ProNet® is a registered trademark.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item) => (
              <Link key={item} href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
