'use client'

import { useEffect } from 'react'

export default function ScrollRestoration() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Handle hash on load — delay default scroll behavior
    const hash = window.location.hash
    if (hash) {
      // Suppress auto scroll
      setTimeout(() => {
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300) // Delay until after layout/animations are ready
    }
  }, [])

  return null
}