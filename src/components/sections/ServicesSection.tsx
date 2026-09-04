const services = [
  {
    icon: '🔥',
    title: 'Calderos y Quemadores',
    description: 'Mantenimiento, reparación y optimización de calderos industriales y sistemas de combustión.'
  },
  {
    icon: '💧',
    title: 'Sistemas de Bombeo',
    description: 'Instalación y mantenimiento de bombas centrífugas, de desplazamiento positivo y sistemas hidráulicos.'
  },
  {
    icon: '🔧',
    title: 'Tuberías Industriales',
    description: 'Diseño, fabricación y montaje de sistemas de tuberías para procesos industriales.'
  },
  {
    icon: '🛢️',
    title: 'Tanques y Recipientes',
    description: 'Fabricación, mantenimiento y certificación de tanques de almacenamiento y recipientes a presión.'
  },
  {
    icon: '🤖',
    title: 'Automatización',
    description: 'Sistemas de control, PLC, instrumentación y automatización de procesos industriales.'
  },
  {
    icon: '🚒',
    title: 'Sistemas Contra Incendios',
    description: 'Diseño, instalación y mantenimiento de sistemas contra incendios y redes de agua.'
  }
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider">SERVICIOS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-secondary">
            Soluciones Industriales
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Desde el diagnóstico hasta la puesta en funcionamiento
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition group border-b-4 border-transparent hover:border-primary"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}