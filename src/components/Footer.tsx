'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-plum text-light-gray lg:pt-[300px] pt-[700px] mt-[-670px] lg:mt-[-260px] relative z-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
        {/* Column 1: Logo + tagline */}
        <div className="lg:w-1/4 text-center lg:text-left flex flex-col justify-center">
          <Image
            src="/logo.svg"
            alt="We're All Mad Here logo"
            width={160}
            height={50}
            className="mb-6 w-[250px] mx-auto lg:mx-0"
          />
          <p className="text-sm font-bold">
            We’re All Mad Here Therapy Solutions, PLLC
          </p>
          <p className="mt-2 text-sm">
            We provide comprehensive therapy solutions to everyone, from all walks of life.
            We specialize in therapy for LGBTQ2IA+, adolescents to adults, families & the geriatric population.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden lg:block h-[280px] w-px bg-light-gray/10 self-stretch mr-10" />

        {/* Right Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 flex-1">
          {/* Column 2: Contact */}
          <div>
            <h4 className="font-semibold font-sans text-base mb-4 text-[#86ABBA]">contact</h4>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/email-pink.svg" alt="Email" width={16} height={16} />
              <a href="mailto:allmadheretherapysolutions@outlook.com" className="hover:text-white transition hover:opacity-80 hover:underline">allmadheretherapysolutions@outlook.com</a>
            </div>
            <div className="flex items-center gap-2 mb-10">
              <Image src="/phone-pink.svg" alt="Phone" width={16} height={16} />
              <a href="tel:6823920896" className="hover:text-white transition hover:opacity-80 hover:underline">(682) 392-0896</a>
            </div>
            <h4 className="font-semibold font-sans text-base mb-4 text-[#86ABBA]">hours & location</h4>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/calendar-pink.svg" alt="Calendar" width={16} height={16} />
              <span>9am – 5pm, Mon–Fri</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Image src="/location-pink.svg" alt="Location" width={16} height={16} />
              <span>Washington Telehealth</span>
            </div>
          </div>

          {/* Column 3: Home + Emergencies */}
          <div>
            <div className="flex flex-row md:items-start gap-20 mb-6">
              {/* Home Links */}
              <div className='gap-5 flex flex-col'>
                <a href='#' className="font-semibold font-sans text-base">Home</a>
                <ul className="space-y-2">
                  <li><a href="#portal" className="hover:text-white transition hover:opacity-80">My Portal</a></li>
                  <li><a href="#Services" className="hover:text-white transition hover:opacity-80">Services</a></li>
                  <li><a href="#Pricing" className="hover:text-white transition hover:opacity-80">Pricing</a></li>
                  <li><a href="#FAQ" className="hover:text-white transition hover:opacity-80">FAQ</a></li>
                  <li><a href="#Process" className="hover:text-white transition hover:opacity-80">My Process</a></li>
                </ul>
              </div>

              {/* Emergency Link */}
              <div className=" md:mt-0">
                <h4 className="font-semibold font-sans text-base mb-4">Emergencies</h4>
                <a
                  href="https://988lifeline.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7B8F76] underline hover:text-cta-green/80 transition"
                >
                  Suicide Lifeline
                </a>
              </div>
            </div>

            {/* Crisis Disclaimer */}
            <p className="text-sm text-light-gray/90">
              If you are experiencing a mental health crisis, please call the <a href="https://988lifeline.org" className="underline text-[#7B8F76]">Suicide and Crisis Lifeline</a>,
              a free, 24-hour hotline, at <a href="tel:988" className="text-[#7B8F76] font-medium">988</a>. Your call will be routed to the crisis center near you.
              If you are experiencing an emergency, please call <span className="text-[#7B8F76] font-medium">911</span> or go to the nearest emergency room.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="bg-[#D9E5D6] text-center text-sm text-plum py-4 mt-16 px-6">
        © 2025 <span className="font-semibold">We’re All Mad Here Therapy Solutions PLLC</span>. All Rights Reserved.
        Website designed with love by{' '}
        <a
          href="https://wilkyway.co"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#7B8F76] transition font-bold"
        >
          Wilky Way
        </a>.
      </div>
    </footer>
  )
}
