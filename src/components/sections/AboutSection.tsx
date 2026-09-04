export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider">QUIENES SOMOS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-secondary">
            Pro-Energy
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <span className="font-semibold text-primary">Pro-Energy</span> brinda soluciones de ingeniería orientadas al mantenimiento, 
              fabricación, montaje y optimización de sistemas mecánicos e industriales, 
              atendiendo las necesidades específicas de cada proyecto.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <h3 className="text-xl font-bold text-secondary mb-2">Misión</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Brindar soluciones integrales de ingeniería, mantenimiento y montaje industrial, 
                  garantizando calidad, seguridad y eficiencia en cada proyecto.
                </p>
              </div>

              <div className="bg-secondary/5 p-6 rounded-xl border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-secondary mb-2">Visión</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ser una empresa referente en Ecuador en soluciones de ingeniería y mantenimiento 
                  industrial, reconocida por nuestra calidad, innovación y confiabilidad.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/10 p-6 rounded-xl text-center">
              <span className="text-4xl font-bold text-primary">10+</span>
              <p className="text-gray-600 mt-1">Años de experiencia</p>
            </div>
            <div className="bg-secondary/10 p-6 rounded-xl text-center">
              <span className="text-4xl font-bold text-secondary">100+</span>
              <p className="text-gray-600 mt-1">Proyectos realizados</p>
            </div>
            <div className="bg-accent/10 p-6 rounded-xl text-center">
              <span className="text-4xl font-bold text-accent">50+</span>
              <p className="text-gray-600 mt-1">Clientes satisfechos</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-xl text-center">
              <span className="text-4xl font-bold text-primary">24/7</span>
              <p className="text-gray-600 mt-1">Soporte técnico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}