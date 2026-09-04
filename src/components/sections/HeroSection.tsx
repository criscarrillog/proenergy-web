// src/components/sections/HeroSection.tsx - Versión Neón
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Overlay oscuro con toque azulado */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#1a3a5c]/80 to-[#00a651]/70 z-10" />
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/images/hero-industrial.jpg")',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-20 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          {/* Etiqueta con GLOW AMARILLO */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl animate-pulse">⚡</span>
            <span className="text-[#FFD700] font-bold tracking-wider text-sm md:text-base uppercase drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">
              Soluciones Industriales
            </span>
          </div>
          
          {/* Título con EFECTO NEÓN */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-[0_0_30px_rgba(0,166,81,0.3)]">
            PRO-ENERGY
            <span className="block text-2xl md:text-3xl font-light text-[#A8E6CF] mt-2 drop-shadow-[0_0_20px_rgba(168,230,207,0.2)]">
              Soluciones de Ingeniería, Mantenimiento y Montaje Industrial
            </span>
          </h1>
          
          {/* Servicios con BADGES DE COLOR */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              'Calderos y quemadores',
              'Sistemas de bombeo',
              'Tuberías industriales',
              'Tanques y recipientes',
              'Automatización',
              'Sistemas contra incendios'
            ].map((service, i) => (
              <span 
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-3 py-1 rounded-full text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="/contacto" 
              className="bg-gradient-to-r from-[#FFB81C] to-[#FFD700] text-secondary px-8 py-3 rounded-full font-bold hover:shadow-[0_0_30px_rgba(255,184,28,0.3)] transition shadow-lg transform hover:-translate-y-0.5"
            >
              Solicitar presupuesto →
            </a>
            <a 
              href="#servicios" 
              className="border-2 border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition backdrop-blur-sm"
            >
              Conocer más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}