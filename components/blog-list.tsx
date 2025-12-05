"use client"

import { useState } from "react"
import Link from "next/link"
import { type BlogPost, blogPosts, getAllCategories } from "@/lib/blog-data"
import { BlogSearch } from "./blog-search"
import { cn } from "@/lib/utils"

export function BlogList() {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = getAllCategories()

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredPosts(selectedCategory ? blogPosts.filter((p) => p.category === selectedCategory) : blogPosts)
      return
    }

    const lowercaseQuery = query.toLowerCase()
    let results = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
    )

    if (selectedCategory) {
      results = results.filter((p) => p.category === selectedCategory)
    }

    setFilteredPosts(results)
  }

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category)
    if (category === null) {
      setFilteredPosts(blogPosts)
    } else {
      setFilteredPosts(blogPosts.filter((post) => post.category === category))
    }
  }

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <BlogSearch onSearch={handleSearch} />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryFilter(null)}
            className={cn(
              "px-3 py-1.5 text-sm rounded-full transition-colors",
              selectedCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={cn(
                "px-3 py-1.5 text-sm rounded-full transition-colors",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {featuredPosts.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-6">Featured</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-6 border border-border rounded-xl hover:border-primary/50 transition-colors h-full">
                    <span className="text-xs text-primary font-medium uppercase tracking-wide">{post.category}</span>
                    <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <time className="text-xs text-muted-foreground">{post.date}</time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <section>
        {featuredPosts.length > 0 && <h2 className="text-xl font-semibold mb-6">All Posts</h2>}
        <div className="space-y-6">
          {regularPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-primary font-medium uppercase tracking-wide">{post.category}</span>
                    <h3 className="font-medium group-hover:text-primary transition-colors">{post.title}</h3>
                  </div>
                  <time className="text-sm text-muted-foreground shrink-0">{post.date}</time>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {filteredPosts.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No posts found. Try a different search term or category.
        </p>
      )}
    </div>
  )
}
