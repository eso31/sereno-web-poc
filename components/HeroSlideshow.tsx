'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  '/img/sereno-de-montana-background-4-cropped.png',
  '/img/sereno-de-montana-background-4.png',
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Sereno de Montaña ${i + 1}`}
          fill
          priority={i === 0}
          className="object-cover transition-opacity duration-1000"
          style={{
            objectPosition: '50% 45%',
            opacity: i === current ? 1 : 0,
            transform: 'scale(1.05)',
          }}
        />
      ))}
      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Imagen ${i + 1}`}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              background: i === current ? 'white' : 'rgba(255,255,255,0.45)',
              transform: i === current ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </>
  )
}
