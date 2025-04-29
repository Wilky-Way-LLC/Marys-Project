'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

// Define tabs strictly
const tabs = ['about', 'background', 'education'] as const
type TabKey = typeof tabs[number]


// Tab content typed properly
const tabContent: Record<TabKey, {
  icon: string
  heading: string | React.ReactNode
  text: React.ReactNode
  image: string
}> = {
  about: {
    icon: '/hey-there.svg',
    heading:      ( <>
    <span className="max-w-[470px] !leading-[1.2]">
      Welcome To <span className=' italic bg-dark-gray/30 !leading-[1.4] text-cta-pink px-1' >We're All Mad Here Therapy</span>
    </span>
  </>
    ),
    text: (
      <>
        <p className="max-w-[470px]">
          A space where the strange, the sensitive, the searching, and the beautifully complex are all welcome.
          Rooted in LGBTQ2IA+ care, we specialize in creating a therapeutic space where identity, emotion, and imagination are embraced.
        </p>
        <br />
        <p className="font-bold max-w-[470px]">
          Come as you are. Stay as you grow. We’re all mad here — and that’s more than okay.
        </p>
      </>
    ),
    image: '/Alice-About-Picture.png',
  },
  background: {
    icon: '/my-background.svg',
    heading: ( <>
      <span className="max-w-[470px] !leading-[1.2]">
      Foundations in  <span className=' italic bg-dark-gray/30 !leading-[1.4] text-cta-pink px-1' >Therapy and Counseling Care</span>
      </span>
    </>
      ),
    text: (
      <>
      <p>
        I am a clinical social worker dedicated to creating a compassionate and affirming space for those navigating life's complexities. With experience supporting a diverse range of clients — including LGBTQ2IA+ individuals, adolescents, older adults, and families — I offer therapy that is both gentle and intentional. 
        </p>
      
      <p className='font-semibold'> My approach is rooted in the belief that everyone deserves a place where they are seen, heard, and valued. </p>
      
      </>
    ),
    image: '/Mary-Background.png',
  },
  education: {
    icon: '/my-education.svg',
    heading: ( <>
      <span className="max-w-[470px] !leading-[1.2]">
      My  <span className=' italic bg-dark-gray/30 !leading-[1.4] text-cta-pink px-1' >Credentials & Education</span>
      </span>
    </>
      ),
    text: (
      <>
      <p>
        I hold a Master’s degree in Social Work and am licensed as an LMSW (Licensed Master Social Worker) in Texas, as well as an Independent Associate Clinical Social Worker (IACSW) in Washington state. In Washington, I practice under the supervision of Dawn Egan, LICSW. </p>
        
        <p className='font-semibold'>I am committed to lifelong learning, regularly deepening my skills in trauma-informed care, and evidence-based therapeutic approaches to ensure the best possible support for my clients.

        
      </p>
      </>
    ),
    image: '/mary-education.png',
  },
}

// Quotes
const quotes = [
  {
    text: "I can't go back to yesterday, because I was a different person then.",
    author: "Alice, Alice in Wonderland",
  },
  {
    text: "We're all mad here.",
    author: "The Cheshire Cat",
  },
  {
    text: "Imagination is the only weapon in the war against reality.",
    author: "Lewis Carroll",
  },
]
export function About() {
  const [activeTab, setActiveTab] = useState<TabKey>('about')
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [isFading, setIsFading] = useState(false) // for quotes
  const [isFadingTab, setIsFadingTab] = useState(false) // NEW for tab fade

  const changeQuote = (direction: 'next' | 'prev') => {
    setIsFading(true)
    setTimeout(() => {
      setQuoteIndex((prev) => {
        if (direction === 'next') return (prev + 1) % quotes.length
        if (direction === 'prev') return prev === 0 ? quotes.length - 1 : prev - 1
        return prev
      })
      setIsFading(false)
    }, 200)
  }

  const changeTab = (tab: TabKey) => {
    if (tab === activeTab) return
    setIsFadingTab(true)
    setTimeout(() => {
      setActiveTab(tab)
      setIsFadingTab(false)
    }, 200) // 200ms matches the fade animation
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeQuote('next')
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-0">
      {/* Main Section Content */}
      <section id="About" className="relative z-10 bg-dark-gray px-6 sm:px-12 md:px-20 text-white pt-2">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-4 sm:gap-12 items-center">
          
          {/* Left Card with Tabs */}
          <div className="bg-medium-gray px-6 py-8 lg:px-14 sm:py-14 rounded-xl shadow-lg space-y-6 w-full min-w-[330px] min-h-[500px]">
            
            {/* Tabs */}
            <div className="flex justify-center gap-6 sm:gap-8 text-sm sm:text-md uppercase tracking-widest pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => changeTab(tab)}
                  className={clsx(
                    'transition-colors',
                    activeTab === tab
                      ? 'text-cta-pink border-b-[1px] border-cta-pink/60'
                      : 'text-white/70 hover:text-white'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className={clsx(
              'space-y-4 transition-opacity duration-300',
              isFadingTab ? 'opacity-0' : 'opacity-100'
            )}>
              <img src={tabContent[activeTab].icon} alt={`${activeTab} icon`} />
              <h3 className="text-3xl lg:text-5xl text-light-gray">{tabContent[activeTab].heading}</h3>
              <div className="text-white/80 space-y-3">{tabContent[activeTab].text}</div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center mb-6 md:mb-0">
            <div className={clsx(
              'transition-opacity duration-300',
              isFadingTab ? 'opacity-0' : 'opacity-100'
            )}>
              <Image
                src={tabContent[activeTab].image}
                alt={activeTab}
                width={550}
                height={500}
                className="transition-all duration-500 h-[300px] sm:h-[500px] md:h-[600px] w-auto object-contain lg:pl-10"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Background and quote section */}
      <div className="relative z-0">
        <section className="bg-dark-gray px-6 sm:px-12 md:px-20 text-[#F8FAFC] pt-0 pb-40" />

        {/* White push-up layer to stop dark background */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#F8FAFC] z-0 pointer-events-none" />

        {/* Quote Block */}
        <div className="mt-[-100px] px-4 sm:px-12 md:px-20 relative z-10">
          <div className="bg-forest text-[#F8FAFC] px-6 py-10 min-h-[210px] md:min-h-[180px] rounded-xl max-w-4xl mx-auto flex items-center justify-between gap-4">
            {/* Left Arrow */}
            <button
              onClick={() => changeQuote('prev')}
              className="text-2xl px-2 hover:text-white/80 transition"
              aria-label="Previous Quote"
            >
              ←
            </button>

            {/* Quote Content */}
            <div
              className={clsx(
                'flex-1 text-center transition-opacity duration-300',
                isFading ? 'opacity-0' : 'opacity-100'
              )}
            >
              <p className="text-2xl italic font-serif">
                "{quotes[quoteIndex].text}"
              </p>
              <p className="text-sm mt-2 opacity-80">
                — {quotes[quoteIndex].author}
              </p>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => changeQuote('next')}
              className="text-2xl px-2 hover:text-white/80 transition"
              aria-label="Next Quote"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

