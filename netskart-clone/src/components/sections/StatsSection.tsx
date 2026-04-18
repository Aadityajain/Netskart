import { STATS } from '@/data'

export default function StatsSection() {
  return (
    <section className="py-16 bg-brand-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 grid-texture opacity-20" />
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-brand-teal/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map(({ value, label }, i) => (
            <div key={label} className="text-center group">
              <div className="font-display font-bold text-4xl lg:text-5xl text-white group-hover:text-brand-orange transition-colors duration-300">
                {value}
              </div>
              <div className="text-white/50 text-sm mt-2 font-medium">{label}</div>
              {i < STATS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
