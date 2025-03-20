"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, ChevronRight, Wind, Sunrise, Sunset, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Gallery from "@/components/gallery"
import ExperienceCard from "@/components/experience-card"
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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div className="flex items-center mb-6">
            <div className="relative h-32 w-32 mr-4">
              <Image src="/images/the-hood-logo.png" alt="The Hood Logo" fill className="object-contain" priority />
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
                    <Image src="/images/the-hood-logo.png" alt="The Hood Logo" fill className="object-contain" />
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
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C5F2D] mb-4">Our Accommodations</h2>
              <p className="text-xl text-[#A9A9A9] max-w-3xl mx-auto">
                Experience comfort and luxury with stunning mountain views in our thoughtfully designed rooms and
                suites.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Boutique Rooms",
                description:
                  "Elegantly designed for couples or solo travelers seeking luxury and intimacy with Himalayan-inspired decor.",
                image: "/images/hotel-lounge.png",
                capacity: 2,
              },
              {
                title: "Standard Rooms",
                description:
                  "A cozy and affordable option without compromising on comfort, ideal for travelers who value simplicity.",
                image: "/images/hotel-interior.png",
                capacity: 2,
              },
              {
                title: "Family Room",
                description:
                  "Ample space and comfort for small families or groups in a setting that feels like a home away from home.",
                image: "/placeholder.svg?height=400&width=600",
                capacity: 3,
              },
            ].map((room, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 px-4 py-2 rounded-full text-base font-medium text-[#2C5F2D]">
                      Capacity: {room.capacity} guests
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl text-[#2C5F2D] mb-3">{room.title}</h3>
                    <p className="text-lg text-[#A9A9A9] mb-5">{room.description}</p>
                    <Link href="/rooms">
                      <Button
                        variant="outline"
                        className="w-full border-[#2C5F2D] text-[#2C5F2D] hover:bg-[#2C5F2D] hover:text-white text-lg py-5"
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/rooms">
              <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white text-lg py-6 px-8">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C5F2D] mb-4">Unforgettable Experiences</h2>
              <p className="text-xl text-[#A9A9A9] max-w-3xl mx-auto">
                Discover the magic of Bir Billing through our curated experiences and adventures.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Paragliding",
                description:
                  "Experience the thrill of flying over the beautiful valleys of Bir Billing, known as the paragliding capital of India.",
                icon: <Wind className="h-8 w-8 text-[#1E90FF]" />,
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Sunrise Views",
                description: "Wake up to breathtaking sunrise views that paint the Himalayan peaks in golden hues.",
                icon: <Sunrise className="h-8 w-8 text-[#D16D45]" />,
                image: "/images/hotel-badminton.png",
              },
              {
                title: "Sunset Moments",
                description: "Witness magical sunsets that transform the sky into a canvas of vibrant colors.",
                icon: <Sunset className="h-8 w-8 text-[#D16D45]" />,
                image: "/images/hotel-seating.png",
              },
              {
                title: "Snow Adventures",
                description:
                  "Experience the serene beauty of snowfall and engage in exciting snow activities during winter.",
                icon: <Snowflake className="h-8 w-8 text-[#1E90FF]" />,
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((experience, index) => (
              <FadeIn key={index} delay={0.15 * index}>
                <ExperienceCard
                  title={experience.title}
                  description={experience.description}
                  icon={experience.icon}
                  image={experience.image}
                />
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/experiences">
              <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white text-lg py-6 px-8">
                Explore All Experiences
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C5F2D] mb-4">Capture the Beauty</h2>
              <p className="text-xl text-[#A9A9A9] max-w-3xl mx-auto">
                Explore our curated gallery of breathtaking landscapes, cultural moments, and unforgettable experiences.
              </p>
            </div>
          </FadeIn>

          <Gallery limit={6} />

          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white text-lg py-6 px-8">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C5F2D] mb-4">Guest Experiences</h2>
              <p className="text-xl text-[#A9A9A9] max-w-3xl mx-auto">
                Hear from our guests who've experienced the magic of The Hood firsthand.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "An unforgettable experience! The views were breathtaking, and the staff made us feel like family. The paragliding experience arranged by the hotel was the highlight of our trip.",
                name: "John Doe",
                title: "Adventure Enthusiast",
              },
              {
                text: "The perfect blend of luxury and nature. Waking up to the sunrise over the mountains from our room was magical. The local cuisine served at the restaurant was authentic and delicious.",
                name: "Jane Smith",
                title: "Travel Blogger",
              },
              {
                text: "We came for the paragliding but fell in love with everything else too. The hotel's location is perfect, and the staff went above and beyond to make our anniversary special.",
                name: "David Wilson",
                title: "Photographer",
              },
            ].map((testimonial, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-8 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg text-[#A9A9A9] mb-6 italic flex-grow">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-[#A9A9A9]/20 flex items-center justify-center">
                        <span className="text-[#2C5F2D] font-bold text-lg">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-lg">{testimonial.name}</p>
                        <p className="text-base text-[#A9A9A9]">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center mb-6">
                  <div className="relative h-16 w-16 mr-4">
                    <Image src="/images/the-hood-logo.png" alt="The Hood Logo" fill className="object-contain" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#2C5F2D]">Find Us</h2>
                </div>
                <p className="text-xl text-[#A9A9A9] mb-8">
                  Located in the picturesque town of Bir, known for its paragliding, monasteries, and stunning Himalayan
                  views. We're easily accessible yet wonderfully secluded.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#D16D45] mt-1" />
                    <span className="text-lg text-[#A9A9A9]">
                      Village Stain, P.O. ahju, Tehsil Joginder Nagar District Mandi, Himachal Pradesh 175032
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-[#D16D45]" />
                    <span className="text-lg text-[#A9A9A9]">+911-9266415616</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-[#D16D45]" />
                    <span className="text-lg text-[#A9A9A9]">Thehoodbir5@gmail.com</span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white text-lg py-6 px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.5752848285473!2d76.7183!3d32.0334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAyJzAwLjIiTiA3NsKwNDMnMDUuOSJF!5e0!3m2!1sen!2sin!4v1616661080000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="The Hood Bir Billing Location"
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section className="py-24 bg-[#2C5F2D] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <div className="relative h-24 w-24">
                <Image src="/images/the-hood-logo.png" alt="The Hood Logo" fill className="object-contain" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready for Your Himalayan Adventure?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Book your stay now and embark on a journey of tranquility, adventure, and unforgettable memories.
            </p>
            <Button
              size="lg"
              className="bg-[#D16D45] hover:bg-[#D16D45]/90 text-white text-xl py-7 px-10"
              onClick={() => {
                const message = "Hello, I'd like to book a stay at The Hood Bir Billing."
                window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
              }}
            >
              Book Now via WhatsApp
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

