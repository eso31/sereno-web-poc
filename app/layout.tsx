import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Sereno de Montaña',
  description: 'Café artesanal de montaña - Sabores que tocan el cielo'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body className="min-h-screen bg-brand-cream text-brand-dark">
        <Navbar />
        <div className="container py-8">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
