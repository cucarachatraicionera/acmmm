import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    "https://d64gsuwffb70l.cloudfront.net/690d432f2ff106780be22c44_1762476960642_fe4d66ff.png",
    "https://d64gsuwffb70l.cloudfront.net/690d432f2ff106780be22c44_1762476976924_f2319c29.png",
    "https://d64gsuwffb70l.cloudfront.net/690d432f2ff106780be22c44_1762477014025_4bccc534.png",
    "https://d64gsuwffb70l.cloudfront.net/690d432f2ff106780be22c44_1762477059576_4e17db12.png",
    "https://d64gsuwffb70l.cloudfront.net/690d432f2ff106780be22c44_1762477079948_3393b25c.png",
    "https://d64gsuwffb70l.cloudfront.net/690d432f2ff106780be22c44_1762477128026_8ddd1624.png",
    "https://d64gsuwffb70l.cloudfront.net/690d432f2ff106780be22c44_1762477174968_4c2acd5f.png",
    "https://d64gsuwffb70l.cloudfront.net/690d432f2ff106780be22c44_1762477210414_0cf060b3.png",
    "https://d64gsuwffb70l.cloudfront.net/690d432f2ff106780be22c44_1762477232492_74291300.png"
  ];

  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    const newIdx = (lightbox + dir + images.length) % images.length;
    setLightbox(newIdx);
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Galería Fotográfica</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <div key={idx} onClick={() => setLightbox(idx)} className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-video">
                <img src={img} alt={`Propiedad ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white hover:text-gray-300">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-4 text-white hover:text-gray-300">
            <ChevronLeft className="w-12 h-12" />
          </button>
          <img src={images[lightbox]} alt="Lightbox" className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-4 text-white hover:text-gray-300">
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
