import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getPostBySlug, blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: `${post.title} - Your Name`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      const trimmed = paragraph.trim()

      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={index} className="text-xl font-semibold mt-8 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        )
      }

      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        return (
          <p key={index} className="font-semibold mb-2">
            {trimmed.replace(/\*\*/g, "")}
          </p>
        )
      }

      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").filter((line) => line.startsWith("- "))
        return (
          <ul key={index} className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^- \*\*(.+?)\*\*:/, "<strong>$1</strong>:").replace("- ", "")}</li>
            ))}
          </ul>
        )
      }

      if (trimmed) {
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {trimmed}
          </p>
        )
      }

      return null
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-primary font-medium uppercase tracking-wide">{post.category}</span>
              <span className="text-muted-foreground">•</span>
              <time className="text-sm text-muted-foreground">{post.date}</time>
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">{post.title}</h1>

            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          </header>

          <div className="prose">{renderContent(post.content)}</div>

          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  )
}
