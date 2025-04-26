import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Services } from '../sections/Services'
import  Specialties  from '../sections/Specialties'
import Approach from '../sections/Approach'
import Process from '../sections/Process'
import PricingSection from '../sections/Pricing'
import FAQSection from '../sections/FAQ'
import ContactSection from '../sections/Contact'
import CTAfooter from '../sections/CTAFooter'

export default function Home() {
  return (
    <main>

      <Hero />
      <About />
      <Services />
      <Specialties/>
      <Approach/>
      <Process/>
      <PricingSection/>
      <FAQSection/>
      <ContactSection/>
      <CTAfooter/>
      
    </main>
  )
}