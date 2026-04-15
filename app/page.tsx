import heroImg from '../img/prices/Precios.jpeg'
import Image from 'next/image'

export default function Page(){
  return (
    <>
      <section className="relative rounded-lg overflow-hidden shadow-lg" style={{backgroundImage:`url(${heroImg.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="bg-black/45 p-16 md:p-24 text-center">
          <h1 className="text-3xl md:text-5xl font-serif text-white drop-shadow">Café artesanal de montaña</h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90">Sabores que tocan el cielo</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#productos" className="px-5 py-3 bg-brand text-white rounded-md shadow hover:brightness-95">Ver productos</a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="px-5 py-3 bg-white/90 text-brand rounded-md shadow">WhatsApp</a>
          </div>
        </div>
      </section>

      <section id="nosotros" className="mt-10">
        <h2 className="text-2xl font-serif mb-3">Nosotros</h2>
        <p className="text-base text-brand-dark/90">Sereno de Montaña produce café 100% artesanal cultivado en altura. Trabajamos con procesos tradicionales y control de calidad en cada lote para ofrecer perfiles de tueste que resaltan notas florales, cítricas y caramelo.</p>
      </section>

      <section id="proceso" className="mt-10">
        <h2 className="text-2xl font-serif mb-6">Nuestro Proceso</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="soft-card">
            <h3 className="font-semibold">Cultivo</h3>
            <p className="mt-2 text-sm text-brand-dark/90">Selección en finca, respeto por el ciclo y manejo sustentable para frutos de alta calidad.</p>
          </div>
          <div className="soft-card">
            <h3 className="font-semibold">Tostado</h3>
            <p className="mt-2 text-sm text-brand-dark/90">Tostado controlado en lotes pequeños para preservar aromas y equilibrio.</p>
          </div>
          <div className="soft-card">
            <h3 className="font-semibold">Empaque</h3>
            <p className="mt-2 text-sm text-brand-dark/90">Empaque que protege frescura y presenta la historia detrás del grano.</p>
          </div>
        </div>
      </section>

      <section id="productos" className="mt-10">
        <h2 className="text-2xl font-serif mb-6">Productos</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="soft-card">
            <h3 className="font-semibold text-lg">Tradicional</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>1 kg — <strong>$300</strong></li>
              <li>500 g — <strong>$150</strong></li>
              <li>250 g — <strong>$75</strong></li>
            </ul>
            <div className="mt-4">
              <a href="#contacto" className="px-4 py-2 bg-brand text-white rounded-md">Ordenar</a>
            </div>
          </div>

          <div className="soft-card">
            <h3 className="font-semibold text-lg">Especialidad — Honey</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>1 kg — <strong>$450</strong></li>
              <li>500 g — <strong>$230</strong></li>
              <li>250 g — <strong>$115</strong></li>
            </ul>
            <div className="mt-4">
              <a href="#contacto" className="px-4 py-2 bg-brand text-white rounded-md">Ordenar</a>
            </div>
          </div>

          <div className="soft-card">
            <h3 className="font-semibold text-lg">Especialidad — Cerezo</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>1 kg — <strong>$320</strong></li>
              <li>500 g — <strong>$165</strong></li>
              <li>250 g — <strong>$85</strong></li>
            </ul>
            <div className="mt-4">
              <a href="#contacto" className="px-4 py-2 bg-brand text-white rounded-md">Ordenar</a>
            </div>
          </div>
        </div>
      </section>

      <section id="ubicacion" className="mt-10">
        <h2 className="text-2xl font-serif mb-4">Ubicación</h2>
        <div className="w-full rounded-md overflow-hidden shadow">
          <iframe title="Ubicación" src="https://maps.google.com/maps?q=19.4333,-99.1333&z=10&output=embed" className="w-full h-64 border-0" />
        </div>
      </section>

      <section id="contacto" className="mt-10 mb-10">
        <h2 className="text-2xl font-serif mb-4">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <form className="soft-card">
            <label className="block text-sm">Nombre</label>
            <input className="w-full mt-2 p-2 rounded border" placeholder="Tu nombre" />

            <label className="block text-sm mt-4">Email</label>
            <input className="w-full mt-2 p-2 rounded border" placeholder="tu@correo.com" />

            <label className="block text-sm mt-4">Mensaje</label>
            <textarea className="w-full mt-2 p-2 rounded border" rows={4} placeholder="¿Qué te interesa?" />

            <div className="mt-4">
              <button type="button" className="px-4 py-2 bg-brand text-white rounded-md">Enviar</button>
            </div>
          </form>

          <div className="soft-card">
            <h3 className="font-semibold">Información</h3>
            <p className="mt-2 text-sm">Email: <a href="mailto:info@serenodemontana.example" className="text-brand underline">info@serenodemontana.example</a></p>
            <p className="mt-2 text-sm">WhatsApp: <a href="https://wa.me/" className="text-brand underline">Enviar mensaje</a></p>
            <p className="mt-4 text-sm">Visita nuestra página de Facebook para más detalles.</p>
            <a href="https://www.facebook.com/SerenodeMontana" target="_blank" rel="noreferrer" className="mt-3 inline-block text-brand underline">Facebook</a>
          </div>
        </div>
      </section>
    </>
  )
}
