import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex items-center justify-center bg-warm">
        <div className="text-center px-4 py-20">
          <div className="text-7xl mb-6">🕸️</div>
          <h1 className="font-display text-5xl font-bold text-brand-navy mb-3">404</h1>
          <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
            This page seems to have slipped through the net. Let's get you back on track.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-primary">Back to Home</Link>
            <Link href="/products" className="btn-secondary">Browse Products</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
