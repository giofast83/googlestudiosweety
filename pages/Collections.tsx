import React, { useState } from 'react';
import { COLLECTIONS } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export const Collections: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string>(COLLECTIONS[0]?.id);
  const toJpg = (p: string) => p.replace(/\.(webp|png|jpeg|jpg)$/i, '.jpg');
  const toWebp = (p: string) => p.replace(/\.(webp|png|jpeg|jpg)$/i, '.webp');
  const tileClasses = [
    'aspect-[3/4]',
    'aspect-square',
    'aspect-[16/10]',
    'aspect-[4/5]',
    'aspect-[16/9]'
  ];

  return (
    <div className="fade-in pt-10">
      <div className="bg-brand-cream px-6 text-center pt-28 md:pt-32 pb-10">
        <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">Lasciati Ispirare</h4>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-8">Le Collezioni</h1>
        <p className="text-gray-600 max-w-2xl mx-auto font-light">
          Un viaggio attraverso tessuti pregiati, tagli innovativi e ispirazioni stagionali. Ogni collezione racconta una nuova storia di femminilità.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {COLLECTIONS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`px-4 py-2 border uppercase tracking-widest text-xs font-bold rounded-sm transition-colors ${
                activeId === c.id
                  ? 'bg-brand-gold text-white border-brand-gold'
                  : 'text-brand-dark border-gray-300 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {COLLECTIONS.filter((c) => c.id === activeId).map((collection, index) => (
          <article key={collection.id} className={`mb-16 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
            
            {/* Visual Side */}
            <div className="w-full md:w-1/2 md:sticky md:top-24">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img 
                  src={toJpg(collection.image)} 
                  alt={collection.title} 
                  className="w-full h-full object-cover"
                />
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

      {/* Full-width Masonry Gallery for selected collection */}
      {COLLECTIONS.filter((c) => c.id === activeId).map((collection) => (
        <section key={`${collection.id}-masonry`} className="py-6">
          <div className="px-2 sm:px-4">
            <div className="max-w-[1024px] mx-auto columns-2 lg:columns-3 gap-3 [column-fill:balance]">
              {collection.gallery.map((img, idx) => (
                <div key={idx} className={`mb-3 break-inside-avoid ${tileClasses[idx % tileClasses.length]}`}>
                  <img
                    src={toJpg(img)}
                    alt={`${collection.title} ${idx + 1}`}
                    className="w-full h-full object-cover rounded-sm hover:opacity-90 transition"
                    onClick={() => setSelectedImage(img)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
