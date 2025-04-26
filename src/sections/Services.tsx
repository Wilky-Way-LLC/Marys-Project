'use client'
import dynamic from 'next/dynamic'

const AnimatedTitle = dynamic(() => import('../components/AnimatedTitle'), {
  ssr: false
})

import Subheading from '../components/SubHeading'

export function Services() {
  return (
    <section className="bg-[#F8FAFC] px-6 sm:px-12 md:px-20 py-20 text-plum text-center">
      {/* Section Heading */}
      <div className="mb-16">
        <Subheading text="my services" color="#4b91b2" />
            <AnimatedTitle
      phrases={['one step at a time.']}
      prefix='here to help, '
      className="text-3xl md:text-5xl mt-8"
      textColorClass="text-plum"
      bgColorClass="bg-[#E0EFF2]"
    />
      </div>

  
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
          {/* Therapy */}
          <div className="bg-[#EEF7F9] rounded-xl px-10 py-10 flex flex-col items-center text-center space-y-4">
            <img src="/therapy-services.svg" alt="Therapy Icon" className="w-24 h-24" />
            <h3 className="text-3xl text-plum">Therapy</h3>
            <p className="text-md text-plum/80">
              One-on-one therapy offers a safe, confidential space to explore your thoughts, feelings, and experiences. 
              Whether you're facing anxiety, grief, trauma, or life transitions, we’ll work together to help you heal, grow, 
              and reconnect with yourself.
            </p>
          </div>
  
          {/* Groups */}
          <div className="bg-[#E6F3F4] rounded-xl px-10 py-10 flex flex-col items-center text-center space-y-4">
            <img src="/groups.svg" alt="Groups Icon" className="w-24 h-24" />
            <h3 className="text-3xl text-plum">Groups</h3>
            <p className="text-md text-plum/80">
              Group therapy creates a sense of shared understanding and connection. 
              In guided sessions, you’ll find support among others on similar paths, build resilience, 
              and gain perspective through honest conversations and community healing.
            </p>
          </div>
  
          {/* Coaching */}
          <div className="bg-[#EEF7F9] rounded-xl px-10 py-10 flex flex-col items-center text-center space-y-4">
            <img src="/group-services.svg" alt="Coaching Icon" className="w-24 h-24" />
            <h3 className="text-3xl text-plum">Coaching</h3>
            <p className="text-md text-plum/80">
              Coaching is for those ready to move forward with clarity and purpose. 
              Through goal-oriented sessions, we’ll uncover what’s holding you back and develop 
              practical strategies to help you take empowered steps toward the life you envision.
            </p>
          </div>
        </div>
      </section>
    )
  }
  