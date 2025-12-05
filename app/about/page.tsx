import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground">The story behind the stories</p>
          </header>

          <div className="mb-12">
            <Image
              src="/person-in-nature-relaxed-candid-photo.jpg"
              alt="A candid moment"
              width={800}
              height={400}
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div className="prose max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">My Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                I grew up in a small town where the mountains met the sea, surrounded by nature and a community that
                valued both hard work and simple pleasures. Those early years shaped my appreciation for the outdoors
                and instilled in me a curiosity that has never faded.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After studying at university, I found myself drawn to [your field], where I discovered I could combine
                my analytical mind with my creative instincts. The journey from student to professional wasn't always
                linear, but every detour taught me something valuable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What Drives Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                I believe life is richer when we pursue multiple passions. Whether I'm diving into a new hiking trail,
                experimenting with watercolors, or tackling a challenging project at work, I approach everything with
                the same sense of wonder and determination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This website exists because I wanted a space to document my journey— not just professionally, but as a
                whole person. The blog posts you'll find here are honest reflections on life, learning, and the
                occasional adventure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Current Interests</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium mb-2">Photography</h3>
                  <p className="text-sm text-muted-foreground">
                    Capturing moments that tell stories, from landscapes to the small details of everyday life.
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium mb-2">Hiking & Nature</h3>
                  <p className="text-sm text-muted-foreground">
                    Exploring trails near and far, finding peace in the rhythm of footsteps and fresh air.
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium mb-2">Creative Writing</h3>
                  <p className="text-sm text-muted-foreground">
                    Journaling, blogging, and occasionally attempting short fiction or poetry.
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium mb-2">Learning New Skills</h3>
                  <p className="text-sm text-muted-foreground">
                    Currently exploring watercolor painting and always reading something new.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">A Few Fun Facts</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  I've visited [X] countries and have a goal to reach [Y]
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  My morning routine always starts with [your ritual]
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  The book that changed my perspective: [book title]
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  My comfort food is [food item], preferably on a rainy day
                </li>
              </ul>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                I love connecting with like-minded people. Whether you want to discuss a project, share a hiking trail
                recommendation, or just say hello, feel free to reach out at{" "}
                <a href="mailto:hello@example.com" className="text-primary hover:underline">
                  hello@example.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
