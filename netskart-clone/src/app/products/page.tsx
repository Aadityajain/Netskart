import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/data'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata = {
  title: 'All Products — Netskart ProNet®',
  description: 'Browse our full range of bird nets, monkey nets, safety nets, shade nets, cricket nets and more.',
}

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Protection', value: 'protection' },
  { label: 'Safety', value: 'safety' },
  { label: 'Sports', value: 'sports' },
  { label: 'Shade', value: 'shade' },
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-brand-navy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/20 px-3 py-1 rounded-full mb-4">
              ProNet® Collection
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white">All Products</h1>
            <p className="text-white/60 text-lg mt-3 max-w-xl mx-auto">
              Factory-direct nets for every application — home, commercial, agricultural and sports.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-colors ${
                    cat.value === 'all'
                      ? 'bg-brand-orange text-white border-brand-orange'
                      : 'border-gray-200 text-gray-600 hover:border-brand-orange hover:text-brand-orange'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
