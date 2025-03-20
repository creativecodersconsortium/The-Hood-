import Image from "next/image"
import FadeIn from "@/components/animations/fade-in"

interface PageHeaderProps {
  title: string
  subtitle?: string
  image: string
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative h-[45vh] md:h-[55vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority unoptimized />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6">{title}</h1>
          {subtitle && <p className="text-2xl md:text-3xl text-white/90 max-w-3xl">{subtitle}</p>}
        </FadeIn>
      </div>
    </section>
  )
}

