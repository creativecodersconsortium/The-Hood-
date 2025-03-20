"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface ParallaxSectionProps {
  imageUrl: string
  height?: string
  children?: React.ReactNode
}

export default function ParallaxSection({ imageUrl, height = "h-[400px]", children }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrollPosition = window.scrollY
      const sectionPosition = sectionRef.current.offsetTop
      const viewportHeight = window.innerHeight

      // Only apply parallax effect when the section is in view
      if (
        scrollPosition + viewportHeight > sectionPosition &&
        scrollPosition < sectionPosition + sectionRef.current.offsetHeight
      ) {
        // Calculate parallax offset (slower scroll for background)
        const offset = (scrollPosition - sectionPosition) * 0.4

        // Apply transform to create parallax effect
        sectionRef.current.style.backgroundPositionY = `${offset}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`relative ${height} bg-fixed bg-center bg-no-repeat bg-cover overflow-hidden`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">{children}</div>
    </div>
  )
}

