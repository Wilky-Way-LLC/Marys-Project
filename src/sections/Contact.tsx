'use client'

import Image from 'next/image'
import Subheading from '../components/SubHeading'
// ✅ dynamic client-only import
import dynamic from 'next/dynamic'

const AnimatedTitle = dynamic(() => import('../components/AnimatedTitle'), {
  ssr: false
})


export default function ContactSection() {
  return (
  <section id='Contact' className="bg-[#D6E3E5] pb-[300px] px-8 z-10">
      <div className="max-w-7xl mx-auto bg-[#D6E3E5] text-center">
        {/* Top Section with Heading & Arrows */}
        <div className="mb-10 sm:mb-16">
        <Image
  src="/arrows.svg"
  alt="Decorative Arrows"
  width={100}
  height={50}
  className="w-40 mx-auto "
/>
          <Subheading text="Contact" color="#32596C" />
          <AnimatedTitle
  prefix={
    <>
      Let's Do This{' '}
      <br className="sm:hidden block" />
    </>
  }
  phrases={["Together."]}
  className="text-4xl md:text-5xl font-serif text-center mt-6"
  prefixColorClass="text-plum"
  animatedColorClass="text-[#32596C]"
  bgColorClass="bg-[#f4feff90]"
  as="h2" // <-- important: tell AnimatedTitle to render as an h2
/>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-[900px] mx-auto">
          {/* Card 1: Contact Info */}
          <div className="group bg-[#FAFAFA] rounded-2xl p-12 flex flex-col items-center text-center transition-all duration-300 hover:shadow-sm hover:scale-[1.02] hover:bg-[#f9fafa]">
  <Image
    src="/chat-large.svg"
    alt="Chat Icon"
    width={40}
    height={40}
    className="mb-4 w-16 transition-transform duration-300 group-hover:-rotate-3"
  />
  <h3 className="text-[#6493A6] font-sans font-bold text-2xl mb-4">
    Want to Chat?
  </h3>
  <div className="space-y-4 text-[#6493A6] text-md">
    <div className="flex items-center justify-center gap-2">
      <Image src="/email.svg" alt="Email" width={16} height={16} />
      <a
        href="mailto: mary@allmadheretherapy.com"
        className="border-b border-[#86bdd357] hover:text-[#A0C6D6] transition-all duration-300 pb-[1px]"
      >
        Email Me
      </a>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Image src="/phone.svg" alt="Phone" width={16} height={16} />
      <a
        href="tel:6823920896"
        className="border-b border-[#86bdd357] hover:text-[#A0C6D6] transition-all duration-300 pb-[1px]"
      >
       Text: (682) 392-0896
      </a>
    </div>
  </div>
</div>
        

          {/* Card 2: Hours & Location */}
          <div className="group bg-[#FAFAFA] rounded-2xl p-12 flex flex-col items-center text-center transition-all duration-300 hover:shadow-sm hover:scale-[1.02] hover:bg-[#f9fafa]">
  <Image
    src="/location-large.svg"
    alt="Location Icon"
    width={40}
    height={40}
    className="mb-4 w-11 transition-transform duration-300 group-hover:rotate-3"
  />
  <h3 className="text-[#6493A6] font-sans font-semibold text-2xl mb-4">
    Hours & Location
  </h3>
  <div className="space-y-4 text-[#6493A6] text-md">
    <div className="flex items-center justify-center gap-2">
      <Image src="/calendar.svg" alt="Calendar" width={16} height={16} />
      <span>9am – 5pm, Mon–Fri</span>
    </div>
    <div className="flex items-center justify-center gap-2">
      <Image src="/location-small.svg" alt="Location" width={16} height={16} />
      <span>Washington Telehealth</span>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}

