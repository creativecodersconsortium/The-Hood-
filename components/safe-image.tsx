"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface SafeImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export default function SafeImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
}: SafeImageProps) {
  const [useNextImage, setUseNextImage] = useState(true)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    // Check if we're in production and switch to standard img tag
    if (process.env.NODE_ENV === "production") {
      setUseNextImage(false)
    }
  }, [])

  if (imgError || !useNextImage) {
    // Use standard HTML img tag as fallback
    if (fill) {
      return (
        <div className={`relative ${className}`}>
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        </div>
      )
    }

    return (
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={() => setImgError(true)}
      />
    )
  }

  // Use Next.js Image component
  if (fill) {
    return (
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={className}
        priority={priority}
        unoptimized
        onError={() => setImgError(true)}
      />
    )
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width || 100}
      height={height || 100}
      className={className}
      priority={priority}
      unoptimized
      onError={() => setImgError(true)}
    />
  )
}

