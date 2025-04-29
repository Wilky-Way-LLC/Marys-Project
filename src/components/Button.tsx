'use client'

import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'

interface ButtonProps {
  text: string
  href: string
  color?: 'pink' | 'green' | 'gray' | 'purple' | 'gradient' | 'lightpurple'
  className?: string
}

const colorMap = {
  pink: 'bg-cta-pink text-plum',
  green: 'bg-[#C7E3CC] text-plum',
  gray: 'bg-gray-200 text-gray-800',
  lightpurple: 'bg-[#A49FCD] text-plum',
  purple: 'bg-plum text-light-gray',
  gradient: 'bg-[linear-gradient(120deg,#EAB9E4,#F9C1C1,#EAB9E4)] text-plum'
}

export function Button({ text, href, color = 'pink', className }: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        ' group flex items-center place-content-center justify-center gap-4 px-8 py-2 text-sm font-semibold rounded transition-all hover:bg-[linear-gradient(120deg,#F9C1C1,#EAB9E4,#F9C1C1)] text-center w-full border-[.5px] hover:scale-[1.03] border-plum hover:shadow-[0_0_20px_rgba(255,192,203,0.5)]',
        colorMap[color],
        'glow-button',
        className
      )}
    >
      <span className=' my-[px] justify-center align-middle place-content-center items-center transform transition-transform duration-300 group-hover:translate-x-1  flex gap-3 '>{text}<p className="text-2xl md:pb-[5px]">→</p></span>
      
    </a>
  )
}
