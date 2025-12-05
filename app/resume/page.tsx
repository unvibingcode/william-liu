import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Download, Mail, Github, Linkedin, Globe, MapPin } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Resume - Your Name",
  description: "Professional experience, skills, and contact information.",
}

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    location: "San Francisco, CA",
    period: "2022 — Present",
    description:
      "Lead development of core product features, mentoring junior developers, and driving technical architecture decisions.",
    highlights: [
      "Led migration to modern React architecture, improving performance by 40%",
      "Designed and implemented new API infrastructure serving 10M+ requests/day",
      "Mentored team of 5 junior developers through structured growth programs",
    ],
  },
  {
    title: "Software Engineer",
    company: "Startup Inc",
    location: "New York, NY",
    period: "2019 — 2022",
    description: "Full-stack development for B2B SaaS platform, working closely with product and design teams.",
    highlights: [
      "Built real-time collaboration features used by 50,000+ users",
      "Reduced infrastructure costs by 30% through optimization initiatives",
      "Contributed to design system used across all company products",
    ],
  },
  {
    title: "Junior Developer",
    company: "Agency Co",
    location: "Boston, MA",
    period: "2017 — 2019",
    description: "Developed websites and web applications for diverse client portfolio.",
    highlights: [
      "Delivered 20+ client projects on time and within budget",
      "Introduced automated testing, reducing bug reports by 50%",
      "Built internal tools that saved team 10+ hours per week",
    ],
  },
]

const education = [
  {
    degree: "B.S. Computer Science",
    school: "University Name",
    year: "2017",
    notes: "Minor in Design, Dean's List",
  },
]

const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
  Tools: ["Git", "Docker", "AWS", "Figma"],
}

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-16 print:py-8 print:px-0">
          {/* Header */}
          <header className="mb-12 print:mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold mb-2 print:text-3xl">Your Name</h1>
                <p className="text-xl text-muted-foreground mb-4">Senior Software Engineer</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    San Francisco, CA
                  </span>
                  <Link
                    href="mailto:hello@example.com"
                    className="flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    hello@example.com
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-2 print:hidden">
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-6 print:hidden">
              <Link
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                github.com/username
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/username
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                yourwebsite.com
              </Link>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-12 print:mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Software engineer with 7+ years of experience building web applications and leading technical teams.
              Passionate about creating elegant solutions to complex problems and mentoring the next generation of
              developers. When not coding, you'll find me hiking, painting, or reading.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-12 print:mb-8">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-border">Experience</h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground shrink-0">{exp.period}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>

                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12 print:mb-8">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-border">Skills</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-medium text-sm mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12 print:mb-8">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-border">Education</h2>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="font-medium">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm">
                      {edu.school}
                      {edu.notes && <span className="text-muted-foreground"> · {edu.notes}</span>}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="p-6 bg-secondary rounded-xl text-center print:hidden">
            <h2 className="font-semibold mb-2">Interested in working together?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <Link
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
