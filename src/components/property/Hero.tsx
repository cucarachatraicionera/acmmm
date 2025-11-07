import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const handleContact = () => {
    window.open('https://wa.me/573235807818', '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/690d432f2ff106780be22c44_1762477014025_4bccc534.png" 
          alt="Propiedad en Manizales" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full font-bold text-lg mb-6">
          $995.000.000 COP (Negociable)
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Oportunidad Única de Inversión
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-200">
          Casa de 3 plantas en el corazón de Manizales
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Barrio Linares, Calle 33 #25-25 • 435 m² construidos
        </p>
        <button onClick={handleContact} className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full text-xl font-bold inline-flex items-center gap-3 transition-colors shadow-2xl">
          <MessageCircle className="w-6 h-6" />
          Contáctanos Ahora
        </button>
      </div>
    </section>
  );
};

export default Hero;
