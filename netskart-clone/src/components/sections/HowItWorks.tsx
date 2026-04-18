import { MessageSquare, Ruler, Truck, CheckCircle } from 'lucide-react'

const STEPS = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Tell Us Your Problem',
    description: 'Share your requirement — balcony size, type of net, location. We\'ll guide you to the right solution.',
    color: 'bg-brand-orange/10 text-brand-orange',
  },
  {
    icon: Ruler,
    step: '02',
    title: 'Free Site Measurement',
    description: 'Our technician visits your property, takes precise measurements and recommends the best fit.',
    color: 'bg-brand-teal/10 text-brand-teal',
  },
  {
    icon: Truck,
    step: '03',
    title: 'Factory-Fresh Delivery',
    description: 'Your custom-cut ProNet® netting is manufactured and dispatched from our Navi Mumbai factory.',
    color: 'bg-brand-navy/10 text-brand-navy',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Expert Installation',
    description: 'Certified installers fit and tension the net to perfection — with a 5-year workmanship warranty.',
    color: 'bg-green-50 text-green-600',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full mb-3">
            Our Process
          </div>
          <h2 className="section-title">From Enquiry to Installation</h2>
          <p className="section-subtitle mx-auto mt-2">
            A seamless end-to-end experience — from your first call to the final install.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-orange via-brand-teal to-green-400 opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({ icon: Icon, step, title, description, color }, i) => (
              <div key={step} className="relative flex flex-col items-center text-center group">
                {/* Step circle */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10 ${color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center">
                    {step.replace('0', '')}
                  </div>
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
