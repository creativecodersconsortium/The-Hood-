"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

interface Place {
  id: string
  name: string
  coordinates: {
    lat: number
    lng: number
  }
  category: string
  distance?: string
  timeToReach?: string
  description?: string
}

interface InteractiveMapProps {
  places: Place[]
}

export default function InteractiveMap({ places }: InteractiveMapProps) {
  const [activePlace, setActivePlace] = useState<string | null>(null)

  const handlePlaceClick = (placeId: string) => {
    setActivePlace(activePlace === placeId ? null : placeId)
  }

  // Get the active place object
  const activePlaceObj = places.find((p) => p.id === activePlace)

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <div className="p-5 bg-[#F5F5DC]/20">
        <div className="relative z-10">
          <h3 className="text-xl text-[#2C5F2D] font-medium mb-3">Interactive Map</h3>
          <p className="text-base text-[#A9A9A9] mb-6">Explore {places.length} locations around Bir Billing</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            {places.slice(0, 6).map((place) => (
              <div
                key={place.id}
                className={`bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                  activePlace === place.id ? "ring-2 ring-[#D16D45]" : ""
                }`}
                onClick={() => handlePlaceClick(place.id)}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-[#D16D45]" />
                  <span className="font-medium text-[#2C5F2D] text-sm">{place.name}</span>
                </div>
                <div className="text-xs text-[#A9A9A9]">{place.distance && <span>{place.distance}</span>}</div>
              </div>
            ))}
          </div>

          {activePlace && (
            <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
              <h4 className="font-medium text-lg text-[#2C5F2D] mb-2">{activePlaceObj?.name}</h4>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-[#F5F5DC]/50 px-2 py-1 rounded-full text-xs font-medium text-[#2C5F2D]">
                  {activePlaceObj?.category.charAt(0).toUpperCase() + activePlaceObj?.category.slice(1)}
                </span>
                {activePlaceObj?.distance && (
                  <span className="bg-[#F5F5DC]/50 px-2 py-1 rounded-full text-xs font-medium text-[#2C5F2D]">
                    {activePlaceObj.distance}
                  </span>
                )}
                {activePlaceObj?.timeToReach && (
                  <span className="bg-[#F5F5DC]/50 px-2 py-1 rounded-full text-xs font-medium text-[#2C5F2D]">
                    {activePlaceObj.timeToReach}
                  </span>
                )}
              </div>
              {activePlaceObj?.description && (
                <p className="text-[#A9A9A9] text-sm mb-2">{activePlaceObj.description}</p>
              )}
              <div className="flex justify-end">
                <button className="text-sm text-[#D16D45] hover:underline" onClick={() => setActivePlace(null)}>
                  Close
                </button>
              </div>
            </div>
          )}

          <p className="text-sm text-[#A9A9A9] mt-4 text-center">Click on a location to see details</p>
        </div>
      </div>

      {/* Visual map representation */}
      <div className="relative h-[300px] bg-[#e8f4f8] p-4">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[#e8f4f8]"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center relative z-10">
            <p className="text-[#2C5F2D] font-medium mb-2">Bir Billing Map View</p>
            {activePlace ? (
              <p className="text-[#D16D45]">Showing location: {activePlaceObj?.name}</p>
            ) : (
              <p className="text-[#A9A9A9] text-sm">Select a location to view details</p>
            )}
          </div>
        </div>

        {/* Simplified map markers */}
        {places.slice(0, 6).map((place, index) => (
          <div
            key={place.id}
            className={`absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-10 ${
              activePlace === place.id ? "scale-150 z-20" : "scale-100 z-10"
            }`}
            style={{
              top: `${30 + index * 40}px`,
              left: `${100 + index * 50}px`,
            }}
            onClick={() => handlePlaceClick(place.id)}
          >
            <MapPin
              className={`h-6 w-6 ${activePlace === place.id ? "text-[#D16D45]" : "text-[#2C5F2D]"}`}
              fill={activePlace === place.id ? "#D16D45" : "transparent"}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

