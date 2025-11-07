import React from 'react';
import { Building, Home, Bed } from 'lucide-react';

const PropertyDetails: React.FC = () => {
  const floors = [
    {
      icon: Building,
      title: 'Primera Planta',
      items: ['Local comercial de 22 m² con baño', 'Local comercial de 130 m² con cocina, oficina y baño', 'Ideal para negocios o empresas']
    },
    {
      icon: Home,
      title: 'Segunda Planta',
      items: ['6 habitaciones (4 con clóset)', '2 baños completos', 'Cocina amplia equipada', 'Sala comedor espaciosa', 'Sala de estar', 'Patio y balcón']
    },
    {
      icon: Bed,
      title: 'Tercera Planta',
      items: ['1 habitación con baño privado', 'Patio con zona de lavadero', 'Terraza techada grande subdividida', 'Espacio versátil para múltiples usos']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Distribución por Plantas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {floors.map((floor, idx) => (
            <div key={idx} className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl shadow-lg">
              <floor.icon className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{floor.title}</h3>
              <ul className="space-y-2">
                {floor.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
