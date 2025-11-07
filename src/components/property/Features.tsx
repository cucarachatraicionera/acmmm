import React from 'react';
import { Home, Shield, Sun, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: Home, text: '435 m² construidos en material' },
    { icon: Shield, text: 'Totalmente techada y remodelada' },
    { icon: Sun, text: 'Excelente iluminación y acabados' },
    { icon: TrendingUp, text: 'Ideal para renta o negocio' }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Características Destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
              <p className="text-gray-700 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
