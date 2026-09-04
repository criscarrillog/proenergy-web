'use client';

import { useState } from 'react';

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider">CONTACTO</span>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-2">
            Hablemos de su proyecto
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-secondary mb-6">Envíe un mensaje</h2>
            
            {isSuccess && (
              <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                ✅ ¡Mensaje enviado con éxito! Le contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Ingrese su nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="correo@empresa.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="099 999 9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Describa su proyecto o requerimiento..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-primary text-2xl">📧</span>
                  <div>
                    <p className="font-medium">Correo electrónico</p>
                    <p className="text-gray-600">ventas@proenergyec.com</p>
                    <p className="text-gray-600">ventas.tecnicas@proenergyecu.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary text-2xl">📱</span>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600">Boris Pumisacho: 0995299976</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary text-2xl">📍</span>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-gray-600">Ecuador</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-white p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">¿Tiene un proyecto?</h4>
              <p className="text-gray-200 mb-4">
                Estamos listos para ayudarle con soluciones de ingeniería y mantenimiento.
              </p>
              <div className="bg-primary/20 p-4 rounded-lg">
                <p className="text-sm text-accent font-semibold">
                  "Soluciones que mantienen tu industria en movimiento"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}