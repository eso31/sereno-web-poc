import ContactForm from '../components/ContactForm'
import heroImg from '../img/Sereno de Montaña - background 4.png'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <section className="relative -mx-6 overflow-hidden shadow-lg h-80 md:h-[480px]">
        <Image
          src={heroImg}
          alt="Sereno de Montaña"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center p-16 md:p-24 text-center">
          <h1 className="text-white font-serif text-3xl md:text-5xl drop-shadow">
            Sereno de Montaña
          </h1>
          <p className="text-white/85 mt-3 text-lg md:text-xl font-light tracking-wide drop-shadow">
            Sabores que tocan el cielo
          </p>
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
          </div>

          <div className="soft-card">
            <h3 className="font-semibold text-lg">Especialidad — Honey</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>1 kg — <strong>$450</strong></li>
              <li>500 g — <strong>$230</strong></li>
              <li>250 g — <strong>$115</strong></li>
            </ul>
          </div>

          <div className="soft-card">
            <h3 className="font-semibold text-lg">Especialidad — Cerezo</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>1 kg — <strong>$320</strong></li>
              <li>500 g — <strong>$165</strong></li>
              <li>250 g — <strong>$85</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ubicacion" className="mt-10">
        <h2 className="text-2xl font-serif mb-4">Ubicación</h2>
        <div className="w-full rounded-md overflow-hidden shadow">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1611.7637249073262!2d-97.08066023451012!3d16.094431871616273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b88bf6ca88474d%3A0x73ca17586d4a4edd!2s71970%20San%20Gabriel%20Mixtepec%2C%20Oax.!5e0!3m2!1ses!2smx!4v1776539312651!5m2!1ses!2smx" className="w-full h-64 border-0" />
        </div>
      </section>

      <section id="contacto" className="mt-10 mb-10">
        <h2 className="text-2xl font-serif mb-4">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ContactForm />

          <div className="soft-card">
            <h3 className="font-semibold">Información</h3>
            <p className="mt-2 text-sm">Email: <a href="mailto:info@serenodemontana.example" className="text-brand underline">info@serenodemontana.example</a></p>
            <p className="mt-2 text-sm">WhatsApp: <a href="https://wa.me/" className="text-brand underline">Enviar mensaje</a></p>
            <p className="mt-4 text-sm">Visita nuestra página de Facebook para más detalles.</p>
            <a href="https://www.facebook.com/people/Sereno-de-Montaña/61567137806365/" target="_blank" rel="noreferrer" className="mt-3 inline-block text-brand underline">Facebook</a>
          </div>
        </div>
      </section>
    </>
  )
}
