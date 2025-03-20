"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Sun } from "lucide-react"

export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    temperature: 18,
    condition: "Sunny",
    icon: <Sun className="h-8 w-8 text-yellow-500" />,
  })

  // This is a placeholder for real weather data
  // In a real application, you would fetch data from a weather API

  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-[#2C5F2D]">Current Weather</h3>
            <p className="text-xs text-[#A9A9A9]">Bir Billing</p>
          </div>
          <div className="flex items-center gap-2">
            {weather.icon}
            <div>
              <span className="text-lg font-medium">{weather.temperature}°C</span>
              <p className="text-xs text-[#A9A9A9]">{weather.condition}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

