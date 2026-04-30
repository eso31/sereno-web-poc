import Image from 'next/image'
import ContactForm from '../components/ContactForm'

// After running `node scripts/move-images-to-public.js` these files will be
// copied to `/public/img` with sanitized filenames. For now the app uses the
// expected sanitized names below. Run the script to populate `public/img`.
const heroSrc = '/img/sereno-de-montana-background-4.png'
const tiposSrc = '/img/tipos-de-cafe.png'

const WA_LINK = 'https://wa.me/529541629119'

export default function Page(){
  return (
    <>
      <section className="relative rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
          <Image src={heroSrc} alt="Sereno hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/45 flex items-center">
            <div className="container text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-serif">Sereno de Montaña</h1>
              <p className="mt-3 text-lg md:text-xl text-white/90">Sabores que tocan el cielo</p>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="mt-12">
        <h2 className="text-2xl font-serif mb-3">Nosotros</h2>
        <p className="text-base text-brand-dark/90 max-w-3xl">Sereno de Montaña produce café 100% artesanal cultivado en altura. Trabajamos con procesos tradicionales y control de calidad en cada lote para ofrecer perfiles de tueste que resaltan notas florales, cítricas y caramelo.</p>
      </section>

      <section id="proceso" className="mt-12">
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

      <section id="productos" className="mt-12">
        <h2 className="text-2xl font-serif mb-6">Productos</h2>
        <div className="relative w-full h-56 md:h-96 rounded-lg overflow-hidden mb-6 shadow-sm bg-white/5">
          <Image src={tiposSrc} alt="Tipos de café" fill className="object-cover" />
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-5">
              <h3 className="font-semibold text-lg">Tradicional</h3>
              <div className="mt-3 flex flex-col gap-2">
                <span className="px-3 py-1 bg-brand-cream text-brand-dark rounded-full text-sm">1 kg — $300</span>
                <span className="px-3 py-1 bg-brand-beige text-brand-dark rounded-full text-sm">500 g — $150</span>
                <span className="px-3 py-1 bg-brand-cream text-brand-dark rounded-full text-sm">250 g — $75</span>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-5">
              <h3 className="font-semibold text-lg">Honey</h3>
              <div className="mt-3 flex flex-col gap-2">
                <span className="px-3 py-1 bg-brand-cream text-brand-dark rounded-full text-sm">1 kg — $450</span>
                <span className="px-3 py-1 bg-brand-beige text-brand-dark rounded-full text-sm">500 g — $230</span>
                <span className="px-3 py-1 bg-brand-cream text-brand-dark rounded-full text-sm">250 g — $115</span>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="p-5">
              <h3 className="font-semibold text-lg">Cerezo</h3>
              <div className="mt-3 flex flex-col gap-2">
                <span className="px-3 py-1 bg-brand-cream text-brand-dark rounded-full text-sm">1 kg — $320</span>
                <span className="px-3 py-1 bg-brand-beige text-brand-dark rounded-full text-sm">500 g — $165</span>
                <span className="px-3 py-1 bg-brand-cream text-brand-dark rounded-full text-sm">250 g — $85</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="ubicacion" className="mt-12">
        <h2 className="text-2xl font-serif mb-4">Ubicación</h2>
        <div className="w-full rounded-md overflow-hidden shadow">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1611.7637249073262!2d-97.08066023451012!3d16.094431871616273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b88bf6ca88474d%3A0x73ca17586d4a4edd!2s71970%20San%20Gabriel%20Mixtepec%2C%20Oax.!5e0!3m2!1ses!2smx!4v1776539312651!5m2!1ses!2smx" className="w-full h-64 border-0" />
        </div>
      </section>

      <section id="contacto" className="mt-12 mb-16">
        <h2 className="text-2xl font-serif mb-4">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ContactForm />

          <div className="soft-card">
            <h3 className="font-semibold">Redes</h3>
            <p className="mt-2 text-sm">Síguenos:</p>
            <div className="mt-3 flex items-center gap-4">
              <a href="https://www.facebook.com/people/Sereno-de-Montaña/61567137806365/" target="_blank" rel="noreferrer" className="inline-flex items-center text-brand" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07A10 10 0 1 0 12.07 22V14.89h-2.54v-2.83h2.54V9.71c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.83h-2.34V22A10 10 0 0 0 22 12.07z"/>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>

              <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center text-brand" aria-label="WhatsApp">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.16 1.61 5.95L0 24l6.31-1.61A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.19-3.48-8.52zM12 21.6c-1.4 0-2.78-.34-4.01-.99l-.29-.16-3.75.96.99-3.65-.19-.3A8.4 8.4 0 0 1 3.6 12c0-4.64 3.76-8.4 8.4-8.4s8.4 3.76 8.4 8.4-3.76 8.4-8.4 8.4zM17.16 14.46c-.27-.14-1.6-.79-1.85-.88-.25-.09-.44-.14-.63.14-.19.27-.75.88-.92 1.06-.17.19-.34.21-.61.07-.27-.14-1.14-.42-2.17-1.33-.8-.72-1.34-1.61-1.5-1.88-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.63-1.52-.86-2.08-.23-.55-.47-.48-.63-.49-.16-.01-.35-.01-.54-.01-.18 0-.48.07-.74.34-.26.27-1 1-1 2.45 0 1.45 1.03 2.85 1.17 3.05.14.2 2.03 3.26 4.92 4.56 0 0 .09.04.17.04.08 0 .52.01.99-.07 1.52-.26 2.89-1.37 3.28-3.01.4-1.64-.02-2.29-.29-2.44z"/>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
