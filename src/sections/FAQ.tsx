'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Subheading from '../components/SubHeading'
import CurvedDivider from '../components/CurvedDivider'
// ✅ dynamic client-only import
import dynamic from 'next/dynamic'


const AnimatedTitle = dynamic(() => import('../components/AnimatedTitle'), {
  ssr: false
})


const faqs = [
  {
    question: 'Do I need to Live in Washington State?',
    answer:
      'Yes, to use my Washington Telehealth services, you must have a valid ID in Washington State, and be present at the time of the session.',
  },
  {
    question: 'What is are the Sliding Scale Rates?',
    answer:
      'I believe that quality mental health care should be accessible. Sliding scale rates are available based on your financial situation. During our consultation, we can discuss options that work for you.',
  },
  {
    question: 'Do you offer virtual or in-person sessions?',
    answer:
      'We offer virtual sessions, providing flexible care that fits into your life — no commute required. You can access support from the comfort and privacy of your own space.',
  },
  
  {
    question: 'How do I know if therapy is right for me?',
    answer:
      'If you’re feeling stuck, overwhelmed, curious, or simply seeking change, therapy might be a helpful place to start. You are not expected to have it all figured out before reaching out — that is what we’re here for.',
  },
  {
    question: 'How long are sessions, and how often do we meet?',
    answer:
      'Sessions are typically 50 minutes long. How often we meet depends on your goals — some clients meet weekly, others biweekly. We will find a rhythm that feels supportive for you.'
  }

]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id='FAQ' className="pt-20">
      {/* Title Section */}
      <div className="max-w-7xl px-4 mx-auto text-center">
        <Subheading text="FAQ" color="#F59999" />
        <AnimatedTitle
  prefix="Any "
  phrases={["Questions?"]}
  className="text-4xl md:text-5xl text-plum mt-10"
  bgColorClass="bg-[#FFDEDE]"
  as="h2" // <- Important: this forces the AnimatedTitle to be an <h2>
/>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 items-center">
        {/* Right image (stacked first on mobile) */}
        <div className="relative lg:order-1 order-none w-[300px] sm:w-auto mx-auto max-w-[450px] lg:mr-20">
          <Image
            src="/FAQ-image.png"
            alt="FAQ illustration"
            width={500}
            height={600}
            className="mx-auto"
          />
        </div>

        {/* Left content */}
        <div>
          <div className="space-y-6 m-6 mb-20 lg:mb-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index}>
                  <button
                    className="w-full text-left border-b border-cta-pink/40 pb-4 flex justify-between items-center text-plum font-semibold"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    {faq.question}
                    <span
                      className={clsx(
                        'text-xl transition-transform duration-300',
                        isOpen ? 'rotate-180' : 'rotate-0'
                      )}
                    >
                      ▾
                    </span>
                  </button>
                  <div
                    className={clsx(
                      'transition-all duration-300 ease-in-out overflow-hidden',
                      isOpen ? 'max-h-40 mt-2' : 'max-h-0'
                    )}
                  >
                    <p className="text-plum/80 text-md max-w-md">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <CurvedDivider topColor="#F8FAFC" bottomColor="#D6E3E5" height={80} />
    </section>
  )
}
