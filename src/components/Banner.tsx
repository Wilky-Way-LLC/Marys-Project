'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export default function Banner() {
  const [visible, setVisible] = useState(true)
  const [hiddenByScroll, setHiddenByScroll] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDiff = Math.abs(currentScrollY - lastScrollY)

      if (scrollDiff > 20) { // only trigger if scrolled more than 20px
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setHiddenByScroll(true)
        } else {
          setHiddenByScroll(false)
        }
        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  if (!visible) return null

  return (
    <div
      className={clsx(
        'hidden md:block fixed bottom-0 left-0 w-full bg-plum/90 font-semibold text-light-gray z-50 shadow-md transition-transform duration-300 ease-in-out',
        hiddenByScroll ? 'translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="max-w-[1500px] mx-auto px-4 py-[1px] flex items-center justify-between">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Image src="/phone-pink.svg" alt="Phone" width={16} height={16} />
            <a href="tel:6823920896" className="hover:underline hover:opacity-80">(682) 392-0896</a>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/email-pink.svg" alt="Email" width={16} height={16} />
            <a href="mailto:allmadheretherapysolutions@outlook.com" className="hover:underline hover:opacity-80">allmadheretherapysolutions@outlook.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/location-pink.svg" alt="Location" width={16} height={16} />
            <span>Washington State Telehealth</span>
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
