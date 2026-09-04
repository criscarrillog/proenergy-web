export function ContactCTA() {
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
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nombre completo" 
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <input 
                type="tel" 
                placeholder="Teléfono" 
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <textarea 
                placeholder="Mensaje" 
                rows={3}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <button 
                type="button" 
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition font-semibold"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}