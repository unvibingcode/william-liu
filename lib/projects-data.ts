export interface ProjectItem {
  id: string
  title: string
  description: string
  image: string
  status: "completed" | "in-progress" | "planned"
  date?: string
}

export interface Project {
  slug: string
  name: string
  description: string
  longDescription: string
  icon: string
  coverImage: string
  projects: ProjectItem[]
}

export const projects: Project[] = [
  {
    slug: "photography",
    name: "Photography",
    description: "Capturing moments and stories through the lens",
    longDescription:
      "Photography has been my way of seeing the world more intentionally. Whether it's landscapes during a hike, street photography in a new city, or simply the morning light in my kitchen—I'm always looking for frames that tell a story.",
    icon: "📷",
    coverImage: "/placeholder.svg?key=cj8k7",
    projects: [
      {
        id: "1",
        title: "Morning Light Series",
        description: "A collection of photos capturing the golden hour in everyday spaces",
        image: "/placeholder.svg?key=z2h1f",
        status: "in-progress",
        date: "November 2024",
      },
      {
        id: "2",
        title: "Urban Textures",
        description: "Abstract patterns found in city architecture and streets",
        image: "/placeholder.svg?key=bnqmj",
        status: "completed",
        date: "October 2024",
      },
      {
        id: "3",
        title: "Seasons Change",
        description: "A year-long project documenting the same locations through four seasons",
        image: "/placeholder.svg?key=x2mao",
        status: "in-progress",
        date: "Ongoing",
      },
    ],
  },
  {
    slug: "watercolor",
    name: "Watercolor Painting",
    description: "Learning to let go and let the paint flow",
    longDescription:
      "I started watercolor painting as a way to slow down and embrace imperfection. It's taught me patience—you can't rush layers drying, and you can't undo what's already on the paper. Every piece is an experiment.",
    icon: "🎨",
    coverImage: "/placeholder.svg?key=r0k6k",
    projects: [
      {
        id: "1",
        title: "Botanical Studies",
        description: "Loose interpretations of flowers and plants from my garden",
        image: "/placeholder.svg?key=mwnhq",
        status: "in-progress",
        date: "November 2024",
      },
      {
        id: "2",
        title: "Landscape Sketches",
        description: "Quick studies from hiking trips and travel",
        image: "/placeholder.svg?key=bssxk",
        status: "completed",
        date: "September 2024",
      },
    ],
  },
  {
    slug: "hiking",
    name: "Hiking & Outdoors",
    description: "Finding peace on the trail",
    longDescription:
      "There's nothing quite like the feeling of reaching a summit or discovering a hidden waterfall. Hiking is my reset button—a way to disconnect from screens and reconnect with the physical world.",
    icon: "🥾",
    coverImage: "/placeholder.svg?key=6umo9",
    projects: [
      {
        id: "1",
        title: "Local Trail Guide",
        description: "Documenting favorite trails within an hour of the city",
        image: "/placeholder.svg?key=jc5bj",
        status: "in-progress",
        date: "Ongoing",
      },
      {
        id: "2",
        title: "Peak Challenge 2024",
        description: "Goal: Summit 12 peaks this year",
        image: "/placeholder.svg?key=rsh4g",
        status: "in-progress",
        date: "8/12 completed",
      },
    ],
  },
  {
    slug: "reading",
    name: "Reading & Writing",
    description: "Stories in and stories out",
    longDescription:
      "Books have always been my refuge. I try to balance fiction and non-fiction, always keeping a reading journal to capture thoughts and quotes that resonate. Occasionally, I try my hand at writing too.",
    icon: "📚",
    coverImage: "/placeholder.svg?key=kkpf5",
    projects: [
      {
        id: "1",
        title: "2024 Reading List",
        description: "Tracking and reviewing books I read this year",
        image: "/placeholder.svg?key=3njwt",
        status: "in-progress",
        date: "28 books so far",
      },
      {
        id: "2",
        title: "Short Story Collection",
        description: "Working on a series of interconnected short stories",
        image: "/placeholder.svg?key=a94o1",
        status: "planned",
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
