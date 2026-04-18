import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-block text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full mb-3">
              Our Products
            </div>
            <h2 className="section-title">
              Premium Nets for Every Need
            </h2>
            <p className="section-subtitle mt-2">
              Engineered in India. Installed with care. Built to last.
            </p>
          </div>
          <Link href="/products" className="btn-outline-orange flex-shrink-0 text-sm">
            All Products <ArrowRight size={15} />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
