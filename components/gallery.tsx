"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import FadeIn from "@/components/animations/fade-in"

interface GalleryProps {
  limit?: number
}

export default function Gallery({ limit }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Sample gallery images
  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Mountain view from hotel",
      category: "Landscapes",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Hotel room interior",
      category: "Accommodations",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Paragliding over Bir Billing",
      category: "Experiences",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Local Himachali cuisine",
      category: "Dining",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Sunrise over the mountains",
      category: "Landscapes",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Hotel garden area",
      category: "Property",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Traditional Himachali architecture",
      category: "Culture",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Meditation session",
      category: "Experiences",
    },
  ]

  // Apply limit if provided
  const displayImages = limit ? galleryImages.slice(0, limit) : galleryImages

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayImages.map((image, index) => (
          <FadeIn key={index} delay={0.1 * index}>
            <div
              className="relative h-48 md:h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">{image.category}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative h-[80vh] w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

