"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import FadeIn from "@/components/animations/fade-in"

const categories = ["All", "Exterior", "Interior", "Activities", "Surroundings", "Rooms", "Food"]

const galleryImages = [
  { id: 1, src: "/images/hotel-flags.png", alt: "The Hood with colorful prayer flags", category: "Exterior" },
  { id: 2, src: "/images/hotel-garden-view.png", alt: "Garden view of The Hood", category: "Exterior" },
  { id: 3, src: "/images/hotel-lounge.png", alt: "Colorful lounge area with mountain views", category: "Interior" },
  {
    id: 4,
    src: "/images/hotel-interior.png",
    alt: "Interior with turquoise shelving and cozy seating",
    category: "Interior",
  },
  {
    id: 5,
    src: "/images/hotel-badminton.png",
    alt: "Badminton and outdoor activities at The Hood",
    category: "Activities",
  },
  { id: 6, src: "/images/hotel-seating.png", alt: "Outdoor seating area with red umbrella", category: "Activities" },
  { id: 7, src: "/images/hotel-dartboard.png", alt: "Dartboard in the garden", category: "Activities" },
  { id: 8, src: "/images/hotel-front.png", alt: "Front view of The Hood", category: "Exterior" },
  { id: 9, src: "/images/hotel-garden.png", alt: "Garden and lawn area of The Hood", category: "Exterior" },
  { id: 10, src: "/placeholder.svg?height=600&width=800", alt: "Paragliding in Bir Billing", category: "Surroundings" },
  {
    id: 11,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Sunrise over Himalayan peaks",
    category: "Surroundings",
  },
  { id: 12, src: "/placeholder.svg?height=600&width=800", alt: "Sunset view from hotel", category: "Surroundings" },
  { id: 13, src: "/placeholder.svg?height=600&width=800", alt: "Local Himachali festival", category: "Surroundings" },
  { id: 14, src: "/placeholder.svg?height=600&width=800", alt: "Snow covered mountains", category: "Surroundings" },
  { id: 15, src: "/placeholder.svg?height=600&width=800", alt: "Morning mist in the valley", category: "Surroundings" },
  { id: 16, src: "/placeholder.svg?height=600&width=800", alt: "Boutique Room", category: "Rooms" },
  { id: 17, src: "/placeholder.svg?height=600&width=800", alt: "Traditional Himachali cuisine", category: "Food" },
  { id: 18, src: "/placeholder.svg?height=600&width=800", alt: "Standard Room", category: "Rooms" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null)

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHeader
        title="Photo Gallery"
        subtitle="Explore the beauty of The Hood Bir Billing through our curated collection of images"
        image="/images/hotel-flags.png"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={cn(
                    activeCategory === category
                      ? "bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white"
                      : "border-[#2C5F2D] text-[#2C5F2D] hover:bg-[#2C5F2D] hover:text-white",
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <FadeIn key={image.id} delay={0.05 * (index % 8)}>
                <div
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all group"
                  onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">{image.alt}</p>
                      <p className="text-sm text-white/80">{image.category}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white hover:text-[#D16D45]"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
            <div className="bg-white p-2 rounded-lg">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <p className="mt-2 p-2 text-center text-[#A9A9A9]">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

