'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Banner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="hidden md:block fixed bottom-0 left-0 w-full bg-plum/90  font-semibold text-light-gray z-50 shadow-md">
      <div className="max-w-[1500px] mx-auto px-4 py-[1px] flex items-center justify-between">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm ">
          <div className="flex items-center gap-2">
            <Image src="/phone-pink.svg" alt="Phone" width={16} height={16} />
            <a href="tel:3455943044" className="hover:underline">(345) 594-3044</a>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/email-pink.svg" alt="Email" width={16} height={16} />
            <a href="mailto:email@email.com" className="hover:underline">email@email.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/location-pink.svg" alt="Email" width={16} height={16} />
            <a href="mailto:email@email.com" className="hover:underline">Washington Telehealth </a>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setVisible(false)}
          className="ml-4 text-light-gray text-lg font-bold hover:opacity-80 transition"
          aria-label="Close contact banner"
        >
          ×
        </button>
      </div>
    </div>
  )
}