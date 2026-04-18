import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { ProductItem } from '@/data'

export default function ProductCard({ product }: { product: ProductItem }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

        {/* IMAGE */}
        <div className="relative w-full h-44 overflow-hidden bg-gray-100 group-hover:brightness-95">
          <Image
            src={`/images/products/${product.slug}.jpg`}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = '/images/products/placeholder.jpg'
            }}
          />

          {/* BADGE */}
          <div className="absolute top-2 left-2 bg-brand-orange text-white text-[10px] px-2 py-1 rounded-full font-semibold">
            {product.badge}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-3">

          {/* TITLE */}
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* PRICE */}
          <div className="mt-2 flex items-center gap-2">
            <span className="text-lg font-bold text-brand-navy">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs line-through text-gray-400">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          </div>

          {/* SMALL INFO */}
          <p className="text-xs text-gray-500 mt-1">
            {product.unit}
          </p>

          {/* CTA */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-green-600 font-medium">
              In Stock
            </span>

            <div className="flex items-center text-brand-orange text-sm font-medium group-hover:translate-x-1 transition">
              View <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}