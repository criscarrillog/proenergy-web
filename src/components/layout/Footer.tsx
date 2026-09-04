import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">PRO-ENERGY</h3>
            <p className="text-gray-300 text-sm">
              Soluciones de Ingeniería, Mantenimiento y Montaje Industrial
            </p>
            <p className="text-accent text-sm mt-2 font-semibold">
              Soluciones que mantienen tu industria en movimiento
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent">Enlaces rápidos</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/" className="hover:text-primary transition">Inicio</Link></li>
              <li><Link href="#servicios" className="hover:text-primary transition">Servicios</Link></li>
              <li><Link href="#nosotros" className="hover:text-primary transition">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-primary transition">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent">Servicios</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Calderos y quemadores</li>
              <li>Sistemas de bombeo</li>
              <li>Tuberías industriales</li>
              <li>Tanques y recipientes</li>
              <li>Automatización</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contacto</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="flex items-center gap-2">📧 ventas@proenergyec.com</p>
              <p className="flex items-center gap-2">📧 ventas.tecnicas@proenergyecu.com</p>
              <p className="flex items-center gap-2">📱 Boris Pumisacho: 0995299976</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PRO-ENERGY. Todos los derechos reservados.</p>
          <p className="mt-1 text-xs">Soluciones que mantienen tu industria en movimiento</p>
        </div>
      </div>
    </footer>
  );
}