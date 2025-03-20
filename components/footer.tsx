import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SafeImage from "@/components/safe-image"

export default function Footer() {
  return (
    <footer className="bg-[#2C5F2D] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative h-16 w-16 mr-3">
                <SafeImage
                  src="/images/the-hood-logo.png"
                  alt="The Hood Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl">The Hood</span>
                <span className="font-serif text-sm text-white/80">Bir Billing</span>
              </div>
            </div>
            <p className="text-lg text-white/80 mb-6">
              Stay Cozy Explore Freely. Experience tranquility and adventure in the heart of Himachal Pradesh. Our
              boutique hotel offers comfortable accommodations with stunning mountain views.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/thehoodbirbilling"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D16D45] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/TheHoodBirBilling"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D16D45] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#D16D45] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Rooms", href: "/rooms" },
                { name: "Experiences", href: "/experiences" },
                { name: "Gallery", href: "/gallery" },
                { name: "Nearby", href: "/nearby" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-lg text-white/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-[#D16D45] mt-0.5" />
                <span className="text-base text-white/80">
                  Village Stain, P.O. ahju, Tehsil Joginder Nagar District Mandi, Himachal Pardesh, Joginder Nagar,
                  Himachal Pradesh 175032
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-[#D16D45]" />
                <a href="tel:+919266415616" className="text-lg text-white/80 hover:text-white transition-colors">
                  +911-9266415616
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-[#D16D45]" />
                <a
                  href="mailto:Thehoodbir5@gmail.com"
                  className="text-lg text-white/80 hover:text-white transition-colors"
                >
                  Thehoodbir5@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-medium mb-6">Newsletter</h3>
            <p className="text-lg text-white/80 mb-6">Subscribe to our newsletter for special offers and updates.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-base py-6"
              />
              <Button className="bg-[#D16D45] hover:bg-[#D16D45]/90 text-white text-base">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 text-center text-white/60 text-base">
          <p>© {new Date().getFullYear()} The Hood Bir Billing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

