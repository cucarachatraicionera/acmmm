import React from 'react';
import { Building2, Briefcase, UtensilsCrossed, Users, Heart, TrendingUp } from 'lucide-react';

const PotentialUses: React.FC = () => {
  const uses = [
    { icon: Briefcase, title: 'Oficinas Corporativas', desc: 'Espacios amplios para empresas' },
    { icon: UtensilsCrossed, title: 'Restaurante', desc: 'Locales comerciales ideales' },
    { icon: Building2, title: 'Hostal/Hotel', desc: 'Múltiples habitaciones listas' },
    { icon: Heart, title: 'Centro de Bienestar', desc: 'Ambiente tranquilo y accesible' },
    { icon: Users, title: 'Vivienda Multifamiliar', desc: 'Perfecta para familias grandes' },
    { icon: TrendingUp, title: 'Inversión Rentable', desc: 'Alto potencial de valorización' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Usos Potenciales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uses.map((use, idx) => (
            <div key={idx} className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-lg transition-all">
              <use.icon className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">{use.title}</h3>
              <p className="text-gray-600">{use.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PotentialUses;
