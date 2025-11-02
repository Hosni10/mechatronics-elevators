"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedNumberProps {
  value: string // e.g., "20+", "500+", "300+"
  duration?: number // Animation duration in milliseconds
  className?: string
}

export function AnimatedNumber({ value, duration = 2000, className = "" }: AnimatedNumberProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  // Extract number and suffix from value (e.g., "20+" -> number: 20, suffix: "+")
  const match = value.match(/^(\d+)(.*)$/)
  const targetNumber = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ""

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true)
            hasAnimated.current = true
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Start animation slightly before element is fully in view
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0
    const endValue = targetNumber

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, targetNumber, duration])

  return (
    <div ref={elementRef} className={className}>
      {count}{suffix}
    </div>
  )
}
