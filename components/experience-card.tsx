import type { ReactNode } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ExperienceCardProps {
  title: string
  description: string
  icon: ReactNode
  image: string
}

export default function ExperienceCard({ title, description, icon, image }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow h-full group">
    <div className="relative h-56 overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <Button
          variant="outline"
          className="w-full bg-white/90 border-white text-[#2C5F2D] hover:bg-white hover:text-[#2C5F2D] text-base"
        >
          Learn More
        </Button>
      </div>
    </div>
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center">{icon}</div>
        <h3 className="font-serif text-xl md:text-2xl text-[#2C5F2D]">{title}</h3>
      </div>
      <p className="text-lg text-[#A9A9A9]">{description}</p>
    </CardContent>
  </Card>
  \
}

