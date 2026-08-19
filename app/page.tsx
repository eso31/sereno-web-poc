import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import ScrollReveal from '../components/ScrollReveal'
import PriceTable from '../components/PriceTable'
import HeroSlideshow from '../components/HeroSlideshow'

const tiposSrc = '/img/taza-y-bolsa.png'

const WA_LINK = 'https://wa.me/529541629119'

export default function Page(){
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden shadow-lg">
        <div className="relative h-56 md:h-96 lg:h-[420px] overflow-hidden">
          <HeroSlideshow />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
            <div className="hero-caption">
              <h1 className="text-white font-serif mb-1">Sereno de Montaña</h1>
              <p className="text-white/90 text-sm">Sabores que tocan el cielo</p>
            </div>
            <a href="#productos" className="accent-btn text-sm px-5 py-2">
              Ver Productos
            </a>
          </div>
        </div>
      </section>

      <div className="container py-8">

        {/* Nosotros */}
        <ScrollReveal>
          <section id="nosotros" className="mt-12">
            <h2 className="section-heading">Nosotros</h2>
            <p className="text-base text-brand-dark/90 max-w-3xl">Sereno de Montaña produce café 100% artesanal cultivado en altura. Trabajamos con procesos tradicionales y control de calidad en cada lote para ofrecer perfiles de tueste que resaltan notas florales, cítricas y caramelo.</p>
          </section>
        </ScrollReveal>

        {/* Proceso */}
        <ScrollReveal>
          <section id="proceso" className="mt-12">
            <h2 className="section-heading">Nuestro Proceso</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="soft-card hover:shadow-xl">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="font-semibold">Cultivo</h3>
                <p className="mt-2 text-sm text-brand-dark/90">Selección en finca, respeto por el ciclo y manejo sustentable para frutos de alta calidad.</p>
              </div>
              <div className="soft-card hover:shadow-xl">
                <div className="text-3xl mb-3">☕</div>
                <h3 className="font-semibold">Tostado</h3>
                <p className="mt-2 text-sm text-brand-dark/90">Tostado controlado en lotes pequeños para preservar aromas y equilibrio.</p>
              </div>
              <div className="soft-card hover:shadow-xl">
                <div className="text-3xl mb-3">📦</div>
                <h3 className="font-semibold">Empaque</h3>
                <p className="mt-2 text-sm text-brand-dark/90">Empaque que protege frescura y presenta la historia detrás del grano.</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Productos */}
        <ScrollReveal>
          <section id="productos" className="mt-12">
            <h2 className="section-heading">Productos</h2>
            <div className="container mx-auto mb-6">
              <div className="mx-auto max-w-3xl">
                <Image
                  src={tiposSrc}
                  alt="Tipos de café"
                  width={600}
                  height={600}
                  className="mx-auto object-contain w-auto max-h-56 md:max-h-80 lg:max-h-96 rounded-lg shadow-sm"
                  priority
                />
              </div>
            </div>
            <PriceTable />
          </section>
        </ScrollReveal>

        {/* Ubicación */}
        <ScrollReveal>
          <section id="ubicacion" className="mt-12">
            <h2 className="section-heading">Ubicación</h2>
            <div className="w-full rounded-md overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.2188966552285!2d-97.06166242396348!3d16.105973484578875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b88b003834a44b%3A0x3531f7a9b64fd490!2sTostadora%20de%20Caf%C3%A9%20-%20Sereno%20de%20Monta%C3%B1a!5e0!3m2!1ses!2smx!4v1787094187412!5m2!1ses!2smx"
                className="w-full h-96 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </section>
        </ScrollReveal>

        {/* Contacto */}
        <ScrollReveal>
          <section id="contacto" className="mt-12 mb-16">
            <h2 className="section-heading">Contacto</h2>
            <div className="flex flex-col gap-6">
              <ContactForm/>

              <div className="soft-card hover:shadow-xl">
                <h3 className="font-semibold mb-3">Síguenos en redes</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.facebook.com/people/Sereno-de-Montaña/61567137806365/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-brand hover:text-brand-caramel transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12.07A10 10 0 1 0 12.07 22V14.89h-2.54v-2.83h2.54V9.71c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.83h-2.34V22A10 10 0 0 0 22 12.07z"/>
                    </svg>
                    <span className="text-sm font-medium">Sereno de Montaña en Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/serenodemontana/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-brand hover:text-brand-caramel transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                    <span className="text-sm font-medium">@serenodemontana en Instagram</span>
                  </a>
                </div>
              </div>

              <div className="soft-card hover:shadow-xl">
                <h3 className="font-semibold mb-3">Escríbenos por WhatsApp</h3>
                <p className="text-sm text-brand-dark/80 mb-3">¿Tienes preguntas sobre nuestros productos o quieres hacer un pedido? Contáctanos directamente.</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 accent-btn"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.16 1.61 5.95L0 24l6.31-1.61A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.19-3.48-8.52zM12 21.6c-1.4 0-2.78-.34-4.01-.99l-.29-.16-3.75.96.99-3.65-.19-.3A8.4 8.4 0 0 1 3.6 12c0-4.64 3.76-8.4 8.4-8.4s8.4 3.76 8.4 8.4-3.76 8.4-8.4 8.4zM17.16 14.46c-.27-.14-1.6-.79-1.85-.88-.25-.09-.44-.14-.63.14-.19.27-.75.88-.92 1.06-.17.19-.34.21-.61.07-.27-.14-1.14-.42-2.17-1.33-.8-.72-1.34-1.61-1.5-1.88-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.63-1.52-.86-2.08-.23-.55-.47-.48-.63-.49-.16-.01-.35-.01-.54-.01-.18 0-.48.07-.74.34-.26.27-1 1-1 2.45 0 1.45 1.03 2.85 1.17 3.05.14.2 2.03 3.26 4.92 4.56 0 0 .09.04.17.04.08 0 .52.01.99-.07 1.52-.26 2.89-1.37 3.28-3.01.4-1.64-.02-2.29-.29-2.44z"/>
                  </svg>
                  <span>Chatear por WhatsApp</span>
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

      </div>
    </>
  )
}
