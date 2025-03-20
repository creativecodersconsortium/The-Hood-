"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Compass, Clock, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface Place {
  id: string
  name: string
  description: string
  distance: string
  timeToReach: string
  category: string
  coordinates: {
    lat: number
    lng: number
  }
  image: string
  icon: React.ReactNode
}

interface PlaceCardProps {
  place: Place
}

export default function PlaceCard({ place }: PlaceCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
        <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow h-full">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={place.image || "/placeholder.svg"}
              alt={place.name}
              fill
              className="object-cover transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-[#2C5F2D] flex items-center gap-1">
              <span className="text-[#D16D45]">{place.icon}</span>
              <span>{place.category.charAt(0).toUpperCase() + place.category.slice(1)}</span>
            </div>
          </div>
          <CardContent className="p-5">
            <h3 className="font-serif text-xl text-[#2C5F2D] mb-2">{place.name}</h3>
            <p className="text-[#A9A9A9] mb-4 text-sm line-clamp-2">{place.description}</p>
            <div className="flex items-center gap-2 text-sm text-[#A9A9A9] mb-1">
              <Compass className="h-4 w-4 text-[#D16D45]" />
              <span>{place.distance}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#A9A9A9] mb-4">
              <Clock className="h-4 w-4 text-[#D16D45]" />
              <span>{place.timeToReach}</span>
            </div>
            <Button
              variant="outline"
              className="w-full border-[#2C5F2D] text-[#2C5F2D] hover:bg-[#2C5F2D] hover:text-white"
              onClick={() => setIsOpen(true)}
            >
              View Details
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-[#2C5F2D]">{place.name}</DialogTitle>
            <DialogDescription className="text-[#A9A9A9]">
              {place.distance} • {place.timeToReach}
            </DialogDescription>
          </DialogHeader>

          <div className="relative h-64 overflow-hidden rounded-md mt-4">
            <Image src={place.image || "/placeholder.svg"} alt={place.name} fill className="object-cover" />
          </div>

          <div className="mt-4">
            <p className="text-[#A9A9A9] mb-6">{place.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center">
                  <Compass className="h-5 w-5 text-[#D16D45]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Distance</p>
                  <p className="text-[#A9A9A9] text-sm">{place.distance} from hotel</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#D16D45]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Travel Time</p>
                  <p className="text-[#A9A9A9] text-sm">{place.timeToReach}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <Button
                variant="outline"
                className="flex-1 border-[#2C5F2D] text-[#2C5F2D] hover:bg-[#2C5F2D] hover:text-white"
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`,
                    "_blank",
                  )
                }
              >
                View on Map
              </Button>
              <Button
                className="flex-1 bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white"
                onClick={() => {
                  const message = `Hello, I'm interested in visiting ${place.name} which is ${place.distance} from The Hood. Can you help arrange this?`
                  window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
                  setIsOpen(false)
                }}
              >
                Book a Tour
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

