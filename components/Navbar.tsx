"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/6 border-b border-white/5 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <Link href="#" className="flex items-center gap-3 no-underline">
          <div>
            <div className="text-2xl font-serif text-brand leading-none">Sereno</div>
            <div className="text-sm -mt-1 text-brand-dark/80">de Montaña</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#nosotros" className="text-sm uppercase tracking-wide text-brand-dark/80 hover:text-brand-caramel transition-colors">Nosotros</Link>
          <Link href="#productos" className="text-sm uppercase tracking-wide text-brand-dark/80 hover:text-brand-caramel transition-colors">Productos</Link>
          <Link href="#proceso" className="text-sm uppercase tracking-wide text-brand-dark/80 hover:text-brand-caramel transition-colors">Proceso</Link>
          <a href="https://www.facebook.com/people/Sereno-de-Montaña/61567137806365/" target="_blank" rel="noreferrer" className="text-sm text-brand-dark/70 hover:text-brand-caramel transition-colors">Facebook</a>
          <Link href="#contacto" className="ml-2 accent-btn">Contacto</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle menu" className="text-brand p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand/20">{open ? 'Cerrar' : 'Menu'}</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/6 border-t border-white/5">
          <div className="container px-4 py-3 flex flex-col gap-2">
            <Link href="#nosotros" onClick={() => setOpen(false)} className="py-2 text-brand-dark/80">Nosotros</Link>
            <Link href="#productos" onClick={() => setOpen(false)} className="py-2 text-brand-dark/80">Productos</Link>
            <Link href="#proceso" onClick={() => setOpen(false)} className="py-2 text-brand-dark/80">Proceso</Link>
            <a href="https://www.facebook.com/people/Sereno-de-Montaña/61567137806365/" target="_blank" rel="noreferrer" className="py-2 text-brand-dark/80">Facebook</a>
            <Link href="#contacto" onClick={() => setOpen(false)} className="py-2"><span className="accent-btn w-full inline-flex justify-center">Contacto</span></Link>
          </div>
        </div>
      )}
    </nav>
  )
}
