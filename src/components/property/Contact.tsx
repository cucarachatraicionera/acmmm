import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsApp = (phone: string) => {
    window.open(`https://wa.me/57${phone.replace(/\s/g, '')}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">¡Contáctanos Ahora!</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          No dejes pasar esta oportunidad de inversión en el corazón de Manizales
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button onClick={() => handleWhatsApp('3235807818')} className="flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
            <MessageCircle className="w-6 h-6" />
            323 5807818
          </button>
          <button onClick={() => handleWhatsApp('3242301546')} className="flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
            <Phone className="w-6 h-6" />
            324 2301546
          </button>
          <a href="mailto:malejandram0414@gmail.com" className="flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
            <Mail className="w-6 h-6" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
