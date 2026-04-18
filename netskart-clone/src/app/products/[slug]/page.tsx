import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PRODUCTS } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ShieldCheck, Truck, Phone, ArrowLeft, CheckCircle } from 'lucide-react'
import { notFound } from 'next/navigation'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: `${product.name} — Netskart ProNet®`,
    description: product.description,
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-warm border-b border-gray-100 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Link href="/" className="hover:text-brand-orange">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-brand-orange">Products</Link>
              <span>/</span>
              <span className="text-brand-navy font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product detail */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-square bg-gray-50 shadow-card">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 bg-brand-orange text-white text-sm font-bold px-3 py-1.5 rounded-full">
                  {discount}% OFF
                </div>
              </div>

              {/* Info */}
              <div className="lg:sticky lg:top-24">
                <Link href="/products" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-orange mb-4 transition-colors">
                  <ArrowLeft size={14} /> Back to Products
                </Link>

                <div className="inline-block text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full mb-3">
                  {product.badge}
                </div>

                <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-navy">{product.name}</h1>
                <p className="text-gray-600 mt-3 leading-relaxed">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className={i < Math.floor(product.rating) ? 'fill-brand-orange text-brand-orange' : 'text-gray-200'} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating} · {product.reviews} reviews</span>
                </div>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-4xl font-bold text-brand-navy">₹{product.price.toLocaleString('en-IN')}</span>
                  <span className="text-gray-400 line-through text-lg">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="bg-green-100 text-green-700 text-sm font-semibold px-2.5 py-0.5 rounded-full">Save {discount}%</span>
                </div>
                <div className="text-gray-500 text-xs mt-1">{product.unit} · GST included · Installation extra</div>

                {/* Features */}
                <div className="mt-6">
                  <h3 className="font-semibold text-brand-navy text-sm mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={15} className="text-brand-orange flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/enquire" className="btn-primary flex-1 justify-center py-4">
                    Get Quote & Installation
                  </Link>
                  <a href="tel:+919876543210" className="btn-secondary flex-1 justify-center py-4">
                    <Phone size={16} /> Call Now
                  </a>
                </div>

                {/* Trust strip */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { icon: <ShieldCheck size={16} />, text: '5-Year Warranty' },
                    { icon: <Truck size={16} />, text: 'Free Delivery' },
                    { icon: '🏭', text: 'Factory Direct' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex flex-col items-center text-center gap-1 bg-warm rounded-xl p-3">
                      <span className="text-brand-orange">{icon}</span>
                      <span className="text-[10px] font-medium text-gray-600">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="py-14 bg-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group block bg-white rounded-2xl shadow-card overflow-hidden hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-brand-navy group-hover:text-brand-orange transition-colors">{p.name}</h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-bold text-brand-navy">₹{p.price.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-gray-400 line-through">₹{p.originalPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </Link>
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
