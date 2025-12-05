import type React from "react"
import type { Metadata } from "next"
import { Source_Serif_4, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Your Name - Life & Work",
  description: "A personal space for stories, projects, and professional work",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
