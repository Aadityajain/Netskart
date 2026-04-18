import { TRUST_BADGES } from '@/data'

const ITEMS = [...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES]

export default function TrustBar() {
  return (
    <div className="bg-brand-navy py-4 border-y border-white/10 overflow-hidden">
      <div className="marquee-track">
        {ITEMS.map((badge, i) => (
          <div key={i} className="flex items-center gap-3 px-10 flex-shrink-0">
            <span className="text-xl">{badge.icon}</span>
            <span className="text-white/80 text-sm font-medium whitespace-nowrap">{badge.label}</span>
            <span className="text-brand-orange/50 text-lg ml-6">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
