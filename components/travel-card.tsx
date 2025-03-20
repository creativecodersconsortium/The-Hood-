"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

interface TravelOption {
  from: string
  duration?: string
  distance?: string
  note?: string
}

interface TravelCardProps {
  option: {
    type: string
    icon: React.ReactNode
    title: string
    options: TravelOption[]
  }
}

export default function TravelCard({ option }: TravelCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
        <CardContent className="p-6">
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center mb-3">
              <div className="text-[#2C5F2D]">{option.icon}</div>
            </div>
            <h3 className="font-serif text-xl text-[#2C5F2D]">{option.title}</h3>
          </div>

          <div className="space-y-3">
            {option.options.map((item, index) => (
              <div key={index} className="border-t border-gray-100 pt-3">
                <p className="font-medium text-sm">{item.from}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                  {item.duration && (
                    <div className="flex items-center gap-1 text-xs text-[#A9A9A9]">
                      <Clock className="h-3 w-3 text-[#D16D45]" />
                      <span>{item.duration}</span>
                    </div>
                  )}
                  {item.distance && (
                    <div className="flex items-center gap-1 text-xs text-[#A9A9A9]">
                      <MapPin className="h-3 w-3 text-[#D16D45]" />
                      <span>{item.distance}</span>
                    </div>
                  )}
                </div>
                {item.note && <p className="text-xs text-[#D16D45] mt-1 italic">{item.note}</p>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

