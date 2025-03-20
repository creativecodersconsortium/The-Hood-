"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import ReliableImage from "@/components/reliable-image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Experiences", href: "/experiences" },
    { name: "Gallery", href: "/gallery" },
    { name: "Nearby", href: "/nearby" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="relative h-16 w-16 mr-3">
                <ReliableImage
                  src="/images/the-hood-logo.png"
                  alt="The Hood Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-2xl ${isScrolled ? "text-[#2C5F2D]" : "text-white"}`}>The Hood</span>
                <span className={`font-serif text-sm ${isScrolled ? "text-[#2C5F2D]/80" : "text-white/80"}`}>
                  Bir Billing
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors hover:text-[#D16D45] ${
                  isScrolled
                    ? pathname === link.href
                      ? "text-[#D16D45]"
                      : "text-[#2C5F2D]"
                    : pathname === link.href
                      ? "text-[#D16D45]"
                      : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="bg-[#D16D45] hover:bg-[#D16D45]/90 text-white text-base py-6 px-6"
              onClick={() => {
                const message = "Hello, I'd like to book a stay at The Hood Bir Billing."
                window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
              }}
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className={`h-8 w-8 ${isScrolled ? "text-[#2C5F2D]" : "text-white"}`} />
            ) : (
              <Menu className={`h-8 w-8 ${isScrolled ? "text-[#2C5F2D]" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-24">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xl font-medium py-3 ${pathname === link.href ? "text-[#D16D45]" : "text-[#2C5F2D]"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="bg-[#D16D45] hover:bg-[#D16D45]/90 text-white w-full mt-4 text-lg py-6"
              onClick={() => {
                const message = "Hello, I'd like to book a stay at The Hood Bir Billing."
                window.open(`https://wa.me/+919266415616?text=${encodeURIComponent(message)}`, "_blank")
                setIsMenuOpen(false)
              }}
            >
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

