"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { GalleryImage } from "@/lib/gallery-data"

interface LightboxProps {
  images: GalleryImage[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose, goToNext, goToPrevious])

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={onClose}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          goToPrevious()
        }}
        className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          goToNext()
        }}
        className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Image container */}
      <div className="relative max-w-5xl max-h-[80vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          width={1200}
          height={800}
          className="w-full h-auto max-h-[80vh] object-contain"
        />

        {/* Caption */}
        {(currentImage.caption || currentImage.date) && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            {currentImage.caption && <p className="text-white text-center">{currentImage.caption}</p>}
            {currentImage.date && <p className="text-white/60 text-sm text-center mt-1">{currentImage.date}</p>}
          </div>
        )}
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
