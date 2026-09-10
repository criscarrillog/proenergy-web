import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ============================================
// 🔒 UTILIDADES DE SEGURIDAD
// ============================================

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function validarEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validarTelefono(telefono: string): boolean {
  const regex = /^[0-9+\-\s()]+$/;
  return regex.test(telefono);
}

function limpiarTexto(texto: string): string {
  return texto.trim().replace(/\s+/g, ' ');
}

// ============================================
// 📩 POST /api/contacto
// ============================================

export async function POST(request: Request) {
  console.log('🚀 API /api/contacto recibió una petición');

  try {
    // ========================================
    // 1. Verificar Content-Type
    // ========================================

    const contentType = request.headers.get('content-type');

    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { message: 'Content-Type no permitido' },
        { status: 415 }
      );
    }

    // ========================================
    // 2. Leer JSON
    // ========================================

    const body = await request.json();

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { message: 'Datos inválidos' },
        { status: 400 }
      );
    }

    const {
      nombre,
      email,
      telefono = '',
      mensaje,
    } = body;

    // ========================================
    // 3. Validar tipos
    // ========================================

    if (
      typeof nombre !== 'string' ||
      typeof email !== 'string' ||
      typeof telefono !== 'string' ||
      typeof mensaje !== 'string'
    ) {
      return NextResponse.json(
        { message: 'Formato de datos inválido' },
        { status: 400 }
      );
    }

    // ========================================
    // 4. Normalizar
    // ========================================

    const nombreLimpio = limpiarTexto(nombre);
    const emailLimpio = email.trim().toLowerCase();
    const telefonoLimpio = telefono.trim();
    const mensajeLimpio = mensaje.trim();

    // ========================================
    // 5. Validar campos obligatorios
    // ========================================

    if (!nombreLimpio || !emailLimpio || !mensajeLimpio) {
      return NextResponse.json(
        { message: 'Todos los campos requeridos deben estar completos' },
        { status: 400 }
      );
    }

    // ========================================
    // 6. Validar longitud
    // ========================================

    if (nombreLimpio.length < 2 || nombreLimpio.length > 100) {
      return NextResponse.json(
        { message: 'El nombre debe tener entre 2 y 100 caracteres' },
        { status: 400 }
      );
    }

    if (emailLimpio.length > 254) {
      return NextResponse.json(
        { message: 'El correo electrónico es demasiado largo' },
        { status: 400 }
      );
    }

    if (telefonoLimpio.length > 30) {
      return NextResponse.json(
        { message: 'El teléfono es demasiado largo' },
        { status: 400 }
      );
    }

    if (mensajeLimpio.length < 4 || mensajeLimpio.length > 1000) {
      return NextResponse.json(
        { message: 'El mensaje debe tener entre 10 y 1000 caracteres' },
        { status: 400 }
      );
    }

    // ========================================
    // 7. Validar formato
    // ========================================

    if (!validarEmail(emailLimpio)) {
      return NextResponse.json(
        { message: 'Correo electrónico inválido' },
        { status: 400 }
      );
    }

    if (telefonoLimpio && !validarTelefono(telefonoLimpio)) {
      return NextResponse.json(
        { message: 'Formato de teléfono inválido' },
        { status: 400 }
      );
    }

    // ========================================
    // 8. Escapar HTML
    // ========================================

    const nombreHtml = escapeHtml(nombreLimpio);
    const emailHtml = escapeHtml(emailLimpio);
    const telefonoHtml = escapeHtml(
      telefonoLimpio || 'No especificado'
    );
    const mensajeHtml = escapeHtml(mensajeLimpio);

    // ========================================
    // 9. Configurar Nodemailer
    // ========================================

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Credenciales SMTP no configuradas');

      return NextResponse.json(
        { message: 'Servicio de correo no disponible' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ========================================
    // 10. Verificar SMTP
    // ========================================

    await transporter.verify();

    // ========================================
    // 11. Enviar correo
    // ========================================

    const info = await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: 'novacrypts2025@gmail.com',

      // Evitamos introducir directamente datos sin
      // escapar en el subject.
      subject: 'Nuevo mensaje de contacto - Proenergy',

      text: `
Nuevo mensaje de contacto

Nombre: ${nombreLimpio}
Email: ${emailLimpio}
Teléfono: ${telefonoLimpio || 'No especificado'}

Mensaje:
${mensajeLimpio}
      `.trim(),

      html: `
        <h2>📧 Nuevo mensaje de contacto</h2>

        <p>
          <strong>Nombre:</strong>
          ${nombreHtml}
        </p>

        <p>
          <strong>Email:</strong>
          ${emailHtml}
        </p>

        <p>
          <strong>Teléfono:</strong>
          ${telefonoHtml}
        </p>

        <p>
          <strong>Mensaje:</strong>
        </p>

        <p>
          ${mensajeHtml}
        </p>
      `,
    });

    console.log('✅ Correo enviado:', info.messageId);

    // ========================================
    // 12. Respuesta al frontend
    // ========================================

    return NextResponse.json(
      {
        message: 'Mensaje enviado con éxito',
      },
      { status: 200 }
    );

  } catch (error: unknown) {

    console.error('❌ Error interno en /api/contacto');

    if (error instanceof Error) {
      console.error(error.message);
    }

    // Nunca devolver error.message al cliente
    return NextResponse.json(
      {
        message: 'Error al enviar el mensaje',
      },
      { status: 500 }
    );
  }
}