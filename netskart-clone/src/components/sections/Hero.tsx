'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react'
import { PROBLEMS } from '@/data'

export default function Hero() {
  const [hoveredProblem, setHoveredProblem] = useState<number | null>(null)

  return (
    <section className="hero-bg relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          
          {/* Left: Text + CTA */}
          <div className="order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange text-xs font-semibold px-4 py-2 rounded-full mb-6 badge-pulse">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              India's #1 Factory-Direct Netting Brand
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
              Protect What{' '}
              <span className="relative inline-block text-brand-orange">
                Matters
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8 Q100 2 198 8" stroke="#E8612A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
                </svg>
              </span>
              <br />
              with <span className="text-brand-teal">ProNet®</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
              Premium bird nets, monkey nets, safety nets, shade nets and cricket nets — 
              manufactured in India, delivered to your door, installed by experts.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-6 mt-8">
              {[
                { v: '50K+', l: 'Installs' },
                { v: '4.8★', l: 'Rating' },
                { v: '15+', l: 'Cities' },
              ].map(({ v, l }) => (
                <div key={l} className="text-center">
                  <div className="font-display font-bold text-2xl text-brand-navy">{v}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{l}</div>
                </div>
              ))}
              <div className="h-12 w-px bg-gray-200" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-orange text-brand-orange" />
                ))}
                <span className="text-xs text-gray-500 ml-1">1,200+ reviews</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/products" className="btn-primary">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link href="/enquire" className="btn-secondary">
                Get Free Quote
              </Link>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: <Shield size={13} />, text: 'BIS Certified' },
                { icon: <Truck size={13} />, text: 'Free Delivery' },
                { icon: <Award size={13} />, text: '5-Year Warranty' },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
                  <span className="text-brand-orange">{icon}</span>
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Problem-based nav + floating card */}
          <div className="order-2 relative">
            <div className="bg-white rounded-3xl shadow-card-hover p-6 border border-gray-100">
              <h3 className="font-display font-bold text-brand-navy text-xl mb-1">
                What's your problem?
              </h3>
              <p className="text-gray-500 text-sm mb-5">We have the right net for every situation.</p>
              
              <div className="grid grid-cols-2 gap-2.5">
                {PROBLEMS.map((problem, i) => (
                  <Link
                    key={problem.title}
                    href={problem.href}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 group ${
                      hoveredProblem === i
                        ? 'border-brand-orange bg-brand-orange/5 shadow-sm'
                        : 'border-gray-100 hover:border-brand-orange/40 hover:bg-warm'
                    }`}
                    onMouseEnter={() => setHoveredProblem(i)}
                    onMouseLeave={() => setHoveredProblem(null)}
                  >
                    <span className="text-2xl leading-none">{problem.icon}</span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-brand-navy leading-tight truncate">{problem.title}</div>
                      <div className="text-[10px] text-brand-orange mt-0.5 font-medium">{problem.product} →</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <Link href="/enquire" className="flex items-center justify-between w-full bg-brand-navy text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-brand-navy-light transition-colors">
                  <span>Can't find what you need?</span>
                  <span className="bg-brand-orange px-3 py-1 rounded-lg text-xs">Custom Quote</span>
                </Link>
              </div>
            </div>

            {/* Floating trust badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card border border-gray-100 px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <span className="text-xl">✅</span>
              </div>
              <div>
                <div className="text-xs font-bold text-brand-navy">100% Safe & Certified</div>
                <div className="text-[10px] text-gray-500">BIS · ISO · REACH compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
