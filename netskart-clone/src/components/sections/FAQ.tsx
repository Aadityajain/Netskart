'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Do you provide installation services?',
    a: 'Yes! We provide professional installation services in Mumbai, Delhi, Bangalore, Pune, Chennai, Hyderabad and 9 more cities. Our certified technicians handle everything from measurement to final tensioning.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most residential installations (balcony, terrace) are completed in 2–4 hours. Larger commercial sites like cricket nets or construction safety nets may take 1–2 days. We\'ll give you an exact estimate after the site visit.',
  },
  {
    q: 'Can I order a custom size?',
    a: 'Absolutely. We manufacture nets to any dimension you require. Just share your measurements via our Custom Size page or call us — we\'ll cut and ship within 48 hours.',
  },
  {
    q: 'What warranty do you offer?',
    a: 'All ProNet® products come with a 5-year material warranty covering UV degradation, yarn breakage and corrosion. Installation workmanship is covered for 1 year, extendable with an annual maintenance contract.',
  },
  {
    q: 'Are your nets harmful to birds or animals?',
    a: 'No. Our nets are humane deterrents — they create a physical barrier without harming any animal. We use soft, knotted edges and do not use chemicals or electrical deterrents.',
  },
  {
    q: 'Do you ship pan-India?',
    a: 'Yes. We ship nets and spikes to all pin codes across India via our logistics partners. Delivery typically takes 3–5 business days for standard locations and 5–7 days for remote areas.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full mb-3">
            FAQ
          </div>
          <h2 className="section-title">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? 'border-brand-orange shadow-card' : 'border-gray-100'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-semibold text-sm sm:text-base transition-colors ${open === i ? 'text-brand-orange' : 'text-brand-navy'}`}>
                  {q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 ml-4 transition-transform duration-200 ${
                    open === i ? 'rotate-180 text-brand-orange' : 'text-gray-400'
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
