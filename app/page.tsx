"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FadeIn from "@/components/animations/fade-in"
import BookingWidget from "@/components/booking-widget"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hotel-garden.png"
            alt="The Hood Bir Billing - Garden View"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div className="flex items-center mb-6">
            <div className="relative h-32 w-32 mr-4">
              <Image
                src="/images/the-hood-logo.png"
                alt="The Hood Logo"
                width={128}
                height={128}
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-2 max-w-3xl">The Hood</h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white/90 mb-6 max-w-3xl">Bir Billing</h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 max-w-2xl">
              Stay Cozy Explore Freely. Immerse yourself in breathtaking mountain views, exhilarating adventures, and
              serene moments.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#D16D45] hover:bg-[#D16D45]/90 text-white text-lg py-6 px-8"
                onClick={() => {
                  const message = "Hello, I'd like to book a stay at The Hood Bir Billing."
                  window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
                }}
              >
                Book Your Stay
              </Button>
              <Link href="/experiences">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 text-lg py-6 px-8"
                >
                  Explore Experiences
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronRight className="h-12 w-12 text-white rotate-90" />
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <BookingWidget />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center mb-6">
                  <div className="relative h-20 w-20 mr-4">
                    <Image
                      src="/images/the-hood-logo.png"
                      alt="The Hood Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#2C5F2D]">Welcome</h2>
                </div>
                <p className="text-xl text-[#A9A9A9] mb-8">
                  Nestled in the serene landscapes of Bir Billing, The Hood offers a perfect blend of comfort and
                  nature. Our hotel is a sanctuary for those seeking peace, adventure, and unforgettable experiences in
                  the heart of Himachal Pradesh.
                </p>
                <p className="text-xl text-[#A9A9A9] mb-8">
                  From paragliding enthusiasts to meditation seekers, we cater to every traveler's needs with our
                  thoughtfully designed accommodations and curated experiences.
                </p>
                <Link href="/about">
                  <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white text-lg py-6 px-8">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/hotel-front.png"
                  alt="The Hood Bir Billing - Front View"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

