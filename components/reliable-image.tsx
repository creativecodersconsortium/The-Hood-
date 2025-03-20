"use client"

import { useState } from "react"
import Image from "next/image"

interface ReliableImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export default function ReliableImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
}: ReliableImageProps) {
  const [error, setError] = useState(false)

  // Ensure the src path is correctly formatted
  const imageSrc = src.startsWith("/") ? src : `/${src}`

  // Use standard img tag if there's an error with Next.js Image
  if (error) {
    if (fill) {
      return (
        <div className={`relative ${className}`}>
          <img src={imageSrc || "/placeholder.svg"} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      )
    }

    return <img src={imageSrc || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />
  }

  // Use Next.js Image component
  if (fill) {
    return (
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        fill
        className={className}
        priority={priority}
        onError={() => setError(true)}
        unoptimized={true}
      />
    )
  }

  return (
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      width={width || 100}
      height={height || 100}
      className={className}
      priority={priority}
      onError={() => setError(true)}
      unoptimized={true}
    />
  )
}

