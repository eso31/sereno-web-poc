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
    'w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm ' +
    'placeholder:text-stone-400 focus:outline-none focus:ring-2 ' +
    'focus:ring-stone-300 transition'

  if (status === 'ok') return (
    <div className="soft-card flex flex-col items-center justify-center py-10 text-center">
      <p className="text-2xl mb-2">☕</p>
      <p className="font-semibold">¡Mensaje enviado!</p>
      <p className="text-sm text-stone-500 mt-1">Te contactamos pronto.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="soft-card flex flex-col gap-3">
      <input
        className={inputClass}
        placeholder="Nombre *"
        value={form.nombre}
        onChange={e => setForm({...form, nombre: e.target.value})}
        required
      />
      <input
        className={inputClass}
        type="email"
        placeholder="Email *"
        value={form.email}
        onChange={e => setForm({...form, email: e.target.value})}
        required
      />
      <input
        className={inputClass}
        placeholder="Teléfono (opcional)"
        value={form.telefono}
        onChange={e => setForm({...form, telefono: e.target.value})}
      />
      <textarea
        className={inputClass}
        placeholder="Mensaje *"
        value={form.mensaje}
        onChange={e => setForm({...form, mensaje: e.target.value})}
        required
        rows={4}
      />
      {status === 'error' && (
        <p className="text-sm text-red-500">
          Algo salió mal, intenta de nuevo.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-1 w-full rounded-md bg-stone-800 px-4 py-2 text-sm
          font-medium text-white transition hover:bg-stone-700
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}