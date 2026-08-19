'use client'
import { useEffect } from 'react'

const SECTIONS = ['nosotros', 'productos', 'proceso', 'ubicacion', 'contacto']

export default function NavScrollSpy() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            links.forEach((link) => {
              const isActive = link.getAttribute('href') === `#${id}`
              if (isActive) {
                link.style.color = 'var(--brand-caramel)'
                link.style.fontWeight = '600'
              } else {
                link.style.color = ''
                link.style.fontWeight = ''
              }
            })
          }
        })
      },
      { threshold: 0.4 }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
