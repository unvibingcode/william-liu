export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  tags: string[]
  featured?: boolean
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "finding-balance",
    title: "Finding Balance in a Busy World",
    excerpt: "Reflections on managing work, projects, and personal time in the modern age.",
    content: `
Life has a way of filling every available moment with something urgent. Emails pile up, deadlines loom, and before you know it, another week has passed without a single moment of genuine rest.

I've been thinking a lot about balance lately—not the perfectly curated, Instagram-worthy version of balance, but the messy, real kind that involves saying no to things and occasionally disappointing people (including yourself).

## What I've Learned

The biggest shift came when I stopped treating balance as a destination and started seeing it as a practice. Some weeks, work demands more. Other weeks, I give more to my projects or relationships. The key is awareness—noticing when things tip too far in one direction.

## Small Changes, Big Impact

A few things that have helped:
- **Morning boundaries**: The first hour of my day is phone-free
- **Weekly review**: Sunday evenings, I look at what worked and what didn't
- **Saying "not now"**: It's not a no, just a deferral

## Moving Forward

I don't have this figured out. I probably never will entirely. But I'm getting better at noticing when I'm out of balance before I burn out completely. And maybe that's enough.

What does balance look like for you? I'd love to hear your thoughts.
    `,
    date: "December 1, 2024",
    category: "Reflections",
    tags: ["life", "balance", "work", "mindfulness"],
    featured: true,
  },
  {
    slug: "weekend-hike",
    title: "A Weekend Hike Through the Mountains",
    excerpt: "Discovering hidden trails and breathtaking views just an hour from the city.",
    content: `
There's something magical about leaving the city behind and finding yourself surrounded by nothing but trees, sky, and the sound of your own footsteps.

Last weekend, I finally made it to the Mountain Ridge Trail—a hike I'd been putting off for months. The weather forecast wasn't promising, but sometimes you just have to go anyway.

## The Trail

The trailhead is easy to miss if you're not looking for it—a small parking area off the main road with a weathered wooden sign. From there, it's a steady climb through mixed forest before opening up to alpine meadows.

## Unexpected Discoveries

About two hours in, I stumbled upon an old stone foundation—remnants of a cabin from the area's mining days. I sat there for a while, imagining the people who once called this remote spot home.

## The Summit

The clouds that threatened rain in the morning parted just as I reached the summit, revealing a panoramic view that made every step worth it. Mountains stretched to the horizon in every direction.

## Lessons from the Trail

Hiking always reminds me to slow down, to pay attention, and to trust that the path will continue even when I can't see it. Not bad lessons for life in general.

Until the next adventure.
    `,
    date: "November 24, 2024",
    category: "Adventures",
    tags: ["hiking", "nature", "outdoors", "weekend"],
    featured: true,
    image: "/placeholder.svg?key=c9mhx",
  },
  {
    slug: "new-project",
    title: "Starting a New Creative Project",
    excerpt: "Why I decided to pick up watercolors and what I've learned so far.",
    content: `
I've always admired watercolor paintings—the way colors blend and bleed, creating something that feels both controlled and spontaneous. Last month, I finally decided to stop admiring and start doing.

## Taking the Leap

It started with a basic set of paints and a stack of cheap paper. I told myself the goal wasn't to create anything good, just to create.

## The First Attempts

My first paintings were, to put it kindly, abstract. Colors muddied together. Paper buckled and warped. But somewhere in that messy process, I started to understand how the medium works.

## What I'm Learning

Watercolor demands patience. You can't force it. You have to let layers dry, let colors do their own thing sometimes, and accept that not everything will turn out how you planned.

## Unexpected Benefits

Beyond the paintings themselves, I've noticed this practice bleeding into other areas of my life. I'm more comfortable with imperfection. More willing to try things without knowing the outcome.

## What's Next

I'm nowhere near good, but I'm enjoying the journey. I've signed up for a local workshop next month and started following some watercolor artists online for inspiration.

Sometimes the best projects are the ones you start simply because they call to you.
    `,
    date: "November 15, 2024",
    category: "Projects",
    tags: ["art", "watercolor", "creativity", "learning"],
  },
  {
    slug: "morning-routine",
    title: "Rebuilding My Morning Routine",
    excerpt: "How I transformed chaotic mornings into my favorite part of the day.",
    content: `
For years, my mornings were a blur of alarms, rushing, and already feeling behind before the day even started. Something had to change.

## The Problem

I'd wake up, immediately check my phone, and feel overwhelmed by everything waiting for me. By the time I left for work, I was already exhausted.

## The Experiment

I decided to try something different for 30 days: no phone for the first hour, a consistent wake time, and a simple sequence of activities.

## The New Routine

Here's what stuck:
- **6:00 AM**: Wake up (no snooze)
- **6:00-6:15**: Stretch and make bed
- **6:15-6:45**: Coffee and reading (physical book)
- **6:45-7:00**: Quick journal entry
- **7:00-7:30**: Shower and get ready
- **7:30**: Check phone for the first time

## The Results

The difference is remarkable. I arrive at work calmer, more focused, and actually looking forward to the day. The morning is now something I protect fiercely.

Not every day is perfect, but the framework helps. Even on hard days, following the routine provides structure and a sense of control.
    `,
    date: "November 8, 2024",
    category: "Reflections",
    tags: ["routine", "productivity", "mindfulness", "habits"],
  },
  {
    slug: "favorite-books-2024",
    title: "Favorite Books I Read This Year",
    excerpt: "A roundup of the books that shaped my thinking in 2024.",
    content: `
One of my goals this year was to read more intentionally—fewer books, but more deeply. Here are the ones that stuck with me.

## Fiction

**"Tomorrow, and Tomorrow, and Tomorrow"** by Gabrielle Zevin
A beautiful meditation on friendship, creativity, and the games we play (both literal and metaphorical). I couldn't stop thinking about it for weeks.

**"Demon Copperhead"** by Barbara Kingsolver
Gut-wrenching and beautifully written. A modern Dickens tale that illuminates corners of America often ignored.

## Non-Fiction

**"Four Thousand Weeks"** by Oliver Burkeman
Changed how I think about time and productivity. The premise—that our lives are impossibly short—is oddly liberating.

**"The Creative Act"** by Rick Rubin
More philosophy than how-to guide. Reading it felt like meditation.

## Currently Reading

I'm halfway through "The Mountain in the Sea" and it's absolutely captivating. Review to come.

What did you read this year that I should add to my list?
    `,
    date: "October 28, 2024",
    category: "Reviews",
    tags: ["books", "reading", "reviews", "recommendations"],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((post) => post.category))]
}

export function getAllTags(): string[] {
  return [...new Set(blogPosts.flatMap((post) => post.tags))]
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
