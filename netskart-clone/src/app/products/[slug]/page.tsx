import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { CATEGORY_META, PRODUCTS } from '@/data'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Phone, ShieldCheck, Truck, MessageCircle } from 'lucide-react'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((item) => item.slug === params.slug)
  if (!product) return {}
  return {
    title: `${product.name} — Netskart ProNet®`,
    description: product.description,
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((item) => item.slug === params.slug)
  if (!product) notFound()

  const category = CATEGORY_META.find((item) => item.key === product.category)
  const related = PRODUCTS.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3)

  return (
    <>
      <Navbar />
      <main className="bg-[#fffaf6]">
        <section className="border-b border-brand-navy/10 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-brand-orange">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-brand-orange">Products</Link>
              <span>/</span>
              <span className="text-brand-navy">{product.name}</span>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-6">
                <div className={`rounded-[34px] bg-gradient-to-br ${category?.accent ?? 'from-brand-orange to-brand-navy'} p-[1px] shadow-[0_18px_50px_rgba(15,23,42,0.12)]`}>
                  <div className="rounded-[33px] bg-white p-7 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:border-brand-orange hover:text-brand-orange">
                        <ArrowLeft size={15} /> Back to catalogue
                      </Link>
                      <div className="rounded-full bg-brand-orange px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                        {product.badge}
                      </div>
                    </div>

                    <div className="mt-8 grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
                          {category?.label} · {product.brand}
                        </div>
                        <h1 className="mt-3 text-3xl font-bold leading-tight text-brand-navy md:text-4xl">
                          {product.name}
                        </h1>
                        {product.heading && (
                          <p className="mt-4 text-lg font-semibold text-brand-orange">{product.heading}</p>
                        )}
                        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
                          {product.description}
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {product.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-3 rounded-2xl bg-warm px-4 py-3 text-sm text-gray-700">
                              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[28px] border border-gray-200 bg-[#fffaf6] p-6">
                        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Live price block</div>
                        <div className="mt-3 flex items-end gap-3">
                          <div className="text-4xl font-bold text-brand-navy">₹{product.price.toLocaleString('en-IN')}</div>
                          <div className="pb-1 text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</div>
                        </div>
                        <div className="mt-2 text-sm text-green-700">
                          Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} on starting range
                        </div>

                        <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Colour options</div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {(product.colorOptions ?? ['Standard']).map((color) => (
                              <span key={color} className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700">
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Standard size blocks</div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {(product.sizes ?? ['Custom size']).map((size) => (
                              <span key={size} className="rounded-2xl bg-warm px-3 py-2 text-sm font-medium text-brand-navy">
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 grid gap-3">
                          <Link href="/enquire" className="btn-primary w-full justify-center py-4 text-sm">
                            Get quotation
                          </Link>
                          <a href="tel:+919784255559" className="btn-secondary w-full justify-center py-4 text-sm">
                            <Phone size={16} /> Call support
                          </a>
                          <a href="https://wa.me/919784255559" className="inline-flex items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-6 py-4 text-sm font-semibold text-green-700 hover:bg-green-100">
                            <MessageCircle size={16} /> WhatsApp enquiry
                          </a>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                          {[
                            { icon: <ShieldCheck size={16} />, label: 'Secure payment' },
                            { icon: <Truck size={16} />, label: 'Pan-India shipping' },
                            { icon: <CheckCircle2 size={16} />, label: 'DIY friendly' },
                          ].map((item) => (
                            <div key={item.label} className="rounded-2xl bg-white p-3 text-xs font-medium text-gray-600 shadow-sm">
                              <div className="mb-2 flex justify-center text-brand-orange">{item.icon}</div>
                              {item.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">What stays same</div>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                      <li>• Product naming kept aligned to the live Netskart catalogue format.</li>
                      <li>• Starting price block follows the live site’s price-led product experience.</li>
                      <li>• Category logic remains intact so products can scale uniformly across the site.</li>
                    </ul>
                  </div>
                  <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">What changed</div>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                      <li>• Stronger block layout for price, size options, trust cues and enquiry actions.</li>
                      <li>• Cleaner visual hierarchy so long SKU names still feel readable and premium.</li>
                      <li>• One reusable template now controls all mapped product detail pages.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Quick spec</div>
                  <div className="mt-4 space-y-4 text-sm text-gray-700">
                    <div className="flex items-center justify-between gap-4 border-b border-dashed border-gray-200 pb-3">
                      <span>Brand</span>
                      <span className="font-semibold text-brand-navy">{product.brand}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-dashed border-gray-200 pb-3">
                      <span>Category</span>
                      <span className="font-semibold text-brand-navy">{category?.label}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-dashed border-gray-200 pb-3">
                      <span>Rating</span>
                      <span className="font-semibold text-brand-navy">{product.rating} / 5</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Review count</span>
                      <span className="font-semibold text-brand-navy">{product.reviews} reviews</span>
                    </div>
                  </div>
                </div>

                {related.length > 0 && (
                  <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Related in {category?.label}</div>
                    <div className="mt-4 space-y-3">
                      {related.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/products/${item.slug}`}
                          className="block rounded-2xl bg-warm p-4 transition hover:bg-orange-50"
                        >
                          <div className="text-sm font-semibold leading-6 text-brand-navy">{item.name}</div>
                          <div className="mt-2 text-sm text-gray-600">₹{item.price.toLocaleString('en-IN')}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
