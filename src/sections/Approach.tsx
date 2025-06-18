import Subheading from '../components/SubHeading'
import { Button } from '../components/Button'
import Image from 'next/image'

export default function Approach() {
  return (
    <section className="bg-light-gray py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-plum text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/my-approach.jpg"
              alt="Alice tea party"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 max-w-[500px]">
            <Subheading text="my approach" color="#D3CDEB" />
            <h2 className="text-3xl md:text-4xl font-serif mt-6 leading-snug">
              <span className="italic font-normal text-light-gray/90 bg-[#504E7C]">Everyone</span>{' '}
              Deserves Help<span className="text-[#D3CDEB]">.</span>
            </h2>
            <p className="text-base text-light-gray mt-4 leading-relaxed ">
              Here, healing doesn’t have to be sterile. It can be creative, heartfelt, a little weird — and totally yours.
              <br /><br />
              While we center LGBTQ+ experiences, our doors are open to everyone who’s ready to be seen, heard, and supported in a space that celebrates the full spectrum of being human.
            </p>
            <div className="mt-6">
              <Button text="Book an Appointment" href="https://mindfultherapygroup.com/find-a-provider/?providerId=4339273000219393634" color="green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
