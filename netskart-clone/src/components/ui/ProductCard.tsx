import Link from 'next/link'
import Image from 'next/image'
import { Star, ArrowRight, ShieldCheck } from 'lucide-react'

interface Product {
  id: string
  name: string
  slug: string
  tagline: string
  price: number
  originalPrice: number
  unit: string
  rating: number
  reviews: number
  badge: string
  badgeColor: string
  image: string
  features: string[]
  color: string
}

const BADGE_COLORS: Record<string, string> = {
  orange: 'bg-brand-orange text-white',
  navy: 'bg-brand-navy text-white',
  teal: 'bg-brand-teal text-brand-navy',
  green: 'bg-green-500 text-white',
}

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="card overflow-hidden hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="relative h-52 bg-gray-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Badge */}
          <div className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${BADGE_COLORS[product.badgeColor] || BADGE_COLORS.orange}`}>
            {product.badge}
          </div>
          {/* Discount */}
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-bold text-brand-navy text-lg leading-tight group-hover:text-brand-orange transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs mt-1 leading-relaxed">{product.tagline}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.floor(product.rating) ? 'fill-brand-orange text-brand-orange' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">{product.rating} ({product.reviews} reviews)</span>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {product.features.slice(0, 3).map((f) => (
              <span key={f} className="text-[10px] font-medium bg-warm text-gray-600 px-2 py-0.5 rounded-full border border-gray-100">
                {f}
              </span>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-xl text-brand-navy">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className="text-[10px] text-gray-500 mt-0.5">{product.unit}</div>
            </div>
            <div className="flex items-center gap-1.5 bg-brand-orange text-white text-xs font-semibold px-3 py-2 rounded-full group-hover:bg-brand-orange-dark transition-colors">
              View <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
