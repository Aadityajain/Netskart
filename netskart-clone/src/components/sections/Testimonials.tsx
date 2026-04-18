'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/data'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1))
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1))

  return (
    <section className="py-20 bg-white overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full mb-3">
            Customer Stories
          </div>
          <h2 className="section-title">Trusted by Thousands</h2>
          <p className="section-subtitle mx-auto mt-2">
            Real experiences from homeowners, businesses and facility managers across India.
          </p>
        </div>

        {/* Desktop: all cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="lg:hidden">
          <TestimonialCard testimonial={TESTIMONIALS[active]} />
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-brand-orange w-5' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-brand-orange text-brand-orange" />
            ))}
            <span className="text-gray-500 text-sm ml-2">4.8 average from 1,200+ verified reviews</span>
          </div>
          <a
            href="https://g.co/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange text-sm font-semibold hover:underline"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-warm rounded-2xl p-6 border border-gray-100 relative">
      <Quote size={32} className="text-brand-orange/20 absolute top-5 right-5" />
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={13}
            className={i < testimonial.rating ? 'fill-brand-orange text-brand-orange' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-5">"{testimonial.text}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <div className="w-10 h-10 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-brand-navy text-sm">{testimonial.name}</div>
          <div className="text-xs text-gray-500">{testimonial.location}</div>
        </div>
        <div className="ml-auto text-[10px] font-medium text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full">
          {testimonial.product}
        </div>
      </div>
    </div>
  )
}
