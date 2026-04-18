export default function Footer() {
  return (
    <footer className="mt-12 bg-brand-dark/80 text-brand-cream py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="text-lg font-serif">Sereno de Montaña</div>
        <div className="text-sm">Café artesanal mexicano — © {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
