import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getProjectBySlug, projects } from "@/lib/projects-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.name} - Your Name`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    "in-progress": "bg-amber-100 text-amber-800",
    planned: "bg-blue-100 text-blue-800",
  }

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planned: "Planned",
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">{project.name}</h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">{project.longDescription}</p>
          </header>

          <div className="mb-12">
            <Image
              src={project.coverImage || "/placeholder.svg"}
              alt={project.name}
              width={900}
              height={400}
              className="w-full h-64 md:h-80 object-cover rounded-xl"
            />
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-8">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {project.projects.map((item) => (
                <article
                  key={item.id}
                  className="border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <span className={cn("px-2 py-0.5 text-xs rounded-full shrink-0", statusColors[item.status])}>
                        {statusLabels[item.status]}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>

                    {item.date && <span className="text-xs text-muted-foreground">{item.date}</span>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
