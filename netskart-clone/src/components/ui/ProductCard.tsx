import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { ProductItem } from '@/data'

const categoryTone: Record<string, string> = {
  'bird-net': 'from-amber-100 via-orange-50 to-white border-amber-200',
  'sports-net': 'from-blue-100 via-indigo-50 to-white border-blue-200',
  'safety-net': 'from-emerald-100 via-green-50 to-white border-emerald-200',
  'shade-net': 'from-lime-100 via-emerald-50 to-white border-lime-200',
  spike: 'from-slate-100 via-gray-50 to-white border-slate-200',
  'monkey-net': 'from-stone-100 via-orange-50 to-white border-stone-200',
  'ropes-accessories': 'from-zinc-100 via-gray-50 to-white border-zinc-200',
}

export default function ProductCard({ product }: { product: ProductItem }) {
  const savings = product.originalPrice - product.price
  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <article className="h-full rounded-[28px] border bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_46px_rgba(15,23,42,0.12)] overflow-hidden">
        <div className={`bg-gradient-to-br ${categoryTone[product.category]} border-b px-5 py-5`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy">{product.badge}</div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">{product.brand} · {product.unit}</div>
            </div>
            <div className="rounded-2xl bg-brand-navy px-3 py-2 text-right text-white shadow-lg">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">Start at</div>
              <div className="text-xl font-bold leading-none">₹{product.price.toLocaleString('en-IN')}</div>
            </div>
          </div>
          <h3 className="mt-5 text-xl font-bold leading-snug text-brand-navy">{product.name}</h3>
          <p className="mt-3 text-sm leading-6 text-gray-700">{product.description}</p>
        </div>

        <div className="px-5 py-5">
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            {product.features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-start gap-2 rounded-2xl bg-warm px-3 py-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-end justify-between gap-4 border-t border-dashed border-gray-200 pt-4">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-gray-400">Live price source</div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-lg font-bold text-brand-navy">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="mt-1 text-xs text-green-700">Save ₹{savings.toLocaleString('en-IN')}</div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-brand-orange-dark">
              View product <ArrowRight size={15} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
