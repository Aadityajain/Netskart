'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown, ShoppingCart } from 'lucide-react'
import { NAV_LINKS } from '@/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-navy text-white text-xs py-2 px-4 text-center">
        <span>🚚 Free delivery & installation in Mumbai, Delhi, Bangalore, Pune & 11 more cities&nbsp;·&nbsp;</span>
        <a href="tel:+919876543210" className="underline font-semibold">Call: +91 98765 43210</a>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center shadow-orange group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-sm font-display">N</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl text-brand-navy tracking-tight">Netskart</span>
                <span className="text-[10px] text-brand-orange font-semibold tracking-widest uppercase">ProNet®</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-brand-navy rounded-lg hover:bg-warm hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} className="opacity-60" />}
                  </Link>

                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="bg-white rounded-xl shadow-card-hover border border-gray-100 py-2 min-w-[200px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-warm hover:text-brand-orange transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/40" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-brand-navy font-medium hover:text-brand-orange transition-colors"
              >
                <Phone size={15} />
                <span>Get a Quote</span>
              </a>
              <Link href="/enquire" className="btn-primary text-sm py-2.5 px-5">
                Enquire Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-warm transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-brand-navy font-medium hover:bg-warm hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-orange transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <Link href="/enquire" className="btn-primary w-full justify-center" onClick={() => setIsOpen(false)}>
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
