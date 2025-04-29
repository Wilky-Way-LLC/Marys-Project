'use client'

import Image from 'next/image'
import Subheading from '../components/SubHeading'
import { Button } from '../components/Button'

export default function CTAfooter() {
  return (
    <div className="relative z-10 -mt-[250px] mx-4 sm:mx-10">
      <div className="bg-dark-gray rounded-2xl max-w-6xl mx-auto px-8 py-10 md:py-8 flex flex-col lg:flex-row items-center gap-10 overflow-visible justify-center ">
        {/* Left Content */}
        <div className="max-w-xl z-10">
          <div className="flex flex-col items-start gap-3 mb-6">
            <Image src="/helping.svg" alt="Helping hands icon" width={60} height={60} />
            <Subheading text="Book an Appointment" color="#8D9CDB" />
          </div>

          <h2 className="text-white text-4xl font-serif leading-tight mb-6">
            I’d love to{' '}
            <span className="bg-[#3F3852] italic px-1">
              connect with you!
            </span>
          </h2>

          <p className="text-white text-base mb-8 max-w-md">
            When you book with me, you are able to choose your time and your hours based on when it’s convenient for you.
          </p>
    <div className='max-w-md'><Button text="Free Consultation" href="/services" color="pink" /></div>
          
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end shrink-0 w-full lg:w-auto">
  <div className="">
    <Image
      src="/Alice-Footer.png"
      alt="Alice Illustration"
      width={420}
      height={520}
      className="rounded-lg"
    />
  </div>
</div>
      </div>
    </div>
  )
}
