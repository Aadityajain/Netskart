import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/ui/ProductCard'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { CATEGORY_META, PRODUCTS } from '@/data'

export const metadata = {
  title: 'All Products — Netskart ProNet®',
  description: 'Browse Netskart products in a unified block-based catalogue layout.',
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fffaf6]">
        <section className="border-b border-brand-navy/10 bg-brand-navy py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Redesigned live catalogue
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Netskart product pages in one consistent block system
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/75 md:text-lg">
              This catalogue keeps the live product naming, pricing direction and category logic, while shifting the presentation into a more premium block-style layout.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {CATEGORY_META.map((category) => (
                <a
                  key={category.key}
                  href={`#${category.key}`}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-brand-navy"
                >
                  {category.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {CATEGORY_META.map((category) => {
              const items = PRODUCTS.filter((product) => product.category === category.key)
              if (!items.length) return null

              return (
                <section key={category.key} id={category.key} className="scroll-mt-24">
                  <div className="mb-6 rounded-[30px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                    <div className={`inline-flex rounded-full bg-gradient-to-r ${category.accent} px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white`}>
                      {category.label}
                    </div>
                    <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-brand-navy">{category.label}</h2>
                        <p className="mt-2 max-w-3xl text-gray-600">{category.blurb}</p>
                      </div>
                      <div className="rounded-2xl bg-warm px-4 py-3 text-sm text-gray-700">
                        <span className="font-semibold text-brand-navy">{items.length}</span> visible products mapped in this replacement build
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                    {items.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
