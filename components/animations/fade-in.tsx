"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function FadeIn({ children, delay = 0, duration = 0.5, className = "" }: FadeInProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, controls, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

