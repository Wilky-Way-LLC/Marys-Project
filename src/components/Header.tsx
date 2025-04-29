'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../components/Button'
import clsx from 'clsx'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolledDown, setScrolledDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleLinkClick = () => setMobileOpen(false)

  useEffect(() => {
    if (mobileOpen) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDiff = Math.abs(currentScrollY - lastScrollY)

      if (scrollDiff > 20) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setScrolledDown(true)
        } else {
          setScrolledDown(false)
        }
        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, mobileOpen])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 bg-plum text-white transition-all duration-300 ease-in-out max-w-[1600px] mx-auto rounded-b-xl',
        scrolledDown ? 'py-2' : 'py-4'
      )}
    >
      {/* Inner container for layout */}
      <div className="flex items-center justify-between relative px-4 sm:px-8 max-w-[1600px] mx-auto ">
        {/* Logo */}
        <a href="/" className="flex items-center transition-all duration-300">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={scrolledDown ? 100 : 140}
            height={scrolledDown ? 100 : 140}
            className="transition-all duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 text-sm text-light-gray">
          <a className="hover:text-cta-pink" href="#About">About Me</a>
          <a className="hover:text-cta-pink" href="#Services">My Practice</a>
          <a className="hover:text-cta-pink" href="#Pricing">Pricing</a>
          <a className="hover:text-cta-pink" href="#FAQ">FAQ</a>
          <a className="hover:text-cta-pink" href="#Contact">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block w-[200px]">
          <Button text="Book Now" href="/book" color="gradient" />
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden z-50">
          {mobileOpen ? (
            <X className="w-10 h-10 bg-cta-pink/30 rounded-lg" />
          ) : (
            <Menu className="w-10 h-10" />
          )}
        </button>
      </div>

      {/* Mobile Nav - animated dropdown with rounded corners + max-width */}
      <div
        className={clsx(
          'absolute top-full left-0 right-0 z-40 lg:hidden flex justify-center transition-all duration-300 ease-in-out',
          mobileOpen ? 'opacity-100 translate-y-0 max-h-[500px]' : 'opacity-0 -translate-y-2 max-h-0 pointer-events-none'
        )}
      >
        <div className="w-full max-w-[1600px] bg-plum rounded-b-xl overflow-hidden px-6 py-8 -mt-3">
          <div className="flex flex-col items-center gap-6 text-sm text-light-gray">
            <nav className="flex flex-col items-center gap-10 mt-10">
              <a href="#About" className="hover:text-cta-pink" onClick={handleLinkClick}>About Me</a>
              <a href="#Services" className="hover:text-cta-pink" onClick={handleLinkClick}>My Practice</a>
              <a href="#Pricing" className="hover:text-cta-pink" onClick={handleLinkClick}>Pricing</a>
              <a href="#FAQ" className="hover:text-cta-pink" onClick={handleLinkClick}>FAQ</a>
              <a href="#Contact" className="hover:text-cta-pink" onClick={handleLinkClick}>Contact</a>
            </nav>
            <Button text="Book Now" href="/book" color="gradient" className="mt-6" />
          </div>
        </div>
      </div>
    </header>
  )
}
