import Subheading from '../components/SubHeading'
import { Button } from '../components/Button'
import Image from 'next/image'
import CurvedDivider from '../components/CurvedDivider'
import dynamic from 'next/dynamic'

const AnimatedTitle = dynamic(() => import('../components/AnimatedTitle'), {
  ssr: false
})


const phases = [
  {
    id: 1,
    title: 'Consultation',
    icon: '/consultation.svg',
    subtitle: 'PHASE 1',
    text: 'We begin with a free 15-minute consultation to connect and understand what brings you here and how I can help.',
  },
  {
    id: 2,
    title: 'Identification',
    icon: '/identification.svg',
    subtitle: 'PHASE 2',
    text: 'Together, we’ll assess your needs and begin shaping a personalized plan tailored to your journey.',
  },
  {
    id: 3,
    title: 'Exploration',
    icon: '/exploration.svg',
    subtitle: 'PHASE 3',
    text: 'In a safe space, we explore your thoughts, feelings, and experiences to uncover insights and foster healing.',
  },
  {
    id: 4,
    title: 'Resolution',
    icon: '/resolution.svg',
    subtitle: 'PHASE 4',
    text: 'Every journey has an ending — ours is one where you feel lighter, stronger, and more at peace.',
  },
]

export default function Process() {
  return (
    <section id="Process" className="bg-light-gray pt-10 px-">
      <div className="max-w-6xl mx-auto text-center pb-10">
        {/* Subheading */}
        <Subheading text="my process" color="#6493A5" />

        <AnimatedTitle
  prefix={
    <>
      A Gentle &{' '}
      <br className="sm:hidden block text-plum" />
    </>
  }
  phrases={["Intentional Journey."]}
  className="text-4xl md:text-5xl mt-10"
  bgColorClass="bg-[#E0F2E1]"
  as="h2" // <-- This is important!
/>

        {/* Phases */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-0">
          {phases.map((phase, i) => (
            <div key={phase.id} className="flex flex-col items-center">
              {/* Phase Card */}
              <div className="flex flex-col items-center text-center w-full max-w-[240px] px-4">
                <Image
                  src={phase.icon}
                  alt={phase.title}
                  width={50}
                  height={50}
                  className="mb-2 h-20 w-20"
                />
                <p className="text-sm font-semibold text-[#6493A5]">{phase.subtitle}</p>
                <h3 className="text-2xl text-plum mt-1">{phase.title}</h3>
                <p className="text-md text-plum/80 mt-2">{phase.text}</p>
              </div>

              {/* Vertical Line on Mobile */}
              {i < phases.length - 1 && (
                <div className="block md:hidden h-12 w-[1px] bg-[#B4E4C9] my-6" />
              )}
            </div>
          )).flatMap((item, index, array) =>
            index < array.length - 1
              ? [item,
                // Horizontal Line between cards (desktop only)
                <div
                  key={`line-${index}`}
                  className="hidden md:block h-[1px] w-20 bg-[#B4E4C9] mx-1 self-center"
                />
              ]
              : [item]
          )}
        </div>

        {/* Button */}
        <div className="mt-10 sm:mt-16">
          <div className="mx-auto sm:max-w-sm px-10">
            <Button text="Let’s Start Now" href="https://mindfultherapygroup.com/find-a-provider/?providerId=4339273000219393634" color="green" />
          </div>
        </div>
      </div>
      <CurvedDivider topColor="#F8FAFC" bottomColor="#282424" height={80} />
    </section>
  )
}