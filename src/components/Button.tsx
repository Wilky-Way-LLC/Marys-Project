'use client'

import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'

interface ButtonProps {
  text: string
  href: string
  color?: 'pink' | 'green' | 'gray' | 'purple' | 'gradient'
  className?: string
}

const colorMap = {
  pink: 'bg-cta-pink text-plum',
  green: 'bg-[#A5CC9C] text-plum',
  gray: 'bg-gray-200 text-gray-800',
  purple: 'bg-plum text-light-gray',
  gradient: 'bg-[linear-gradient(120deg,#EAB9E4,#F9C1C1,#EAB9E4)] text-plum'
}

export function Button({ text, href, color = 'pink', className }: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        ' flex items-center place-content-center justify-center gap-4 px-8 py-2 text-sm font-semibold rounded transition-all text-center w-full border-[.5px] border-plum',
        colorMap[color],
        'glow-button',
        className
      )}
    >
      <span>{text}</span>
      <p className='text-2xl font-bold mb-[4.5px]'>→</p>
    </a>
  )
}
