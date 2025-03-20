"use client"

import Image from "next/image"
import { Wind, Sunrise, Sunset, Snowflake, Mountain, Camera, Utensils, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import FadeIn from "@/components/animations/fade-in"

export default function ExperiencesPage() {
  // Experiences data
  const experiences = [
    {
      id: "paragliding",
      title: "Paragliding Adventure",
      description:
        "Experience the thrill of flying over the beautiful valleys of Bir Billing, known as the paragliding capital of India. Our expert guides ensure a safe and unforgettable adventure.",
      longDescription:
        "Bir Billing is internationally renowned as one of the best paragliding sites in the world. The unique geography and weather conditions create perfect flying conditions throughout most of the year. Our hotel partners with certified paragliding operators to offer tandem flights for beginners and solo flights for experienced pilots. The experience begins with a scenic drive to the Billing take-off site, followed by a comprehensive safety briefing. Once airborne, you'll soar like a bird, taking in panoramic views of the Dhauladhar range and the Kangra Valley below. Flights typically last 15-30 minutes, ending at the landing site in Bir.",
      price: "",
      duration: "Half-day activity",
      bestSeason: "March-June, September-November",
      category: "adventure",
      icon: <Wind className="h-8 w-8 text-[#1E90FF]" />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "sunrise-trek",
      title: "Sunrise Mountain Trek",
      description:
        "Wake up early for a guided trek to witness breathtaking sunrise views that paint the Himalayan peaks in golden hues. A photographer's paradise!",
      longDescription:
        "This early morning adventure begins before dawn as we trek to a specially selected viewpoint to witness the sunrise over the Dhauladhar range. Our experienced guides lead you through pine forests and mountain trails to reach the perfect spot just as the first rays of sunlight begin to illuminate the snow-capped peaks. The changing colors of the mountains—from deep blue to purple, pink, and finally golden—create a magical atmosphere that photographers and nature lovers will treasure. After enjoying the sunrise, we'll have a hot mountain breakfast before returning to the hotel. This moderate trek is suitable for most fitness levels.",
      price: "",
      duration: "3-4 hours",
      bestSeason: "Year-round (weather permitting)",
      category: "nature",
      icon: <Sunrise className="h-8 w-8 text-[#D16D45]" />,
      image: "/images/hotel-badminton.png",
    },
    {
      id: "sunset-viewpoint",
      title: "Sunset Meditation Session",
      description:
        "Experience a guided meditation session as the sun sets behind the mountains, creating a perfect atmosphere for mindfulness and reflection.",
      longDescription:
        "Combine the natural beauty of a Himalayan sunset with the inner peace of meditation. This experience takes place at our specially designated sunset viewpoint, where the panoramic views create the perfect backdrop for mindfulness practice. Our meditation instructor guides you through breathing exercises and meditation techniques as the changing colors of sunset wash over the mountains. The session is suitable for both beginners and experienced practitioners, focusing on presence, gratitude, and connection with nature. As darkness falls, we return to the hotel with lanterns, creating a magical end to a transformative experience.",
      price: "",
      duration: "2 hours",
      bestSeason: "Year-round (weather permitting)",
      category: "wellness",
      icon: <Sunset className="h-8 w-8 text-[#D16D45]" />,
      image: "/images/hotel-seating.png",
    },
    {
      id: "snow-trekking",
      title: "Winter Snow Adventure",
      description:
        "Experience the serene beauty of snowfall and engage in exciting snow activities during winter. Perfect for those seeking a magical winter wonderland.",
      longDescription:
        "During the winter months (December to February), the higher elevations around Bir Billing transform into a snow-covered paradise. Our Winter Snow Adventure takes you to these pristine areas for a day of snow trekking, snowball fights, and breathtaking winter photography. Equipped with proper winter gear and led by experienced guides, you'll trek through snow-laden pine forests and open meadows, experiencing the profound silence and beauty of the Himalayas in winter. The tour includes hot beverages and a packed lunch to keep you warm and energized throughout the adventure. This experience is weather-dependent and requires moderate fitness levels.",
      price: "",
      duration: "Full day",
      bestSeason: "December-February",
      category: "adventure",
      icon: <Snowflake className="h-8 w-8 text-[#1E90FF]" />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "mountain-biking",
      title: "Mountain Biking Expedition",
      description:
        "Explore the rugged terrain and scenic trails of Bir Billing on a mountain biking adventure suitable for various skill levels.",
      longDescription:
        "Discover the diverse landscapes around Bir Billing on two wheels with our Mountain Biking Expedition. We offer routes for beginners, intermediate, and advanced riders, each showcasing different aspects of the region's natural beauty. Ride through pine forests, village paths, and mountain trails with our experienced guides who ensure both safety and an authentic experience. All necessary equipment, including quality mountain bikes and safety gear, is provided. The expedition includes regular stops at scenic viewpoints and local tea stalls, allowing you to connect with both nature and culture. This is an excellent way to cover more ground than hiking while still immersing yourself in the environment.",
      price: "",
      duration: "Half-day or full-day options",
      bestSeason: "March-June, September-November",
      category: "adventure",
      icon: <Mountain className="h-8 w-8 text-[#2C5F2D]" />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "photography-tour",
      title: "Himalayan Photography Tour",
      description:
        "Join our professional photographer for a guided tour of the most photogenic locations around Bir Billing, with tips and tricks for capturing the perfect shot.",
      longDescription:
        "Designed for photography enthusiasts of all levels, this specialized tour takes you to carefully selected locations that showcase the region's diverse beauty. Led by a professional photographer familiar with the area, you'll learn how to capture the unique light, landscapes, and cultural elements of the Himalayas. The tour covers various photography techniques including landscape, portrait, and cultural photography. Our guide provides personalized tips based on your equipment and experience level. Small group sizes ensure individual attention, and the flexible itinerary allows for adjustments based on lighting conditions and special events. Whether you use a professional camera or smartphone, you'll come away with improved skills and memorable images.",
      price: "",
      duration: "Full day",
      bestSeason: "Year-round",
      category: "culture",
      icon: <Camera className="h-8 w-8 text-[#A9A9A9]" />,
      image: "/images/hotel-flags.png",
    },
    {
      id: "cooking-class",
      title: "Himachali Cooking Class",
      description:
        "Learn to prepare traditional Himachali dishes using local ingredients and age-old techniques in this hands-on culinary experience.",
      longDescription:
        "Immerse yourself in the rich culinary traditions of Himachal Pradesh with our authentic cooking class. The experience begins with a visit to our organic garden to select fresh ingredients, followed by a session in our traditional kitchen. Our local chef guides you through the preparation of 4-5 regional specialties, sharing family recipes and cooking techniques passed down through generations. You'll learn about the unique spices and ingredients that define Himachali cuisine, as well as their cultural significance and health benefits. After the cooking session, enjoy the fruits of your labor with a communal meal in our dining area. Each participant receives a recipe booklet to recreate these dishes at home.",
      price: "",
      duration: "3-4 hours",
      bestSeason: "Year-round",
      category: "culture",
      icon: <Utensils className="h-8 w-8 text-[#D16D45]" />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "village-tour",
      title: "Local Village Experience",
      description:
        "Visit nearby traditional villages to experience authentic Himachali culture, interact with locals, and observe traditional crafts and daily life.",
      longDescription:
        "Step into the authentic rhythm of Himalayan life with our immersive village experience. This cultural journey takes you to nearby traditional villages where time seems to move at a different pace. Walking through narrow lanes lined with traditional mud and wood houses, you'll observe and participate in daily activities that have remained unchanged for generations. Meet local artisans practicing traditional crafts such as weaving, wood carving, and pottery, with opportunities to try your hand at these ancient skills. Share tea with village elders who recount local legends and history. This respectful cultural exchange provides genuine insights into Himachali heritage while contributing directly to the village economy.",
      price: "",
      duration: "Half-day",
      bestSeason: "Year-round",
      category: "culture",
      icon: <Users className="h-8 w-8 text-[#2C5F2D]" />,
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHeader
        title="Experiences & Activities"
        subtitle="Discover the magic of the Himalayas through our curated experiences and adventures"
        image="/images/hotel-garden-view.png"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-[#F5F5DC]/30">
                <TabsTrigger value="all">All Experiences</TabsTrigger>
                <TabsTrigger value="adventure">Adventure</TabsTrigger>
                <TabsTrigger value="nature">Nature</TabsTrigger>
                <TabsTrigger value="culture">Culture</TabsTrigger>
                <TabsTrigger value="wellness">Wellness</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences.map((experience, index) => (
                  <FadeIn key={experience.id} delay={0.1 * (index % 6)}>
                    <ExperienceCard experience={experience} />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="adventure" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences
                  .filter((exp) => exp.category === "adventure")
                  .map((experience, index) => (
                    <FadeIn key={experience.id} delay={0.1 * index}>
                      <ExperienceCard experience={experience} />
                    </FadeIn>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="nature" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences
                  .filter((exp) => exp.category === "nature")
                  .map((experience, index) => (
                    <FadeIn key={experience.id} delay={0.1 * index}>
                      <ExperienceCard experience={experience} />
                    </FadeIn>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="culture" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences
                  .filter((exp) => exp.category === "culture")
                  .map((experience, index) => (
                    <FadeIn key={experience.id} delay={0.1 * index}>
                      <ExperienceCard experience={experience} />
                    </FadeIn>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="wellness" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences
                  .filter((exp) => exp.category === "wellness")
                  .map((experience, index) => (
                    <FadeIn key={experience.id} delay={0.1 * index}>
                      <ExperienceCard experience={experience} />
                    </FadeIn>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="py-16 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/hotel-dartboard.png"
                  alt="Outdoor activities at The Hood"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-4">Activities at The Hood</h2>
                <p className="text-lg text-[#A9A9A9] mb-6">
                  At The Hood, we offer a variety of on-site activities to keep you entertained during your stay. From
                  outdoor games like badminton and darts to cozy lounging areas perfect for reading or socializing,
                  there's something for everyone.
                </p>
                <p className="text-lg text-[#A9A9A9] mb-6">
                  Our garden area features comfortable seating under umbrellas where you can enjoy the mountain views,
                  and our common areas are designed with colorful, comfortable furnishings to help you relax and unwind.
                </p>
                <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white">Explore Our Activities</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Indoor Experiences */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Indoor Comfort & Relaxation</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Our thoughtfully designed indoor spaces provide the perfect setting for relaxation after a day of
                adventure
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/hotel-lounge.png"
                  alt="Colorful lounge area at The Hood"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-serif mb-2">Cozy Lounge Areas</h3>
                    <p className="text-white/90">Comfortable seating with colorful cushions and panoramic views</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/hotel-interior.png"
                  alt="Interior with turquoise shelving"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-serif mb-2">Artistic Interior Design</h3>
                    <p className="text-white/90">
                      Unique turquoise shelving and vibrant color schemes create a warm atmosphere
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Seasonal Activities */}
      <section className="py-16 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Seasonal Activities</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Each season in Bir Billing offers unique experiences and natural beauty. Plan your visit according to
                your interests.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: "Spring (March-May)",
                description:
                  "Perfect weather for paragliding, trekking, and outdoor activities. Wildflowers bloom across the meadows, creating colorful landscapes.",
                activities: ["Paragliding", "Mountain Biking", "Nature Photography", "Bird Watching"],
              },
              {
                season: "Summer (June-August)",
                description:
                  "Escape the plains' heat in our pleasant mountain climate. Occasional monsoon showers bring lush greenery and misty mountain views.",
                activities: ["Waterfall Treks", "Cultural Experiences", "Cooking Classes", "Meditation Retreats"],
              },
              {
                season: "Autumn (September-November)",
                description:
                  "The best season for paragliding with clear skies and perfect wind conditions. Comfortable temperatures and excellent visibility.",
                activities: ["Paragliding", "Trekking", "Photography Tours", "Village Visits"],
              },
              {
                season: "Winter (December-February)",
                description:
                  "Experience the magic of snowfall in the higher elevations. Cozy accommodations with mountain views and winter activities.",
                activities: ["Snow Trekking", "Winter Photography", "Bonfire Evenings", "Stargazing"],
              },
            ].map((season, index) => (
              <FadeIn key={index} delay={0.15 * index}>
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="font-serif text-xl text-[#2C5F2D] mb-3">{season.season}</h3>
                    <p className="text-[#A9A9A9] mb-4 text-sm flex-grow">{season.description}</p>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Popular Activities:</h4>
                      <ul className="text-sm text-[#A9A9A9] space-y-1">
                        {season.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#D16D45]"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-[#2C5F2D] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready for an Adventure?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Our team can help you plan the perfect itinerary based on your interests and the season of your visit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#D16D45] hover:bg-[#D16D45]/90 text-white"
                onClick={() => {
                  const message = "Hello, I'd like to book an experience at The Hood Bir Billing."
                  window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
                }}
              >
                Book an Experience
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => {
                  window.location.href = "/contact"
                }}
              >
                Contact Our Team
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Experience Card Component
function ExperienceCard({ experience }) {
  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={experience.image || "/placeholder.svg"}
          alt={experience.title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-[#2C5F2D]">
          {experience.category.charAt(0).toUpperCase() + experience.category.slice(1)}
        </div>
      </div>
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-full bg-[#F5F5DC] flex items-center justify-center">{experience.icon}</div>
          <h3 className="font-serif text-xl text-[#2C5F2D]">{experience.title}</h3>
        </div>
        <p className="text-[#A9A9A9] mb-4 text-sm flex-grow">{experience.description}</p>
        <div className="flex items-center justify-between text-sm text-[#A9A9A9] mb-4">
          <span>{experience.price}</span>
          <span>{experience.duration}</span>
        </div>
        <Button
          className="w-full bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white"
          onClick={() => {
            const message = `Hello, I'm interested in the ${experience.title} experience at The Hood Bir Billing.`
            window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}

