'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">PRO-ENERGY</span>
            <span className="text-xs text-secondary font-light hidden sm:inline">
              Soluciones Industriales
            </span>
          </Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`md:flex gap-8 items-center ${isOpen ? 'flex flex-col absolute top-20 left-0 w-full bg-white p-6 shadow-lg' : 'hidden'}`}>
            <Link href="/" className="hover:text-primary transition font-medium">Inicio</Link>
            <Link href="/#servicios" className="hover:text-primary transition font-medium">Servicios</Link>
            <Link href="/#nosotros" className="hover:text-primary transition font-medium">Nosotros</Link>
            <Link href="/contacto" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition font-medium">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}