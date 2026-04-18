'use client'

import { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [show, setShow] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {show && (
        <div className="bg-white rounded-2xl shadow-card-hover border border-gray-100 p-4 max-w-[220px] relative animate-fade-up">
          <button
            onClick={() => setShow(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <X size={12} />
          </button>
          <p className="text-xs font-semibold text-brand-navy mb-1">👋 Chat with us on WhatsApp</p>
          <p className="text-[10px] text-gray-500">Usually replies in under 2 minutes</p>
        </div>
      )}
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20enquire%20about%20ProNet%20netting%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white fill-white" />
      </a>
    </div>
  )
}
