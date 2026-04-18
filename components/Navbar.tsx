"use client"

import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../img/logo/cafe logo.001.png'

export default function Navbar(){
  return (
    <nav className="py-4 bg-transparent">
      <div className="container flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 relative rounded-full overflow-hidden">
            <Image src={logoImg} alt="Sereno de Montaña" fill sizes="48px" className="object-cover" />
          </div>
          <div>
            <div className="text-2xl font-serif text-brand">Sereno</div>
            <div className="text-sm -mt-1 text-brand-dark">de Montaña</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#nosotros" className="hover:text-brand">Nosotros</Link>
          <Link href="#productos" className="hover:text-brand">Productos</Link>
          <Link href="#proceso" className="hover:text-brand">Proceso</Link>
          <Link href="#contacto" className="hover:text-brand">Contacto</Link>
          <a href="https://www.facebook.com/people/Sereno-de-Montaña/61567137806365/" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a>
          <a href="#productos" className="bg-brand text-white px-4 py-2 rounded-md shadow hover:brightness-95">Ordenar</a>
        </div>

        <div className="md:hidden">
          <button className="text-brand p-2">Menu</button>
        </div>
      </div>
    </nav>
  )
}
