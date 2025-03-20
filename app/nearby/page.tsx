"use client"

import Image from "next/image"
import {
  Clock,
  Compass,
  Car,
  Bus,
  Plane,
  Train,
  Mountain,
  Sunset,
  Building,
  ShoppingBag,
  Waves,
  Leaf,
  Tent,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import FadeIn from "@/components/animations/fade-in"
import InteractiveMap from "@/components/interactive-map"
import TravelCard from "@/components/travel-card"
import PlaceCard from "@/components/place-card"

export default function NearbyPage() {
  // Nearby places data with real information
  const places = [
    {
      id: "paragliding-takeoff",
      name: "Paragliding in Bir",
      description:
        "Enjoy world-class paragliding with hotel pickup. Bir Billing is known as the paragliding capital of India with perfect wind conditions and stunning views of the Dhauladhar range.",
      distance: "8 km",
      timeToReach: "25 min drive",
      category: "adventure",
      coordinates: { lat: 32.0587, lng: 76.7437 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Mountain className="h-5 w-5" />,
    },
    {
      id: "gunehar-waterfall",
      name: "Gunehar Waterfall",
      description:
        "A peaceful waterfall amidst nature's beauty, perfect for a refreshing day trip. The cascading waters create a serene atmosphere surrounded by lush greenery.",
      distance: "6 km",
      timeToReach: "20 min drive",
      category: "nature",
      coordinates: { lat: 32.04, lng: 76.7 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Waves className="h-5 w-5" />,
    },
    {
      id: "chowgan-tea-garden",
      name: "Chowgan Tea Garden",
      description:
        "Stroll through lush tea gardens with scenic views of the surrounding mountains. Learn about tea cultivation and processing while enjoying the fragrant atmosphere.",
      distance: "500 m",
      timeToReach: "5 min walk",
      category: "nature",
      coordinates: { lat: 32.0334, lng: 76.72 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Leaf className="h-5 w-5" />,
    },
    {
      id: "sunset-point",
      name: "Sunset Point (Landing Site)",
      description:
        "Perfect spot to enjoy a stunning sunset and watch paragliders land throughout the day. The golden hour views of the valley are simply breathtaking.",
      distance: "1.5 km",
      timeToReach: "5 min drive",
      category: "nature",
      coordinates: { lat: 32.0334, lng: 76.7437 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Sunset className="h-5 w-5" />,
    },
    {
      id: "chokling-monastery",
      name: "Chokling Monastery",
      description:
        "A tranquil Tibetan monastery with spiritual vibes and beautiful architecture. Experience the peaceful atmosphere and learn about Tibetan Buddhism.",
      distance: "1.5 km",
      timeToReach: "5 min drive",
      category: "culture",
      coordinates: { lat: 32.0334, lng: 76.72 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Building className="h-5 w-5" />,
    },
    {
      id: "sherabling-monastery",
      name: "Sherabling Monastery",
      description:
        "A serene spot for reflection and peace, featuring traditional Tibetan Buddhist architecture. The monastery is surrounded by pine forests creating a mystical ambiance.",
      distance: "7.5 km",
      timeToReach: "25 min drive",
      category: "culture",
      coordinates: { lat: 32.0526, lng: 76.65 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Building className="h-5 w-5" />,
    },
    {
      id: "local-market",
      name: "Local Market",
      description:
        "Shop for local handicrafts and souvenirs, and experience the vibrant local culture. Find unique handmade items and interact with friendly local vendors.",
      distance: "1 km",
      timeToReach: "5 min drive",
      category: "culture",
      coordinates: { lat: 32.0334, lng: 76.72 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      id: "barot-valley",
      name: "Barot Valley",
      description:
        "A hidden gem with lush landscapes and tranquility, perfect for nature lovers. The valley offers excellent trout fishing, hiking trails, and picturesque views.",
      distance: "50 km",
      timeToReach: "1.5 hour drive",
      category: "nature",
      coordinates: { lat: 32.08, lng: 76.79 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Mountain className="h-5 w-5" />,
    },
    {
      id: "prashar-lake",
      name: "Prashar Lake",
      description:
        "A pristine lake surrounded by snow-capped peaks, offering breathtaking views. The lake has a floating island and a three-storied pagoda-style temple dedicated to Sage Prashar.",
      distance: "85 km",
      timeToReach: "3 hour drive",
      category: "nature",
      coordinates: { lat: 31.7, lng: 77.1 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Waves className="h-5 w-5" />,
    },
    {
      id: "deer-park-institute",
      name: "Deer Park Institute",
      description:
        "Learn about Tibetan Buddhism in a peaceful setting, with regular workshops and events. The institute is dedicated to preserving and sharing the wisdom traditions of India.",
      distance: "1 km",
      timeToReach: "5 min drive",
      category: "culture",
      coordinates: { lat: 32.0334, lng: 76.72 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Building className="h-5 w-5" />,
    },
    {
      id: "baijnath-temple",
      name: "Baijnath Temple",
      description:
        "A historic temple dedicated to Lord Shiva, built in the 13th century with intricate stone carvings. It's one of the oldest temples in the region with remarkable Nagara architecture.",
      distance: "11 km",
      timeToReach: "20 min drive",
      category: "culture",
      coordinates: { lat: 32.0526, lng: 76.65 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Building className="h-5 w-5" />,
    },
    {
      id: "rajgundha-valley",
      name: "Rajgundha Valley",
      description:
        "A scenic trek through a stunning valley with panoramic mountain views. The remote valley is known for its pristine beauty and traditional villages.",
      distance: "30 km",
      timeToReach: "1 hour drive + trek",
      category: "adventure",
      coordinates: { lat: 32.1, lng: 76.8 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Mountain className="h-5 w-5" />,
    },
    {
      id: "tatwani-hot-springs",
      name: "Tatwani Hot Springs Trek",
      description:
        "22 km drive and 8 km trek to natural hot springs nestled in the mountains. The therapeutic waters are believed to have healing properties for various ailments.",
      distance: "22 km",
      timeToReach: "45 min drive + 3 hour trek",
      category: "adventure",
      coordinates: { lat: 32.05, lng: 76.9 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Tent className="h-5 w-5" />,
    },
    {
      id: "gadh-trek",
      name: "Gadh Trek",
      description:
        "Enjoy a 360-degree view of the city and sunset at the Mata Maheshwari Temple. This moderate trek rewards you with panoramic views of the entire Bir valley.",
      distance: "2 km",
      timeToReach: "1 hour trek",
      category: "adventure",
      coordinates: { lat: 32.04, lng: 76.73 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Mountain className="h-5 w-5" />,
    },
    {
      id: "toy-train",
      name: "Toy Train Ride at Ahju Railway Station",
      description:
        "A nostalgic train ride through the beautiful landscape of the Kangra Valley. The narrow-gauge railway offers spectacular views of the countryside and mountains.",
      distance: "1 km",
      timeToReach: "5 min drive",
      category: "culture",
      coordinates: { lat: 32.03, lng: 76.72 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Train className="h-5 w-5" />,
    },
    {
      id: "machiyal-sagner",
      name: "Machiyal & Sagner",
      description:
        "A quiet, peaceful area for relaxation surrounded by pine forests. These twin villages offer an authentic glimpse into rural Himalayan life.",
      distance: "7 km",
      timeToReach: "15 min drive",
      category: "nature",
      coordinates: { lat: 32.06, lng: 76.78 },
      image: "/placeholder.svg?height=400&width=600",
      icon: <Leaf className="h-5 w-5" />,
    },
  ]

  // Travel options data
  const travelOptions = [
    {
      type: "bus",
      icon: <Bus className="h-10 w-10" />,
      title: "Volvo Bus",
      options: [
        { from: "Delhi ISBT", duration: "11 hrs", note: "Overnight journey" },
        { from: "Chandigarh", duration: "6 hrs", note: "Overnight journey" },
      ],
    },
    {
      type: "car",
      icon: <Car className="h-10 w-10" />,
      title: "Car",
      options: [
        { from: "Delhi", duration: "10 hrs", note: "via Mandi" },
        { from: "Chandigarh", duration: "5 hrs", note: "via Mandi" },
      ],
    },
    {
      type: "train",
      icon: <Train className="h-10 w-10" />,
      title: "Train",
      options: [
        { from: "Amb (AADR)", distance: "125 km", duration: "3.5 hrs" },
        { from: "Una (UHL)", distance: "134 km", duration: "4 hrs" },
        { from: "Pathankot (PTK)", distance: "139 km", duration: "4.5 hrs" },
      ],
    },
    {
      type: "flight",
      icon: <Plane className="h-10 w-10" />,
      title: "Flight",
      options: [{ from: "Dharamshala Airport", distance: "65 km", duration: "2 hrs" }],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHeader
        title="Explore Nearby"
        subtitle="Discover the natural beauty, cultural heritage, and adventure opportunities around Bir Billing"
        image="/images/hotel-badminton.png"
      />

      {/* Quick Traveler Guide */}
      <section className="py-12 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="flex justify-center items-center mb-4">
                <div className="relative h-16 w-16 mr-3">
                  <Image src="/images/the-hood-logo.png" alt="The Hood Logo" fill className="object-contain" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D]">Bir Billing & Surroundings</h2>
              </div>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Your quick guide to exploring the best of what our region has to offer
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.slice(0, 6).map((place, index) => (
              <FadeIn key={place.id} delay={0.1 * index}>
                <PlaceCard place={place} />
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-[#2C5F2D] text-[#2C5F2D] hover:bg-[#2C5F2D] hover:text-white"
              onClick={() => document.getElementById("all-places")?.scrollIntoView({ behavior: "smooth" })}
            >
              View All Destinations
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Discover the Region - Horizontal Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 mr-3">
                    <Image src="/images/the-hood-logo.png" alt="The Hood Logo" fill className="object-contain" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#2C5F2D]">Discover the Region</h2>
                </div>
                <p className="text-lg text-[#A9A9A9] mb-4">
                  Bir Billing is surrounded by natural beauty, cultural landmarks, and adventure opportunities. Use our
                  interactive map to explore the region and plan your activities.
                </p>
              </div>
              <div className="md:w-2/3">
                <InteractiveMap places={places} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Explore By Category - Full Width */}
      <section className="py-16 bg-[#F5F5DC]/10" id="all-places">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-4">Explore By Category</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto mb-8">
                Find the perfect destinations based on your interests
              </p>
            </div>
          </FadeIn>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-[#F5F5DC]/30 w-full grid grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="adventure">Adventure</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
              <TabsTrigger value="nature">Nature</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {places.map((place, index) => (
                  <FadeIn key={place.id} delay={0.1 * (index % 9)}>
                    <PlaceCard place={place} />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="adventure" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {places
                  .filter((place) => place.category === "adventure")
                  .map((place, index) => (
                    <FadeIn key={place.id} delay={0.1 * index}>
                      <PlaceCard place={place} />
                    </FadeIn>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="culture" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {places
                  .filter((place) => place.category === "culture")
                  .map((place, index) => (
                    <FadeIn key={place.id} delay={0.1 * index}>
                      <PlaceCard place={place} />
                    </FadeIn>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="nature" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {places
                  .filter((place) => place.category === "nature")
                  .map((place, index) => (
                    <FadeIn key={place.id} delay={0.1 * index}>
                      <PlaceCard place={place} />
                    </FadeIn>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Travel Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-4">
                <div className="relative h-16 w-16 mr-3">
                  <Image src="/images/the-hood-logo.png" alt="The Hood Logo" fill className="object-contain" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D]">How to Reach Us</h2>
              </div>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Multiple convenient travel options to help you plan your journey to Bir Billing
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelOptions.map((option, index) => (
              <FadeIn key={option.type} delay={0.2 * index}>
                <TravelCard option={option} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Day Trips Section */}
      <section className="py-16 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Popular Day Trips</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Explore these amazing destinations that are perfect for a day trip from our hotel
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dharamshala & McLeodganj",
                description:
                  "Visit the home of the Dalai Lama, explore Tibetan culture, and enjoy the vibrant atmosphere of these twin towns.",
                distance: "35 km",
                timeToReach: "1 hour drive",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                name: "Palampur Tea Gardens",
                description:
                  "Discover the lush tea plantations of Palampur, known as the 'Tea Capital of North India', and sample fresh Kangra tea.",
                distance: "30 km",
                timeToReach: "50 min drive",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                name: "Kangra Fort",
                description:
                  "Explore one of the oldest and largest forts in India, with a history dating back to the ancient Trigarta Kingdom.",
                distance: "45 km",
                timeToReach: "1.5 hour drive",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((trip, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={trip.image || "/placeholder.svg"}
                      alt={trip.name}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-serif text-xl text-[#2C5F2D] mb-2">{trip.name}</h3>
                    <p className="text-[#A9A9A9] mb-4">{trip.description}</p>
                    <div className="flex items-center gap-2 text-sm text-[#A9A9A9] mb-1">
                      <Compass className="h-4 w-4 text-[#D16D45]" />
                      <span>{trip.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#A9A9A9] mb-4">
                      <Clock className="h-4 w-4 text-[#D16D45]" />
                      <span>{trip.timeToReach}</span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-[#2C5F2D] text-[#2C5F2D] hover:bg-[#2C5F2D] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Transportation Services</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                We offer convenient transportation options to help you explore the region with ease
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Private Car Rental",
                description:
                  "Explore at your own pace with our private car rental service. Choose from a range of comfortable vehicles with experienced local drivers.",
                price: "",
              },
              {
                title: "Airport Transfers",
                description:
                  "Convenient transfers to and from Dharamshala Airport (Gaggal) or Pathankot Railway Station. Pre-book for a hassle-free journey.",
                price: "",
              },
              {
                title: "Guided Tours",
                description:
                  "Join our curated guided tours to popular destinations with knowledgeable local guides who share insights about the region.",
                price: "",
              },
            ].map((service, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="font-serif text-xl text-[#2C5F2D] mb-2">{service.title}</h3>
                    <p className="text-[#A9A9A9] mb-4 flex-grow">{service.description}</p>
                    <Button
                      className="w-full bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white mt-auto"
                      onClick={() => {
                        const message = `Hello, I'm interested in booking the ${service.title} service.`
                        window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
                      }}
                    >
                      Book Service
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

