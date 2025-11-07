import React from 'react';
import { MapPin, Navigation, ShoppingBag } from 'lucide-react';

const Location: React.FC = () => {
  const locations = [
    { icon: Navigation, name: 'Av. Paralela', distance: 'A 5 minutos' },
    { icon: Navigation, name: 'Av. Santander', distance: 'A 7 minutos' },
    { icon: ShoppingBag, name: 'C.C. Fundadores', distance: 'A 10 minutos' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <MapPin className="w-8 h-8 text-orange-500" />
          <h2 className="text-3xl font-bold">Ubicación Estratégica</h2>
        </div>
        <p className="text-center text-xl mb-12 text-gray-300">
          En el corazón de Manizales, cerca de todo lo importante
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-colors">
              <loc.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{loc.name}</h3>
              <p className="text-gray-300">{loc.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
