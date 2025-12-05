import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const recentImages = [
  {
    src: "/mountain-landscape-sunset-photography.jpg",
    alt: "Mountain sunset",
    gallery: "travel",
  },
  {
    src: "/cozy-coffee-shop-interior-warm-lighting.jpg",
    alt: "Coffee shop",
    gallery: "everyday",
  },
  {
    src: "/watercolor-painting-supplies-artistic.jpg",
    alt: "Art supplies",
    gallery: "projects",
  },
  {
    src: "/forest-path-autumn-leaves-nature.jpg",
    alt: "Forest path",
    gallery: "travel",
  },
]

export function RecentGallery() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Recent Photos</h2>
        <Link
          href="/gallery"
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {recentImages.map((image, index) => (
          <Link
            key={index}
            href={`/gallery/${image.gallery}`}
            className="relative aspect-square overflow-hidden rounded-lg group"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
