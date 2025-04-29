'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CurvedDivider from '../components/CurvedDivider'
import dynamic from 'next/dynamic'

const AnimatedTitle = dynamic(() => import('../components/AnimatedTitle'), {
  ssr: false
})

const specialties = [
  {
    id: 'lgbtq',
    title: 'LGBTQ2I+',
    icon: '/pride.svg',
    image: '/Mary-Pride.jpg',
    content: (
      <p>
        We provide affirming, identity-sensitive care for LGBTQ2IA+ individuals navigating unique
        challenges related to gender, sexuality, relationships, and belonging. Whether you’re exploring
        identity, healing from discrimination, or seeking a therapist who truly sees you — this is a space
        where you’re safe, respected, and celebrated.
      </p>
    ),
    miniText:
      'Whether you’re exploring identity, healing from discrimination, or seeking a therapist who truly sees you',
  },
  {
    id: 'adolescence',
    title: 'Adolescence',
    icon: '/adolescence.svg',
    image: '/Mary-Adolescence.jpeg',
    content: (
      <p>
        Adolescence can be turbulent — a time of discovery, confusion, and growth. I support teens through academic pressures,
        identity exploration, social challenges, and family dynamics. This is a space where they can feel heard, validated, and empowered.
      </p>
    ),
    miniText:
      'I support adolescents as they navigate identity, school stress, relationships, and family dynamics',
  },
  {
    id: 'geriatric',
    title: 'Geriatric',
    icon: '/65+.svg',
    image: '/geriatric-photo.png',
    content: (
      <p>
        Aging brings change — in our roles, bodies, and relationships. I work with older adults facing grief, isolation,
        health concerns, and life transitions. Together, we find meaning, connection, and peace in this chapter of life.
      </p>
    ),
    miniText:
      'I work with older adults facing grief, isolation, health concerns, or shifting roles and purpose',
  },
  {
    id: 'families',
    title: 'Families',
    icon: '/families.svg',
    image: '/family-picture.png',
    content: (
      <p>
        Family life is complex. I help families strengthen communication, resolve conflict, and adapt to life’s changes together.
        Whether navigating transitions, repairing relationships, or building new foundations — we work as a team toward healing and connection.
      </p>
    ),
    miniText:
      'I help families build healthier dynamics, navigate change, and strengthen bonds',
  },
]

export default function SpecialtiesSection() {
  const [activeId, setActiveId] = useState('lgbtq')
  const [userClicked, setUserClicked] = useState(false)
  const active = specialties.find((s) => s.id === activeId)!
  const expandedRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!userClicked) return

    if (window.innerWidth < 768 && expandedRef.current) {
      const offset = 100
      const topPos = expandedRef.current.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: topPos, behavior: 'smooth' })
    }
  }, [activeId, userClicked])

  return (
    <section className="bg-[#D9E5D6] pt-16 px-4">
      <div className="max-w-6xl mx-auto pb-10">
      <AnimatedTitle
  phrases={['Specialize In']}
  prefix="Who I"
  className="text-center text-4xl md:text-5xl font-serif"
  bgColorClass="bg-[#BADFB1]"
  as="h2" // <--- Force this AnimatedTitle to render an h2 tag
/>
        <p className="text-center text-xl font-medium text-plum/80 mt-5 px-8">
          I have clients from all walks of life, but I specialize in a few groups.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 m-4 gap-3">
          {/* Expanded Card */}
          <div
            ref={expandedRef}
            className="bg-[#FAFAFA] rounded-xl p-10 shadow-sm flex flex-col items-center text-center justify-center min-h-[600px] max-w-[500px] mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={active.icon}
                  alt={`${active.title} icon`}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-3xl mb-3">{active.title}</h3>
                <div className="text-md text-plum/80 space-y-2">
                  {active.content ?? <p>{active.miniText}</p>}
                </div>
                <img
                  src={active.image}
                  alt={`${active.title} illustration`}
                  className="mt-4 w-full h-48 object-cover object-[0_30%] rounded"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mini Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialties.map((s) => {
              const isActive = s.id === activeId
              return (
                <motion.button
                  key={s.id}
                  onClick={() => {
                    setActiveId(s.id)
                    setUserClicked(true)
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative min-h-[290px] rounded-xl p-4 transition-all duration-150 ${
                    isActive ? 'bg-[#F8FFF6]' : 'bg-[#FAFAFA] hover:shadow-sm'
                  }`}
                >
                  {!isActive && (
                    <img
                      src="/arrow.svg"
                      alt="Arrow icon"
                      className="absolute top-4 right-4 w-10 h-10"
                    />
                  )}
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="w-16 h-16 mb-3">
                      <img src={s.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                    <h4 className="font-semibold font-sans text-md">{s.title}</h4>
                    <p className="text-md text-plum/80 mt-1">{s.miniText}</p>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
      <CurvedDivider topColor="#F8FAFC" bottomColor="#FBFCFD" height={80} />
    </section>
  )
}