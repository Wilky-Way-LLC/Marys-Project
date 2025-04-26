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
    question: 'This is an example question',
    answer: 'This is the answer to the example question.',
  },
  {
    question: 'This is an example question',
    answer: 'This is the answer to the example question.',
  },
  {
    question: 'This is an example question',
    answer: 'This is the answer to the example question.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="pt-20">
      {/* Title Section */}
      <div className="max-w-7xl px-4 mx-auto text-center">
        <Subheading text="FAQ" color="#F59999" />
        <h2 className="text-5xl text-plum mt-10">
          any{' '}
          <AnimatedTitle
            phrases={["questions?"]}
            className="inline text-5xl"
            textColorClass="text-plum"
            bgColorClass="bg-[#FFDEDE]"
          />
        </h2>
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
          <div className="space-y-6 m-6 mb-20 sm:mb-0">
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
