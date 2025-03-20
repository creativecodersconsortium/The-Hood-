"use client"

import Image from "next/image"
import { Users, Wifi, Tv, Droplet, UtensilsCrossed, Check, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import FadeIn from "@/components/animations/fade-in"
import BookingWidget from "@/components/booking-widget"

export default function RoomsPage() {
  // Room data
  const rooms = [
    {
      id: "boutique-room",
      name: "Boutique Room",
      description:
        "Our Boutique Rooms are elegantly designed for couples or solo travelers seeking luxury and intimacy. Enjoy modern amenities like a Smart TV and high-speed internet, complemented by the charm of Himalayan-inspired decor.",
      capacity: 2,
      price: "",
      image: "/images/hotel-lounge.png",
      features: [
        { icon: <Users className="h-4 w-4" />, text: "Capacity: 2 guests" },
        { icon: <Check className="h-4 w-4" />, text: "Private bathroom" },
        { icon: <Tv className="h-4 w-4" />, text: "Smart TV" },
        { icon: <Wifi className="h-4 w-4" />, text: "Complimentary Wi-Fi" },
        { icon: <Droplet className="h-4 w-4" />, text: "24/7 hot water" },
        { icon: <UtensilsCrossed className="h-4 w-4" />, text: "Access to in-house restaurant" },
      ],
      popular: true,
    },
    {
      id: "standard-room",
      name: "Standard Room",
      description:
        "Our Standard Rooms provide a cozy and affordable option without compromising on comfort. Ideal for travelers who value simplicity and functionality, each room ensures a restful stay.",
      capacity: 2,
      price: "",
      image: "/images/hotel-interior.png",
      features: [
        { icon: <Users className="h-4 w-4" />, text: "Capacity: 2 guests" },
        { icon: <Check className="h-4 w-4" />, text: "Private bathroom" },
        { icon: <Wifi className="h-4 w-4" />, text: "Complimentary Wi-Fi" },
        { icon: <Droplet className="h-4 w-4" />, text: "24/7 hot water" },
        { icon: <UtensilsCrossed className="h-4 w-4" />, text: "Access to in-house restaurant" },
      ],
      popular: false,
    },
    {
      id: "family-room",
      name: "Family Room",
      description:
        "Designed for small families or groups, our Family Room offers ample space and comfort. Experience quality time together in a setting that feels like a home away from home.",
      capacity: 3,
      price: "",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        { icon: <Users className="h-4 w-4" />, text: "Capacity: 3 guests" },
        { icon: <Check className="h-4 w-4" />, text: "Private bathroom" },
        { icon: <Wifi className="h-4 w-4" />, text: "Complimentary Wi-Fi" },
        { icon: <Droplet className="h-4 w-4" />, text: "24/7 hot water" },
        { icon: <UtensilsCrossed className="h-4 w-4" />, text: "Access to in-house restaurant" },
      ],
      popular: false,
    },
    {
      id: "mixed-dormitory",
      name: "Mixed Dormitory",
      description:
        "Perfect for solo travelers or groups seeking camaraderie, our Dormitory offers a communal living experience. Connect with fellow adventurers while enjoying the essential comforts.",
      capacity: 4,
      price: "",
      priceNote: "per bed",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        { icon: <Users className="h-4 w-4" />, text: "Capacity: 4 guests" },
        { icon: <Check className="h-4 w-4" />, text: "Shared sleeping area" },
        { icon: <Wifi className="h-4 w-4" />, text: "Complimentary Wi-Fi" },
        { icon: <Droplet className="h-4 w-4" />, text: "24/7 hot water" },
        { icon: <UtensilsCrossed className="h-4 w-4" />, text: "Access to in-house restaurant" },
      ],
      popular: false,
    },
  ]

  // Additional services
  const additionalServices = [
    { name: "Extra Bedding", price: "₹500 per bed" },
    { name: "Heater", price: "Available upon request" },
    { name: "Bonfire", price: "Available upon request" },
    { name: "Patio Heater", price: "Available upon request" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHeader
        title="Rooms & Accommodations"
        subtitle="Experience comfort and luxury with stunning mountain views in our thoughtfully designed rooms"
        image="/images/hotel-flags.png"
      />

      {/* Booking Widget */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <BookingWidget />
        </div>
      </section>

      {/* Room Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Our Room Types</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Choose from our range of accommodations designed to suit every traveler's needs and preferences.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <FadeIn key={room.id} delay={0.2 * index}>
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                    {room.popular && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#D16D45] hover:bg-[#D16D45]/90">Popular Choice</Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-[#2C5F2D]">
                      Capacity: {room.capacity} guests
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-2xl text-[#2C5F2D]">{room.name}</h3>
                      <div className="flex items-center gap-1 bg-[#F5F5DC]/50 px-2 py-1 rounded-full">
                        <Users className="h-4 w-4 text-[#2C5F2D]" />
                        <span className="text-sm font-medium text-[#2C5F2D]">{room.capacity}</span>
                      </div>
                    </div>

                    <p className="text-[#A9A9A9] mb-6">{room.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-[#A9A9A9]">
                          <div className="text-[#D16D45]">{feature.icon}</div>
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="flex-1 bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white"
                        onClick={() => {
                          const message = `Hello, I'd like to book a ${room.name} at The Hood Bir Billing.`
                          window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
                        }}
                      >
                        Book Now
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-[#2C5F2D] text-[#2C5F2D] hover:bg-[#2C5F2D] hover:text-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Amenities */}
      <section className="py-16 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Services & Amenities</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Discover the range of services and facilities designed to enhance your stay at Himalayan Haven.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Additional Services */}
            <FadeIn>
              <div>
                <h2 className="text-2xl font-serif text-[#2C5F2D] mb-6">Additional Services</h2>
                <p className="text-[#A9A9A9] mb-6">
                  Enhance your stay with our additional services tailored to your needs.
                </p>

                <div className="space-y-4">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                      <span className="font-medium">{service.name}</span>
                      <span className="text-[#D16D45]">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Tabs for Services & Amenities Categories */}
            <FadeIn delay={0.2}>
              <Tabs defaultValue="comfort" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="comfort">Comfort</TabsTrigger>
                  <TabsTrigger value="dining">Dining</TabsTrigger>
                  <TabsTrigger value="leisure">Leisure</TabsTrigger>
                </TabsList>

                <TabsContent value="comfort" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-[#2C5F2D] mb-4">Comfort & Convenience</h3>
                    <ul className="space-y-3">
                      {[
                        "Early Check-in & Late Check-out (Subject to availability, additional charges may apply)",
                        "Express Check-in/Check-out: Skip the wait with a hassle-free process",
                        "Concierge Services: Personalized assistance for travel plans, local sightseeing, and adventure bookings",
                        "24/7 Front Desk Support: Assistance anytime you need it",
                        "Complimentary high-speed Wi-Fi throughout the property",
                        "24/7 hot water availability",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 text-[#D16D45]">
                            <Check className="h-5 w-5" />
                          </div>
                          <span className="text-[#A9A9A9]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#2C5F2D] mb-4">Work & Co-Living</h3>
                    <ul className="space-y-3">
                      {[
                        "Co-Working Space: (Complimentary) A quiet, work-friendly environment with power backup",
                        "High-Speed Wi-Fi: Stay connected throughout the property",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 text-[#D16D45]">
                            <Check className="h-5 w-5" />
                          </div>
                          <span className="text-[#A9A9A9]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#2C5F2D] mb-4">Additional Essential Services</h3>
                    <ul className="space-y-3">
                      {[
                        "Laundry Service: (Chargeable) Hassle-free laundry services during your stay",
                        "Road Connectivity & Parking: (Complimentary) Well-connected roads and free parking for all guests",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 text-[#D16D45]">
                            <Check className="h-5 w-5" />
                          </div>
                          <span className="text-[#A9A9A9]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="dining" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-[#2C5F2D] mb-4">Dining & Social Spaces</h3>
                    <ul className="space-y-3">
                      {[
                        "In-House Restaurant: Enjoy authentic Himachali cuisine and international dishes",
                        "Dining Area & Open-Air Café: Relax in a bohemian-themed space",
                        "Live Screening (Large Screen): Complimentary live sports, movies, or special events under the open sky",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 text-[#D16D45]">
                            <Check className="h-5 w-5" />
                          </div>
                          <span className="text-[#A9A9A9]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#2C5F2D] mb-4">Experiential & Celebration Services</h3>
                    <ul className="space-y-3">
                      {[
                        "Personalized Celebrations: Custom decorations & arrangements for birthdays, anniversaries, and engagements",
                        "Private Candlelight Dinners: (Chargeable, pre-booking required) Romantic dining under the stars",
                        "Photography & Videography Services: (Chargeable, pre-booking required) Capture your memorable moments professionally",
                        "Themed Evenings: Enjoy Bonfire & BBQ Nights, Movie Nights, Music Sessions (chargeable or complimentary based on the event)",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 text-[#D16D45]">
                            <Check className="h-5 w-5" />
                          </div>
                          <span className="text-[#A9A9A9]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="leisure" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-[#2C5F2D] mb-4">Leisure & Recreation</h3>
                    <ul className="space-y-3">
                      {[
                        "Outdoor Games: (Complimentary) Enjoy badminton, volleyball, frisbee, and dart in the garden area",
                        "Open-Air Gym: (Complimentary) Stay fit while enjoying fresh mountain air",
                        "Library & Reading Nook: (Complimentary) Cozy up with a book on Himalayan culture, adventure, or travel",
                        "Hiking & Nature Walks: Guided walks available at an additional cost",
                        "Birdwatching Tours: Seasonal activity (chargeable) – spot exotic Himalayan birds with a guide",
                        "Bicycle, Car & Bike Rentals: (Chargeable) Explore Bir Billing at your own pace",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 text-[#D16D45]">
                            <Check className="h-5 w-5" />
                          </div>
                          <span className="text-[#A9A9A9]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#2C5F2D] mb-4">Unique Seasonal Experiences</h3>
                    <ul className="space-y-3">
                      {[
                        "Snowfall Camping & Stargazing: (Winter Exclusive, Chargeable) Experience an overnight adventure in snow-covered landscapes",
                        "Sunset & Sunrise Points Tour: (Chargeable, guided tours available) Witness breathtaking Himalayan views",
                        "Local Village Tour & Organic Farm Visit: (Chargeable, pre-booking required) Connect with local culture and traditions",
                        "Scenic views of the Himalayan landscape",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 text-[#D16D45]">
                            <Check className="h-5 w-5" />
                          </div>
                          <span className="text-[#A9A9A9]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Contact & Booking</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Have questions or ready to book? Reach out to us directly.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn delay={0.1}>
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-[#2C5F2D]/10 flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-[#2C5F2D]" />
                    </div>
                    <h3 className="font-medium mb-2">Phone</h3>
                    <p className="text-[#A9A9A9] mb-4">Call us directly</p>
                    <a href="tel:+919266415616" className="text-[#D16D45] font-medium mt-auto">
                      +911-9266415616
                    </a>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-[#2C5F2D]/10 flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-[#2C5F2D]" />
                    </div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <p className="text-[#A9A9A9] mb-4">Send us a message</p>
                    <a href="mailto:Thehoodbir5@gmail.com" className="text-[#D16D45] font-medium mt-auto">
                      Thehoodbir5@gmail.com
                    </a>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-[#2C5F2D]/10 flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-[#2C5F2D]" />
                    </div>
                    <h3 className="font-medium mb-2">Address</h3>
                    <p className="text-[#A9A9A9] mb-4">Visit our location</p>
                    <a
                      href="https://g.co/kgs/AUnBct7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D16D45] font-medium text-sm mt-auto"
                    >
                      Village Stain, P.O. Ahju, Tehsil Joginder Nagar, District Mandi, Himachal Pradesh, 175032
                    </a>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-[#D16D45] hover:bg-[#D16D45]/90 text-white"
                onClick={() => {
                  const message = "Hello, I'd like to book a stay at The Hood Bir Billing."
                  window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
                }}
              >
                Book via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Frequently Asked Questions</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Find answers to common questions about our accommodations and services.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="bookings" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>

              <TabsContent value="bookings" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      question: "How can I make a reservation?",
                      answer:
                        "You can book directly through our website, via WhatsApp, email, or by calling us. We recommend booking in advance, especially during peak seasons.",
                    },
                    {
                      question: "What is your check-in and check-out time?",
                      answer:
                        "Check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in or late check-in may be available upon request, subject to availability.",
                    },
                    {
                      question: "Do you offer airport or railway station transfers?",
                      answer:
                        "Yes, we can arrange transfers from Dharamshala Airport (Gaggal) or Pathankot Railway Station for an additional fee. Please contact us in advance to arrange this service.",
                    },
                  ].map((faq, index) => (
                    <FadeIn key={index} delay={0.1 * index}>
                      <Card className="border-none shadow-sm">
                        <CardContent className="p-6">
                          <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                          <p className="text-[#A9A9A9]">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      question: "Is Wi-Fi available in all rooms?",
                      answer:
                        "Yes, complimentary high-speed Wi-Fi is available throughout the property, including all rooms and common areas.",
                    },
                    {
                      question: "Do you have an in-house restaurant?",
                      answer:
                        "Yes, our in-house restaurant serves a variety of local Himachali and international cuisines. We use fresh, locally sourced ingredients whenever possible.",
                    },
                    {
                      question: "Is hot water available 24/7?",
                      answer:
                        "Yes, all our accommodations have 24/7 hot water availability for your comfort, especially during the colder months.",
                    },
                  ].map((faq, index) => (
                    <FadeIn key={index} delay={0.1 * index}>
                      <Card className="border-none shadow-sm">
                        <CardContent className="p-6">
                          <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                          <p className="text-[#A9A9A9]">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="policies" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      question: "What is your cancellation policy?",
                      answer:
                        "Cancellations made 48 hours before the check-in date are eligible for a full refund. Cancellations made within 48 hours of check-in are subject to a one-night charge.",
                    },
                    {
                      question: "Are pets allowed?",
                      answer:
                        "We are a pet-friendly hotel, but please inform us in advance if you're bringing a pet. Additional charges may apply.",
                    },
                    {
                      question: "Do you accommodate special dietary requirements?",
                      answer:
                        "Yes, our restaurant can accommodate various dietary requirements including vegetarian, vegan, and gluten-free options. Please inform us of your needs in advance.",
                    },
                  ].map((faq, index) => (
                    <FadeIn key={index} delay={0.1 * index}>
                      <Card className="border-none shadow-sm">
                        <CardContent className="p-6">
                          <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                          <p className="text-[#A9A9A9]">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

