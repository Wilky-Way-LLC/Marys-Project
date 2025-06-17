'use client'

import { Button } from '../components/Button'
import CurvedDivider from '../components/CurvedDivider'
import AnimatedTitle from '../components/AnimatedTitle'


export function Hero() {
  return (
    <section className="relative pt-4 sm:pt-12 bg-[#F8FAFC]">
      <div className="max-w-[1450px] mx-auto flex flex-col-reverse md:grid md:grid-cols-2 items-center lg:mt-15 relative z-10 px-10 pb-10">
        {/* Left Text Content */}
        <div className="space-y-4 sm:space-y-6">
          <div className="relative inline-flex items-center gap-1">
            <img src="/location.svg" alt="Location" />
            <p className="text-md sm:text-lg text-[#6493A5]">Serving Washington State — Telehealth</p>
            <span
              className="absolute left-0 -bottom-[2px] h-[1px] w-full"
              style={{ backgroundColor: '#6493A5', opacity: 0.4 }}
            />
          </div>

          {/* Animated Title */}
          <AnimatedTitle
            phrases={[ 'Mental Clarity.', 'Peace of Mind.', 'Your New Life.']}
            prefix= { 
            <>
            Guiding Your Path to {''}
            <br className="hidden sm:block" />
          </>
        }
            arrowSrc="/arrow-hero.svg"
            speed='fast'
            as='h1'
          
          />

          <p className="text-plum/70 max-w-lg">
          <span className='font-bold'>Licensed, affirming therapy from the comfort of home.</span> <br /> 
          Whether you're navigating anxiety, identity, relationships, or the weight of it all, you're not alone — and you don’t have to figure it out by yourself. As a licensed therapist offering online counseling across Washington, I’m here to support your journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-[500px]">
            <Button text="Book Now" href="https://mindfultherapygroup.com/find-a-provider/?providerId=4339273000219393634" color="gradient" />
            <Button text="Explore Services" href="#Services" color="purple" />
          </div>

          <div className="flex flex-wrap justify-center sm:justify-normal items-center gap-x-4 gap-y-4 pt-2 text-md text-[#6493A5]">
            <div className="flex items-center gap-1">
              <img src="/therapy.svg" alt="Therapy Services" className="w-6 h-6" />
              <span>Therapy Services</span>
            </div>
            <div className="flex items-center gap-1">
              <img src="/coaching.svg" alt="Coaching Services" className="w-6 h-6" />
              <span>Coaching Services</span>
            </div>
            <div className="flex items-center gap-1">
              <img src="/pride.svg" alt="LGBTQ2IA+ Specialization" className="w-6 h-6" />
              <span>LGBTQ2IA+ Specialization</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:ml-28 pb-4 mr-3 lg:pr-6">
          <img
            src="/Mary-Hero-Compressed.jpg"
            alt="Mary"
            className="max-w-full max-h-[600px] min-w-[340px] w-auto h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      <CurvedDivider topColor="#EEEEEE" bottomColor="#282424" height={80} />
    </section>
  )
}
