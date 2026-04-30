"use client"

import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="py-4 bg-transparent">
      <div className="container flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 no-underline">
          <div>
            <div className="text-2xl font-serif text-brand leading-none">Sereno</div>
            <div className="text-sm -mt-1 text-brand-dark">de Montaña</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#nosotros" className="hover:text-brand transition-colors">Nosotros</Link>
          <Link href="#productos" className="hover:text-brand transition-colors">Productos</Link>
          <Link href="#proceso" className="hover:text-brand transition-colors">Proceso</Link>
          <Link href="#contacto" className="hover:text-brand transition-colors">Contacto</Link>
          <a href="https://www.facebook.com/people/Sereno-de-Montaña/61567137806365/" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a>
        </div>

        <div className="md:hidden">
          <button className="text-brand p-2">Menu</button>
        </div>
      </div>
    </nav>
  )
}
