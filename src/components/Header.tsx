'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../components/Button'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
<header className="sticky top-0 z-50 bg-plum text-white px-4 sm:px-8 py-4 rounded-b-xl shadow-sm max-w-[1600px] mx-auto">
<div className="flex items-center justify-between">
        
        {/* Logo + Brand */}
        <div className="flex items-center">
          <a href="">
            <Image src="/logo.svg" alt="Logo" width={140} height={140} />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm text-light-gray">
          <a className='hover:text-cta-pink' href="#"> About Me</a>
          <a className='hover:text-cta-pink' href="#"> My Practice </a>
          <a className='hover:text-cta-pink' href="#"> Pricing </a>
          <a className='hover:text-cta-pink' href="#"> Contact </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block w-[200px] ">
          <Button text="Book Now" href="/book" color="gradient" />
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X className="w-10 h-10 bg-cta-pink/30 rounded-lg" /> : <Menu className="w-10 h-10" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden mt-12 flex flex-col gap-4 text-sm text-light-gray">
          <nav className="flex flex-col items-center gap-6">
            <a className="hover:text-cta-pink" href="#"> About Me </a>
            <a className="hover:text-cta-pink" href="#"> My Practice </a>
            <a className="hover:text-cta-pink" href="#"> My Pricing </a>
            <a className="hover:text-cta-pink" href="#"> Contact </a>
          </nav>
          <Button text="Book Now" href="/book" color="gradient" className="mt-4" />
        </div>
      )}
    </header>
  )
}
