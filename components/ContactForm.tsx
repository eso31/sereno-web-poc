'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', mensaje: ''
  })
  const [status, setStatus] = useState<'idle'|'loading'|'ok'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setStatus(res.ok ? 'ok' : 'error')
  }

  const inputClass =
    'w-full rounded-md border bg-[#FAF7F2] px-3 py-2 text-sm ' +
    'placeholder:text-brand-dark/40 focus:outline-none focus:ring-2 ' +
    'focus:ring-brand-beige/50 transition'

  const labelClass = 'block text-xs font-medium text-brand-dark/70 mb-1'

  if (status === 'ok') return (
    <div className="soft-card flex flex-col items-center justify-center py-10 text-center">
      <p className="text-2xl mb-2">☕</p>
      <p className="font-semibold">¡Mensaje enviado!</p>
      <p className="text-sm text-stone-500 mt-1">Te contactamos pronto.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="soft-card flex flex-col gap-4">
      <div>
        <label htmlFor="nombre" className={labelClass}>Nombre *</label>
        <input
          id="nombre"
          className={inputClass}
          placeholder="Tu nombre completo"
          value={form.nombre}
          onChange={e => setForm({...form, nombre: e.target.value})}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Correo electrónico *</label>
        <input
          id="email"
          className={inputClass}
          type="email"
          placeholder="correo@ejemplo.com"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
          required
        />
      </div>
      <div>
        <label htmlFor="telefono" className={labelClass}>Teléfono <span className="font-normal text-brand-dark/50">(opcional)</span></label>
        <input
          id="telefono"
          className={inputClass}
          placeholder="+52 954 000 0000"
          value={form.telefono}
          onChange={e => setForm({...form, telefono: e.target.value})}
        />
      </div>
      <div>
        <label htmlFor="mensaje" className={labelClass}>Mensaje *</label>
        <textarea
          id="mensaje"
          className={inputClass}
          placeholder="¿En qué podemos ayudarte?"
          value={form.mensaje}
          onChange={e => setForm({...form, mensaje: e.target.value})}
          required
          rows={4}
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-500">
          Algo salió mal, intenta de nuevo.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-1 w-full inline-flex justify-center items-center accent-btn disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}