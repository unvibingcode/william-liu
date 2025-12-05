import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { galleries } from "@/lib/gallery-data"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Gallery - Your Name",
  description: "Photo galleries from travels, daily life, and creative projects.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Photo Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              A visual journal of moments captured along the way. Click any collection to explore.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {galleries.map((gallery) => (
              <Link key={gallery.slug} href={`/gallery/${gallery.slug}`} className="group">
                <article className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <Image
                    src={gallery.coverImage || "/placeholder.svg"}
                    alt={gallery.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h2 className="text-xl font-semibold text-white mb-1">{gallery.name}</h2>
                    <p className="text-white/80 text-sm">{gallery.description}</p>
                    <span className="text-white/60 text-xs mt-2 block">{gallery.images.length} photos</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
