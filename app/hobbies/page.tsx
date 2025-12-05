import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { hobbies } from "@/lib/hobbies-data"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Hobbies - Your Name",
  description: "Explore my creative pursuits, from photography to painting to hiking.",
}

export default function HobbiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Hobbies & Projects</h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              The things I do when I'm not working. Each pursuit teaches me something new and keeps life interesting.
            </p>
          </header>

          <div className="grid gap-8">
            {hobbies.map((hobby) => (
              <Link key={hobby.slug} href={`/hobbies/${hobby.slug}`} className="group">
                <article className="flex flex-col md:flex-row gap-6 p-6 border border-border rounded-xl hover:border-primary/50 transition-colors">
                  <div className="md:w-48 md:h-48 shrink-0">
                    <Image
                      src={hobby.coverImage || "/placeholder.svg"}
                      alt={hobby.name}
                      width={200}
                      height={200}
                      className="w-full h-48 md:h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {hobby.name}
                        </h2>
                        <p className="text-muted-foreground mt-1">{hobby.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </div>

                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed line-clamp-2">
                      {hobby.longDescription}
                    </p>

                    <div className="mt-auto pt-4">
                      <span className="text-xs text-muted-foreground">
                        {hobby.projects.length} {hobby.projects.length === 1 ? "project" : "projects"}
                      </span>
                    </div>
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
