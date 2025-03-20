"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined)
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined)
  const [guests, setGuests] = useState("2")

  const handleBooking = () => {
    // Format dates for message
    const checkInStr = checkIn ? checkIn.toDateString() : "Not specified"
    const checkOutStr = checkOut ? checkOut.toDateString() : "Not specified"

    // Create WhatsApp message
    const message = `Hello, I'd like to book a stay at The Hood Bir Billing from ${checkInStr} to ${checkOutStr} for ${guests} guests.`

    // Open WhatsApp with the message
    window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <label htmlFor="check-in" className="block text-base font-medium text-gray-700 mb-2">
            Check-in
          </label>
          <DatePicker date={checkIn} setDate={setCheckIn} />
        </div>
        <div>
          <label htmlFor="check-out" className="block text-base font-medium text-gray-700 mb-2">
            Check-out
          </label>
          <DatePicker date={checkOut} setDate={setCheckOut} />
        </div>
        <div>
          <label htmlFor="guests" className="block text-base font-medium text-gray-700 mb-2">
            Guests
          </label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="text-base py-6">
              <SelectValue placeholder="Select guests" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()} className="text-base">
                  {num} {num === 1 ? "Guest" : "Guests"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button onClick={handleBooking} className="w-full bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white text-lg py-6">
            Book Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

