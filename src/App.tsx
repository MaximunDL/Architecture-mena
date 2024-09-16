import { Facebook, Linkedin, Youtube } from "lucide-react";
import React, { useState, useEffect} from 'react';


const programs = [
  { name: 'Diseño Grafico', image: '/architecture3.jpg' },
  { name: 'Diseño UI/UX', image: '/architecture1.jpg' },
  { name: 'Diseño de Interiores', image: '/architecture3.jpg' },
];

const images = [
  '/architecture1.jpg',
  '/architecture2.jpg',
  '/architecture3.jpg',
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia de imagen cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/mena.png" alt="University Logo" width={50} height={50} />
            <span className="text-2xl font-bold text-gray-800">Melani</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="/courses" className="text-gray-600 hover:text-gray-800">Proyectos</a></li>
              <li><a href="/faculty" className="text-gray-600 hover:text-gray-800">Constructora</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Nosotros</a></li>
              <li><a href="/apply" className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-500">Contactanos</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600"><Facebook size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600"><Linkedin size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-red-600"><Youtube size={24} /></a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-[500px]">
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'brightness(50%)' }} 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">Grandes diseños, grandes diseñadores</h1>
        <p className="text-xl mb-8">Da forma al futuro visual con nosotros</p>
        <div className="space-x-4">
          <a href="/undergraduate" className="bg-white text-gray-800 px-6 py-3 rounded-md hover:bg-gray-100">Proyectos</a>
          <a href="/graduate" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-800">Obras</a>
        </div>
      </div>
    </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Especialidades Destacadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program) => (
                <div key={program.name} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                  <img src={program.image} alt={program.name} style={{ width: '100%' }} />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href={`/programs/${program.name.toLowerCase().replace(' ', '-')}`} className="text-blue-600 hover:underline">Mas informacion</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 Melani Saldaña. Todos los derechos reservados.</p>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/privacy" className="hover:underline">Politicas de Privacidad</a></li>
                <li><a href="/terms" className="hover:underline">Terminos de Servicios</a></li>
                <li><a href="/contact" className="hover:underline">Contactanos</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
