import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getGalleryBySlug, galleries } from "@/lib/gallery-data"
import { GalleryGrid } from "@/components/gallery-grid"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return galleries.map((gallery) => ({
    slug: gallery.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const gallery = getGalleryBySlug(slug)

  if (!gallery) {
    return { title: "Gallery Not Found" }
  }

  return {
    title: `${gallery.name} - Your Name`,
    description: gallery.description,
  }
}

export default async function GalleryCollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const gallery = getGalleryBySlug(slug)

  if (!gallery) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to galleries
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">{gallery.name}</h1>
            <p className="text-lg text-muted-foreground">{gallery.description}</p>
            <span className="text-sm text-muted-foreground mt-2 block">{gallery.images.length} photos</span>
          </header>

          <GalleryGrid images={gallery.images} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
