"use client"

import { MapPin, Phone, Mail, Send, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import FadeIn from "@/components/animations/fade-in"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for bookings, inquiries, or just to say hello!"
        image="/placeholder.svg?height=600&width=1200"
      />

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeIn>
              <div className="lg:col-span-1">
                <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-6">Get In Touch</h2>
                <p className="text-lg text-[#A9A9A9] mb-8">
                  Whether you have questions about our accommodations, want to book an experience, or need directions to
                  our property, we're here to help.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center mt-1">
                      <MapPin className="h-5 w-5 text-[#D16D45]" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-[#A9A9A9]">
                        Village Stain, P.O. ahju, Tehsil Joginder Nagar District Mandi, Himachal Pardesh, Joginder
                        Nagar, Himachal Pradesh 175032
                      </p>
                      <a
                        href="https://g.co/kgs/AUnBct7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D16D45] text-sm hover:underline mt-1 inline-block"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center mt-1">
                      <Phone className="h-5 w-5 text-[#D16D45]" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-[#A9A9A9]">+911-9266415616</p>
                      <p className="text-[#A9A9A9] text-sm mt-1">Available 9:00 AM - 8:00 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center mt-1">
                      <Mail className="h-5 w-5 text-[#D16D45]" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-[#A9A9A9]">Thehoodbir5@gmail.com</p>
                      <p className="text-[#A9A9A9] text-sm mt-1">We'll respond as quickly as possible</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/thehoodbirbilling"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center text-[#D16D45] hover:bg-[#D16D45] hover:text-white transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/TheHoodBirBilling"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center text-[#D16D45] hover:bg-[#D16D45] hover:text-white transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://wa.me/+919266415616"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#F5F5DC]/50 flex items-center justify-center text-[#D16D45] hover:bg-[#D16D45] hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="lg:col-span-2">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-serif text-[#2C5F2D] mb-6">Send Us a Message</h2>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Your Name
                          </label>
                          <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" placeholder="What is this regarding?" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea id="message" placeholder="Your message" rows={5} />
                      </div>

                      <Button className="bg-[#2C5F2D] hover:bg-[#2C5F2D]/90 text-white">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F5F5DC]/10">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Find Us</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Located in the picturesque village of Stain, we're easily accessible yet wonderfully secluded
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
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
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#2C5F2D] mb-2">Frequently Asked Questions</h2>
              <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto">
                Quick answers to common questions about reaching and staying at The Hood
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How do I reach The Hood Bir Billing?",
                  answer:
                    "You can reach us by road from major cities like Delhi (10 hrs) and Chandigarh (5 hrs). The nearest railway stations are at Amb (125 km), Una (134 km), and Pathankot (139 km). The closest airport is Dharamshala Airport (Gaggal), which is 65 km away.",
                },
                {
                  question: "What is the best time to visit?",
                  answer:
                    "Bir Billing is beautiful year-round. Spring (March-May) and autumn (September-November) offer perfect weather for paragliding and outdoor activities. Summer (June-August) provides relief from the plains' heat, while winter (December-February) offers a magical snowy landscape.",
                },
                {
                  question: "Do you arrange paragliding experiences?",
                  answer:
                    "Yes, we can arrange paragliding experiences with certified operators. Bir Billing is known as the paragliding capital of India, and we're happy to help you experience this thrilling adventure.",
                },
                {
                  question: "How can I book a room?",
                  answer:
                    "You can book directly through our website, via WhatsApp at +911-9266415616, or by emailing us at Thehoodbir5@gmail.com. We recommend booking in advance, especially during peak seasons.",
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2C5F2D] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Book Your Stay?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us directly for the best rates and personalized service
            </p>
            <Button
              size="lg"
              className="bg-[#D16D45] hover:bg-[#D16D45]/90 text-white"
              onClick={() => {
                const message = "Hello, I'd like to book a stay at The Hood."
                window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
              }}
            >
              Book via WhatsApp
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

