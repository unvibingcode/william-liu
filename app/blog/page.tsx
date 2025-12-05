import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogList } from "@/components/blog-list"

export const metadata = {
  title: "Blog - Your Name",
  description: "Personal reflections, adventures, and thoughts on life, work, and creative projects.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Personal reflections, adventures, and the occasional deep dive into my recent explorations.
            </p>
          </header>

          <BlogList />
        </div>
      </main>

      <Footer />
    </div>
  )
}
