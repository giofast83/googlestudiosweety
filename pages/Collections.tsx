import React, { useState } from 'react';
import { COLLECTIONS } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export const Collections: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="fade-in">
      <div className="bg-brand-cream px-6 text-center pt-28 md:pt-32 pb-20">
        <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">Lasciati Ispirare</h4>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-4">Le Collezioni</h1>
        <p className="text-gray-600 max-w-2xl mx-auto font-light">
          Un viaggio attraverso tessuti pregiati, tagli innovativi e ispirazioni stagionali. Ogni collezione racconta una nuova storia di femminilità.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {COLLECTIONS.map((collection, index) => (
          <article key={collection.id} className={`mb-32 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
            
            {/* Visual Side */}
            <div className="w-full md:w-1/2 md:sticky md:top-24">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {collection.gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="aspect-[3/4] overflow-hidden cursor-zoom-in"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt="Detail" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative Side */}
            <div className="w-full md:w-1/2 pt-8 md:px-8">
              <div className="flex items-center space-x-4 mb-6 text-xs tracking-widest uppercase text-gray-500">
                <span>{collection.season}</span>
                <span className="w-8 h-[1px] bg-gray-400"></span>
                <div className="flex space-x-2">
                    {collection.tags.map(tag => <span key={tag} className="text-brand-gold font-bold">{tag}</span>)}
                </div>
              </div>

              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-none text-brand-dark">
                {collection.title}
              </h2>

              <div className="prose prose-stone lg:prose-lg text-gray-600 mb-8">
                <p className="leading-loose">{collection.description}</p>
              </div>

              <div className="bg-brand-cream p-6 mb-8 border-l-2 border-brand-sage">
                <h4 className="font-serif text-lg mb-2">Materiali & Dettagli</h4>
                <p className="text-sm text-gray-600 italic">{collection.details}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contatti">
                  <Button variant="primary">Richiedi Info</Button>
                </Link>
                <Link to="/su-misura">
                   <Button variant="outline">Prenota Prova</Button>
                </Link>
              </div>
            </div>

          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 fade-in" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300">
            <X size={40} />
          </button>
          <img src={selectedImage} alt="Zoom" className="max-h-[90vh] max-w-full object-contain" />
        </div>
      )}
    </div>
  );
};