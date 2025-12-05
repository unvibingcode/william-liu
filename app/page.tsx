import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RecentPosts } from "@/components/recent-posts"
import { RecentGallery } from "@/components/recent-gallery"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            <div className="shrink-0">
              <Image
                src="/HomePageProfileHeadshot.jpg"
                alt="Your Name"
                width={180}
                height={180}
                className="rounded-full"
                priority
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-balance">Hey there, I'm William</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
                Welcome to my corner of the internet! Take a peek, you'll find some tidbits about my life journey, projects, photography, and more.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  More about me <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
                >
                  Read my writing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <RecentPosts />
        </section>

        {/* Recent Gallery */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <RecentGallery />
        </section>

        {/* Quick Links */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/projects"
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Projects</h3>
              <p className="text-sm text-muted-foreground">
                Explore my creative and technical work, from photography to art to outdoor adventures.
              </p>
            </Link>

            <Link
              href="/gallery"
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Photo Gallery</h3>
              <p className="text-sm text-muted-foreground">
                Browse through my photography collections from travels, daily life, and creative projects.
              </p>
            </Link>

            <Link
              href="/resume"
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Professional Work</h3>
              <p className="text-sm text-muted-foreground">
                View my professional experience, skills, and how to get in touch for work opportunities.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
