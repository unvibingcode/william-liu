export interface GalleryImage {
  id: string
  src: string
  alt: string
  caption?: string
  date?: string
}

export interface Gallery {
  slug: string
  name: string
  description: string
  coverImage: string
  images: GalleryImage[]
}

export const galleries: Gallery[] = [
  {
    slug: "travel",
    name: "Travel",
    description: "Adventures near and far",
    coverImage: "/placeholder.svg?key=h7cqc",
    images: [
      {
        id: "1",
        src: "/placeholder.svg?key=cwlgo",
        alt: "Mountain range at sunset",
        caption: "Sunset over the peaks",
        date: "October 2024",
      },
      {
        id: "2",
        src: "/placeholder.svg?key=njhtg",
        alt: "Coastal village",
        caption: "A quiet morning in the fishing village",
        date: "September 2024",
      },
      {
        id: "3",
        src: "/placeholder.svg?key=d8cth",
        alt: "Desert landscape",
        caption: "The vast emptiness of the desert",
        date: "August 2024",
      },
      {
        id: "4",
        src: "/placeholder.svg?key=niqc2",
        alt: "Forest path",
        caption: "Getting lost in the best way",
        date: "July 2024",
      },
      {
        id: "5",
        src: "/placeholder.svg?key=fmlka",
        alt: "City skyline",
        caption: "City lights at dusk",
        date: "June 2024",
      },
      {
        id: "6",
        src: "/placeholder.svg?key=9xryb",
        alt: "Lake reflection",
        caption: "Perfect mirror",
        date: "May 2024",
      },
    ],
  },
  {
    slug: "everyday",
    name: "Everyday",
    description: "Finding beauty in the ordinary",
    coverImage: "/placeholder.svg?key=s6b3g",
    images: [
      {
        id: "1",
        src: "/placeholder.svg?key=1exes",
        alt: "Morning coffee",
        caption: "The ritual that starts every day",
        date: "November 2024",
      },
      {
        id: "2",
        src: "/placeholder.svg?key=emdxf",
        alt: "Rainy window",
        caption: "Rainy day contemplation",
        date: "November 2024",
      },
      {
        id: "3",
        src: "/placeholder.svg?key=9pxjp",
        alt: "Book and reading glasses",
        caption: "Sunday afternoon reading",
        date: "October 2024",
      },
      {
        id: "4",
        src: "/placeholder.svg?key=96a5c",
        alt: "Plants on windowsill",
        caption: "The windowsill jungle",
        date: "October 2024",
      },
    ],
  },
  {
    slug: "projects",
    name: "Creative Projects",
    description: "Works in progress and finished pieces",
    coverImage: "/placeholder.svg?key=mzqvb",
    images: [
      {
        id: "1",
        src: "/placeholder.svg?key=jn3gp",
        alt: "Watercolor painting",
        caption: "First botanical study",
        date: "November 2024",
      },
      {
        id: "2",
        src: "/placeholder.svg?key=6uigj",
        alt: "Art supplies arrangement",
        caption: "Tools of the trade",
        date: "October 2024",
      },
      {
        id: "3",
        src: "/placeholder.svg?key=jkwgd",
        alt: "Sketchbook page",
        caption: "Daily sketching practice",
        date: "September 2024",
      },
    ],
  },
  {
    slug: "nature",
    name: "Nature",
    description: "Flora, fauna, and landscapes",
    coverImage: "/placeholder.svg?key=94d1x",
    images: [
      {
        id: "1",
        src: "/placeholder.svg?key=m0gzb",
        alt: "Wildflowers in meadow",
        caption: "Summer wildflowers",
        date: "August 2024",
      },
      {
        id: "2",
        src: "/placeholder.svg?key=sndjl",
        alt: "Bird on branch",
        caption: "Early morning visitor",
        date: "July 2024",
      },
      {
        id: "3",
        src: "/placeholder.svg?key=d60at",
        alt: "Autumn leaves",
        caption: "Fall colors",
        date: "October 2024",
      },
      {
        id: "4",
        src: "/placeholder.svg?key=uf6l7",
        alt: "Starry night sky",
        caption: "Chasing stars",
        date: "September 2024",
      },
      {
        id: "5",
        src: "/placeholder.svg?key=7uzau",
        alt: "Frost on leaves",
        caption: "First frost of the season",
        date: "November 2024",
      },
    ],
  },
]

export function getGalleryBySlug(slug: string): Gallery | undefined {
  return galleries.find((gallery) => gallery.slug === slug)
}
