import ProductCard from '@/components/ui/ProductCard'
import { FEATURED_PRODUCTS } from '@/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-block rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
              Live catalogue blocks
            </div>
            <h2 className="section-title mt-3">Same product data, cleaner product blocks</h2>
            <p className="section-subtitle mt-3">
              Featured products are now shown in a stronger catalogue format inspired by the live Netskart structure.
            </p>
          </div>
          <Link href="/products" className="btn-outline-orange text-sm">
            View all categories <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
