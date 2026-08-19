import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import NavScrollSpy from '../components/NavScrollSpy'

export const metadata = {
  title: 'Sereno de Montaña — Café Artesanal',
  description: 'Café artesanal de montaña cultivado en San Gabriel Mixtepec, Oaxaca. Sabores que tocan el cielo.',
  icons: {
    icon: '/img/logo/Logo IG.png',
    apple: '/img/logo/Logo IG.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body className="min-h-screen text-brand-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <NavScrollSpy />
      </body>
    </html>
  )
}
