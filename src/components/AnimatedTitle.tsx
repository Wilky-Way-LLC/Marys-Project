'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface AnimatedTitleProps {
  phrases: string[]
  arrowSrc?: string
  className?: string
  prefixColorClass?: string
  animatedColorClass?: string
  bgColorClass?: string
  arrowClassName?: string
  prefix?: string | React.ReactNode
  speed?: 'fast' | 'slow'
  forceBreak?: boolean;
  as?: 'h1' | 'h2'
}

export default function AnimatedTitle({
  phrases,
  arrowSrc,
  className = 'text-4xl lg:text-6xl font-medium !leading-[1.4]',
  prefixColorClass = 'text-plum',
  animatedColorClass = 'text-plum',
  bgColorClass = 'bg-[#EFF9E6]',
  arrowClassName = 'hidden sm:block w-10 lg:w-20 h-auto mt-1',
  prefix = '',
  speed = 'slow',
  forceBreak = false,
  as = 'h2'
}: AnimatedTitleProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const typingSpeed = 100
  const deletingSpeed = speed === 'fast' ? 30 : 50
  const pauseTime = speed === 'fast' ? 2000 : 8000

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    let timeout: NodeJS.Timeout

    if (isDeleting) {
      timeout = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1))
        if (typedText === '') {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }, deletingSpeed)
    } else {
      if (typedText !== currentPhrase) {
        timeout = setTimeout(() => {
          setTypedText(currentPhrase.slice(0, typedText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      }
    }

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, phraseIndex, phrases, deletingSpeed, pauseTime])

  const Tag = as

  return (
    <Tag className={className}>
      {/* Prefix Text */}
      {prefix && <span className={prefixColorClass}>{prefix}</span>}

      {/* Animated Text */}
      <span className={`${bgColorClass} inline-flex items-center gap-2 min-h-[1.2em]`}>
        <span className={`italic font-normal ${animatedColorClass}`}>
          {typedText}
          <span className="ml-1 w-[3px] h-[1.2em] bg-current inline-block animate-blink" />
        </span>
        {arrowSrc && (
          <Image
            src={arrowSrc}
            alt="Arrow"
            width={80}
            height={20}
            className={arrowClassName}
          />
        )}
      </span>
    </Tag>
  )
}
