import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { nombre, email, telefono, mensaje } = await request.json()

  if (!nombre || !email || !mensaje) {
    return NextResponse.json(
      { error: 'Faltan campos requeridos' },
      { status: 400 }
    )
  }

  const { error } = await resend.emails.send({
    from: 'Formulario Web - Sereno de Montaña <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL!,
    subject: `Nuevo mensaje de ${nombre}`,
    html: `
      <h2>Nuevo contacto desde el landing page de Sereno de Montaña</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
  })

  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}