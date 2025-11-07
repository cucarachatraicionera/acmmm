import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Propiedad en Venta</h3>
            <p className="text-gray-400">Casa de 3 plantas en Manizales, Caldas. Ideal para inversión inmobiliaria.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Ubicación</h3>
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>Barrio Linares, Calle 33 #25-25<br/>Manizales, Caldas</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Contacto</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>323 5807818 / 324 2301546</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>malejandram0414@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Venta Casa Manizales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
