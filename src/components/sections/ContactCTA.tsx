'use client';

// Actualizado: 20:27pm
import { useState } from 'react';
//import emailjs from '@emailjs/browser';  


export function ContactCTA() {
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  // Estado para errores de validación
  const [errors, setErrors] = useState<{
    nombre?: string;
    email?: string;
    telefono?: string;
    mensaje?: string;
  }>({});

  // Estado para mostrar mensaje de éxito/error
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isLoading, setIsLoading] = useState(false);

  // ============================================
  // 🔒 FUNCIONES DE VALIDACIÓN
  // ============================================

  const validarTexto = (texto: string): boolean => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.]+$/;
    return regex.test(texto);
  };

const validarEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const validarTelefono = (telefono: string): boolean => {
  const regex = /^[0-9+\-\s()]+$/;
  return regex.test(telefono);
};

const sanitizarTexto = (texto: string): string => {
  return texto.trim();
};

  // ============================================
  // 🔒 VALIDACIÓN DEL FORMULARIO
  // ============================================

  const validarFormulario = (): boolean => {
    const nuevosErrores: typeof errors = {};

    if (!formData.nombre || formData.nombre.length < 2) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 2 caracteres';
    } else if (!validarTexto(formData.nombre)) {
      nuevosErrores.nombre = 'El nombre solo puede contener letras y espacios';
    }

    if (!formData.email) {
      nuevosErrores.email = 'El correo electrónico es requerido';
    } else if (!validarEmail(formData.email)) {
      nuevosErrores.email = 'Ingrese un correo electrónico válido';
    }

    if (formData.telefono && !validarTelefono(formData.telefono)) {
      nuevosErrores.telefono = 'El teléfono solo puede contener números, +, -, espacios y ()';
    }

    if (!formData.mensaje || formData.mensaje.length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    } else if (formData.mensaje.length > 1000) {
      nuevosErrores.mensaje = 'El mensaje no puede tener más de 1000 caracteres';
    }

    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // ============================================
  // 🔒 MANEJO DE CAMBIOS
  // ============================================

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let valorSanitizado = value;
    
    if (name === 'nombre') {
      valorSanitizado = valorSanitizado.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s.]/g, '');
    }
    
    if (name === 'email') {
      valorSanitizado = value.replace(/[^a-zA-Z0-9@._%+-]/g, '');
    }
    
    if (name === 'telefono') {
      valorSanitizado = value;
    }

    if (name === 'mensaje') {
      valorSanitizado = sanitizarTexto(value);
    }

    setFormData({
      ...formData,
      [name]: valorSanitizado
    });

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  // ============================================
  // 📧 ENVÍO CON EMAILJS
  // ============================================

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsLoading(true);
  setStatus({ type: null, message: '' });

  if (!validarFormulario()) {
    setIsLoading(false);
    return;
  }

  try {
    const response = await fetch('/api/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.mensaje,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || 'Error al enviar el mensaje'
      );
    }

    setStatus({
      type: 'success',
      message:
        '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
    });

    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
    });

    setErrors({});

} catch (error) {
  console.error('❌ Error enviando formulario:', error);

  const mensajeError =
    error instanceof Error
      ? error.message
      : 'No se pudo enviar el mensaje.';

  alert(`⚠️ ${mensajeError}`);
} finally {
  setIsLoading(false);
}

  // ============================================
  // 🎨 RENDER
  // ============================================

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Tiene un proyecto o requiere mantenimiento?
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              Contáctenos y nuestro equipo de especialistas le brindará la mejor solución.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-accent text-xl">📧</span>
                <span>ventas@proenergyec.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent text-xl">📧</span>
                <span>ventas.tecnicas@proenergyecu.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent text-xl">📱</span>
                <span>Boris Pumisacho: 0995299976</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-secondary mb-4">Solicitar Información</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="nombre"
                  placeholder="Nombre completo" 
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${
                    errors.nombre ? 'border-red-500' : ''
                  }`}
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                )}
              </div>

              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Correo electrónico" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input 
                  type="tel" 
                  name="telefono"
                  placeholder="Teléfono (opcional)" 
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${
                    errors.telefono ? 'border-red-500' : ''
                  }`}
                />
                {errors.telefono && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
                )}
              </div>

              <div>
                <textarea 
                  name="mensaje"
                  placeholder="Mensaje" 
                  rows={3}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none ${
                    errors.mensaje ? 'border-red-500' : ''
                  }`}
                />
                {errors.mensaje && (
                  <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
                )}
              </div>
              
              {status.type && (
                <div className={`p-3 rounded-lg text-sm ${
                  status.type === 'success' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg transition font-semibold ${
                  isLoading 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {isLoading ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}