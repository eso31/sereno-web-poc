"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-brand-cream/90 border-b border-brand-beige/30 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <Link href="#" className="flex items-center gap-3 no-underline">
          <Image
            src="/img/logo/Logo IG.png"
            alt="Sereno de Montaña logo"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <div>
            <div className="text-xl font-serif text-brand leading-none">Sereno</div>
            <div className="text-xs -mt-0.5 text-brand-dark/70 tracking-wide">de Montaña</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#nosotros" className="text-sm uppercase tracking-wide text-brand-dark/80 hover:text-brand-caramel transition-colors">Nosotros</Link>
          <Link href="#productos" className="text-sm uppercase tracking-wide text-brand-dark/80 hover:text-brand-caramel transition-colors">Productos</Link>
          <Link href="#proceso" className="text-sm uppercase tracking-wide text-brand-dark/80 hover:text-brand-caramel transition-colors">Proceso</Link>
          <Link href="#ubicacion" className="text-sm uppercase tracking-wide text-brand-dark/80 hover:text-brand-caramel transition-colors">Ubicación</Link>
          <a href="https://www.facebook.com/people/Sereno-de-Montaña/61567137806365/" target="_blank" rel="noreferrer" className="text-sm text-brand-dark/70 hover:text-brand-caramel transition-colors">Facebook</a>
          <Link href="#contacto" className="ml-2 accent-btn">Contacto</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="text-brand p-2 rounded-md hover:bg-brand-beige/20 focus:outline-none focus:ring-2 focus:ring-brand/20"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-brand-cream/95 border-t border-brand-beige/30">
          <div className="container px-4 py-3 flex flex-col gap-2">
            <Link href="#nosotros" onClick={() => setOpen(false)} className="py-2 text-brand-dark/80 hover:text-brand-caramel transition-colors">Nosotros</Link>
            <Link href="#productos" onClick={() => setOpen(false)} className="py-2 text-brand-dark/80 hover:text-brand-caramel transition-colors">Productos</Link>
            <Link href="#proceso" onClick={() => setOpen(false)} className="py-2 text-brand-dark/80 hover:text-brand-caramel transition-colors">Proceso</Link>
            <Link href="#ubicacion" onClick={() => setOpen(false)} className="py-2 text-brand-dark/80 hover:text-brand-caramel transition-colors">Ubicación</Link>
            <a href="https://www.facebook.com/people/Sereno-de-Montaña/61567137806365/" target="_blank" rel="noreferrer" className="py-2 text-brand-dark/80 hover:text-brand-caramel transition-colors">Facebook</a>
            <Link href="#contacto" onClick={() => setOpen(false)} className="py-2"><span className="accent-btn w-full inline-flex justify-center">Contacto</span></Link>
          </div>
        </div>
      )}
    </nav>
  )
}
