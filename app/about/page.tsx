"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, Users, Calendar, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import FadeIn from "@/components/animations/fade-in"
import ParallaxSection from "@/components/parallax-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHeader
        title="About The Hood"
        subtitle="Bir Billing - Stay Cozy Explore Freely - Our story, values, and commitment to creating memorable experiences"
        image="/images/hotel-front.png"
      />

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-[#2C5F2D] mb-8">Our Story</h2>
                <p className="text-xl text-[#A9A9A9] mb-8">
                  The Hood was born from a passion for the mountains and a desire to create a space where travelers
                  could feel at home while exploring the breathtaking landscapes of Himachal Pradesh.
                </p>
                <p className="text-xl text-[#A9A9A9] mb-8">
                  What started as a small guesthouse has evolved into a beloved retreat that combines comfort with
                  adventure, offering guests an authentic experience of Himalayan hospitality.
                </p>
                <p className="text-xl text-[#A9A9A9]">
                  Our motto "Stay Cozy Explore Freely" reflects our commitment to providing a warm, welcoming base from
                  which our guests can venture out to discover the natural beauty and cultural richness of Bir Billing.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/hotel-garden.png" alt="The Hood Bir Billing" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C5F2D] mb-4">Our Values</h2>
              <p className="text-xl text-[#A9A9A9] max-w-3xl mx-auto">
                The principles that guide everything we do at The Hood Bir Billing
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-12 w-12 text-[#D16D45]" />,
                title: "Heartfelt Hospitality",
                description:
                  "We believe in treating every guest like family, creating a warm and welcoming atmosphere where you can truly relax and feel at home.",
              },
              {
                icon: <Award className="h-12 w-12 text-[#D16D45]" />,
                title: "Authentic Experiences",
                description:
                  "We're committed to helping our guests discover the real Himachal Pradesh, from its natural beauty to its rich cultural heritage.",
              },
              {
                icon: <Users className="h-12 w-12 text-[#D16D45]" />,
                title: "Community Connection",
                description:
                  "We work closely with local communities, supporting local businesses and promoting sustainable tourism practices.",
              },
            ].map((value, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center mb-6">
                      {value.icon}
                    </div>
                    <h3 className="font-serif text-2xl text-[#2C5F2D] mb-4">{value.title}</h3>
                    <p className="text-lg text-[#A9A9A9]">{value.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote Section */}
      <ParallaxSection imageUrl="/images/hotel-garden.png" height="h-[350px]">
        <div className="text-center text-white">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">"Stay Cozy Explore Freely"</h2>
            <p className="text-2xl text-white/80 max-w-2xl mx-auto">
              Our promise to provide you with a comfortable haven and the freedom to explore the wonders of Bir Billing.
            </p>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Meet Our Team</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                The passionate individuals who make The Hood Bir Billing a special place
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Founder & Host",
                bio: "A passionate traveler and mountain lover who founded The Hood to share the beauty of Bir Billing with the world.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Priya Verma",
                role: "Experience Coordinator",
                bio: "With deep knowledge of local culture and adventure activities, Priya ensures our guests have unforgettable experiences.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Vikram Singh",
                role: "Head Chef",
                bio: "Specializing in authentic Himachali cuisine, Vikram creates delicious meals using fresh, locally-sourced ingredients.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h3 className="font-serif text-xl text-[#2C5F2D] mb-1">{member.name}</h3>
                    <p className="text-[#D16D45] font-medium mb-3">{member.role}</p>
                    <p className="text-[#A9A9A9]">{member.bio}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Our Journey</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                The evolution of The Hood Bir Billing over the years
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F5F5DC]"></div>

            {[
              {
                year: "2018",
                title: "The Beginning",
                description:
                  "The Hood started as a small guesthouse with just three rooms, welcoming adventurous travelers to Bir Billing.",
                icon: <Calendar className="h-6 w-6" />,
              },
              {
                year: "2019",
                title: "Expansion",
                description:
                  "We expanded our facilities and began offering curated experiences to help guests explore the region.",
                icon: <Calendar className="h-6 w-6" />,
              },
              {
                year: "2020",
                title: "Community Focus",
                description:
                  "We strengthened our ties with the local community, supporting local artisans and sustainable tourism initiatives.",
                icon: <Calendar className="h-6 w-6" />,
              },
              {
                year: "2022",
                title: "Today",
                description:
                  "The Hood has evolved into a beloved destination for travelers seeking authentic Himalayan experiences with all the comforts of home.",
                icon: <Calendar className="h-6 w-6" />,
              },
            ].map((milestone, index) => (
              <FadeIn key={index} delay={0.3 * index}>
                <div className={`relative z-10 mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                    <div className="w-10 h-10 rounded-full bg-[#2C5F2D] flex items-center justify-center text-white">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="inline-block px-3 py-1 bg-[#F5F5DC] text-[#2C5F2D] rounded-full text-sm font-medium mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-serif text-xl text-[#2C5F2D] mb-2">{milestone.title}</h3>
                      <p className="text-[#A9A9A9]">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2C5F2D] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Experience The Hood Bir Billing</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              We look forward to welcoming you and sharing our little piece of paradise in the Himalayas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#D16D45] hover:bg-[#D16D45]/90 text-white"
                onClick={() => {
                  const message = "Hello, I'd like to book a stay at The Hood Bir Billing."
                  window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
                }}
              >
                Book Your Stay
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

