'use client'

import Subheading from '../components/SubHeading'
import { Button } from '../components/Button'
import dynamic from 'next/dynamic'

const AnimatedTitle = dynamic(() => import('../components/AnimatedTitle'), {
  ssr: false
})


export default function PricingSection() {
  return (
    <div className="relative z-0">
      {/* Dark Pricing Section */}
      <section className="relative z-10 bg-dark-gray text-light-gray pt-10 pb-40 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-6xl mx-auto">
            <Subheading text="my pricing" color="#8183C9" />
            <h2 className="text-4xl md:text-5xl mt-6">
          thoughtful care,{' '}
          <AnimatedTitle
            phrases={["honest rates."]}
            className="inline text-4xl md:text-5xl"
            textColorClass="text-[#7D74CD]"
            bgColorClass="bg-[#373951]"
          />
        </h2>
          </div>

          {/* Columns */}
          <div className="mt-10 flex flex-col lg:flex-row justify-between gap-12 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-4xl leading-snug">
                Helping you at a price<br />
                you can <span className="italic relative inline-block">
                  afford.
                                      <img
                        src="/pricing-underline.svg"
                        alt="underline"
                        className="absolute left-0 -bottom-2 w-full h-auto -z-10 pointer-events-none"
                      />
                </span>
              </h3>

              <p className="text-md text-light-gray/80 mt-6 max-w-md leading-relaxed">
                I offer flexible pricing to make therapy accessible. A reduced cash rate is available for out-of-pocket
                payments, and we’re happy to arrange payment plans when needed. Most major insurance plans are accepted —
                just reach out and we'll help you figure out what works best for you.
              </p>

              <div className="mt-8 max-w-md">
                <Button text="Let’s Connect" href="/contact" color="green" />
              </div>

              <p className="text-sm mt-4 text-light-gray">
                Ask me about my income-based{' '}
                <a href="#" className="underline text-[#C3CDEB] hover:text-white transition-all ease-in-out">
                  Sliding Scale
                </a>.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-[#3B3738] text-center rounded-xl p-10 w-full max-w-sm flex-shrink-0">
              <p className="uppercase text-sm tracking-wide text-white/70 mb-2">
                Cash Rate, Individual
              </p>
              <p className="text-5xl font-serif">100$</p>
              <p className="text-sm text-white/70 mt-1">per 50 minutes</p>

              <div className="my-6 h-[1px] bg-white/20" />

              <p className="uppercase text-sm tracking-wide text-white/70 mb-1">Card Rate</p>
              <div className="flex justify-center items-end gap-6 text-white">
                <div>
                  <p className="text-3xl font-serif">120$</p>
                  <p className="text-xs italic mt-1">individual</p>
                </div>
                <span className="h-6 w-[1px] bg-white/20" />
                <div>
                  <p className="text-3xl font-serif">150$</p>
                  <p className="text-xs italic mt-1">couples</p>
                </div>
              </div>
              <p className="text-sm text-white/70 mt-2">per 50 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* White push-up to cut off dark gray background */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#F8FAFC] z-0 pointer-events-none" />

      {/* Insurance Bar */}
      <div className="mt-[-100px] px-4 sm:px-12 md:px-20 relative z-10">
        <div className="bg-plum py-16 px-6 rounded-xl max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-light-gray text-center">
            <h4 className="text-2xl">
              we accept <span className="italic text-[#C3CDEB]">insurance.</span>
            </h4>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="w-24 h-6 bg-white/20 rounded-sm" />
              <div className="w-24 h-6 bg-white/20 rounded-sm" />
              <div className="w-24 h-6 bg-white/20 rounded-sm" />
              <div className="w-24 h-6 bg-white/20 rounded-sm" />
            </div>
            <p className="text-sm text-light-gray">
              don’t see yours?{' '}
              <a href="#" className="underline text-[#C3CDEB]">
                view the full list &gt;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

