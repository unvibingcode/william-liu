import Link from "next/link"
import { ArrowRight } from "lucide-react"

const recentPosts = [
  {
    slug: "finding-balance",
    title: "Finding Balance in a Busy World",
    excerpt: "Reflections on managing work, hobbies, and personal time in the modern age.",
    date: "December 1, 2024",
    category: "Reflections",
  },
  {
    slug: "weekend-hike",
    title: "A Weekend Hike Through the Mountains",
    excerpt: "Discovering hidden trails and breathtaking views just an hour from the city.",
    date: "November 24, 2024",
    category: "Adventures",
  },
  {
    slug: "new-project",
    title: "Starting a New Creative Project",
    excerpt: "Why I decided to pick up watercolors and what I've learned so far.",
    date: "November 15, 2024",
    category: "Hobbies",
  },
]

export function RecentPosts() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Recent Writing</h2>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-6">
        {recentPosts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-medium group-hover:text-primary transition-colors">{post.title}</h3>
                <time className="text-sm text-muted-foreground shrink-0">{post.date}</time>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
