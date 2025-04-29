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

  useEffect(() => {
    if (mobileOpen) return // disable scroll shrink when mobile nav is open

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
        "sticky top-0 z-50 bg-plum text-white px-4 sm:px-8 rounded-b-xl shadow-sm max-w-[1600px] mx-auto transition-all duration-300 ease-in-out",
        scrolledDown ? "py-2" : "py-4"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center transition-all duration-300">
          <a href="">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={scrolledDown ? 100 : 140}
              height={scrolledDown ? 100 : 140}
              className="transition-all duration-300"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 text-sm text-light-gray">
          <a className="hover:text-cta-pink" href="#About">About Me</a>
          <a className="hover:text-cta-pink" href="#Services">My Practice</a>
          <a className="hover:text-cta-pink" href="#Pricing">Pricing</a>
          <a className="hover:text-cta-pink" href="#FAQ">FAQ</a>
          <a className="hover:text-cta-pink" href="#Contact">Contact</a>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block w-[200px]">
          <Button text="Book Now" href="/book" color="gradient" />
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden">
          {mobileOpen ? (
            <X className="w-10 h-10 bg-cta-pink/30 rounded-lg" />
          ) : (
            <Menu className="w-10 h-10" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-[500px] opacity-100 mt-12" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-4 text-sm text-light-gray">
          <nav className="flex flex-col items-center gap-6">
            <a className="hover:text-cta-pink" href="#About">About Me</a>
            <a className="hover:text-cta-pink" href="#Services">My Practice</a>
            <a className="hover:text-cta-pink" href="#Pricing">Pricing</a>
            <a className="hover:text-cta-pink" href="#FAQ">FAQ</a>
            <a className="hover:text-cta-pink" href="#Contact">Contact</a>
          </nav>
          <Button text="Book Now" href="/book" color="gradient" className="mt-4" />
        </div>
      </div>
    </header>
  )
}
