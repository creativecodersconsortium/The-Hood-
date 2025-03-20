import { Check } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"

interface AmenitiesGridProps {
  title: string
  amenities: string[]
  delay?: number
}

export default function AmenitiesGrid({ title, amenities, delay = 0 }: AmenitiesGridProps) {
  return (
    <FadeIn delay={delay}>
      <div>
        <h3 className="text-xl font-medium text-[#2C5F2D] mb-4">{title}</h3>
        <ul className="space-y-3">
          {amenities.map((amenity, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 text-[#D16D45]">
                <Check className="h-5 w-5" />
              </div>
              <span className="text-[#A9A9A9]">{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

