import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PROBLEMS } from '@/data'

export default function ProblemNav() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full mb-3">
            Find Your Solution
          </div>
          <h2 className="section-title">Start with Your Problem</h2>
          <p className="section-subtitle mx-auto mt-2">
            Every net we make solves a real problem. Pick yours and we'll show you the right product.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PROBLEMS.map((problem) => (
            <Link
              key={problem.title}
              href={problem.href}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border-2 border-gray-100 bg-white hover:border-brand-orange hover:bg-brand-orange/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 block">
                {problem.icon}
              </span>
              <h3 className="text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors leading-snug">
                {problem.title}
              </h3>
              <div className="flex items-center gap-1 mt-2 text-xs text-gray-400 group-hover:text-brand-orange transition-colors font-medium">
                {problem.product} <ArrowRight size={11} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/enquire" className="btn-primary">
            Not sure? Get expert advice free <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
