"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in"
  delay?: number
  threshold?: number
  className?: string
}

export function ScrollAnimation({
  children,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setTimeout(() => {
              setIsVisible(true)
              hasAnimated.current = true
            }, delay)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, delay])

  const getAnimationClass = () => {
    if (!isVisible) {
      return "opacity-0"
    }

    const animationClasses = {
      "fade-in-up": "animate-fade-in-up",
      "fade-in": "animate-fade-in",
      "slide-in-left": "animate-slide-in-left",
      "slide-in-right": "animate-slide-in-right",
      "scale-in": "animate-scale-in",
    }

    return animationClasses[animation] || ""
  }

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
