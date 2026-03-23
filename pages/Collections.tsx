import React, { useEffect, useMemo, useRef, useState } from 'react';
import { COLLECTIONS } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export const Collections: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string>(COLLECTIONS[0]?.id);
  const galleryId = 'collections-gallery';
  const [heightSeed, setHeightSeed] = useState<number>(() => Math.random());
  const scrollToGallery = () => {
    const el = document.getElementById(galleryId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const toJpg = (p: string) => p.replace(/\.(webp|png|jpeg|jpg)$/i, '.jpg');
  const toWebp = (p: string) => p.replace(/\.(webp|png|jpeg|jpg)$/i, '.webp');
  // Masonry: lasciamo le immagini con altezza naturale per effetto Pinterest

  const activeIndex = useMemo(() => COLLECTIONS.findIndex(c => c.id === activeId), [activeId]);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const seededVH = (idx: number) => {
    const x = Math.sin(idx * 997 + heightSeed * 1000 + 13) * 0.5 + 0.5; // 0..1 pseudo-random con seed
    const min = 40; // vh
    const max = 70; // vh cap richiesto
    return Math.min(max, Math.max(min, Math.round(min + x * (max - min))));
  };

  useEffect(() => {
    setHeightSeed(Math.random());
  }, [activeId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') {
        const i = activeIndex < COLLECTIONS.length - 1 ? activeIndex + 1 : 0;
        setActiveId(COLLECTIONS[i].id);
      }
      if (e.key === 'ArrowLeft') {
        const i = activeIndex > 0 ? activeIndex - 1 : COLLECTIONS.length - 1;
        setActiveId(COLLECTIONS[i].id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex]);

  return (
    <div className="fade-in pt-10">
      <div className="bg-brand-cream px-6 text-center pt-28 md:pt-32 pb-10">
        <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">Lasciati Ispirare</h4>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-8">Le Collezioni</h1>
        <p className="text-gray-600 max-w-2xl mx-auto font-light">
          Un viaggio attraverso tessuti pregiati, tagli innovativi e ispirazioni stagionali. Ogni collezione racconta una nuova storia di femminilità.
        </p>
        <div className="mt-10" />
      </div>

      <div ref={filterRef} className="sticky top-20 md:top-24 z-40 bg-brand-cream/80 backdrop-blur px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 py-3">
            {COLLECTIONS.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`relative px-1 py-1 text-sm md:text-sm uppercase tracking-widest font-bold transition-colors ${
                  activeId === c.id ? 'text-brand-dark' : 'text-gray-500 hover:text-brand-dark'
                }`}
              >
                <span className="inline-flex flex-col items-center">
                  <span className="whitespace-nowrap">{c.title}</span>
                  {activeId === c.id && (
                    <motion.span
                      layoutId="filter-underline"
                      className="mt-2 h-[2px] w-full bg-current"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {COLLECTIONS.filter((c) => c.id === activeId).map((collection) => (
            <motion.article key={collection.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="mb-16 flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/2 md:sticky md:top-24">
                <motion.div className="relative aspect-[3/4] overflow-hidden mb-4" initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={toJpg(collection.image)} alt={collection.title} className="w-full h-full object-cover" />
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 pt-2 md:px-8">
                <div className="flex items-center space-x-4 mb-6 text-xs tracking-widest uppercase text-gray-500">
                  <span>{collection.season}</span>
                  <span className="w-8 h-px bg-gray-400"></span>
                  <div className="flex space-x-2">
                    {collection.tags.map(tag => <span key={tag} className="text-brand-gold font-bold">{tag}</span>)}
                  </div>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-none text-brand-dark">{collection.title}</h2>
                <div className="prose prose-stone lg:prose-lg text-gray-600 mb-8"><p className="leading-loose">{collection.description}</p></div>
                <div className="bg-brand-cream p-6 mb-8 border-l-2 border-brand-sage">
                  <h4 className="font-serif text-lg mb-2">L'Essenza</h4>
                  <p className="text-sm text-gray-600 italic">{collection.details}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={scrollToGallery} className="group inline-flex items-center">
                    <Button variant="outline" className="!pr-6">
                      <span>Scopri di più</span>
                      <motion.span className="inline-flex ml-2" initial={false} whileHover={{ x: 4 }}>
                        <ArrowRight size={18} />
                      </motion.span>
                    </Button>
                  </button>
                  <Link to="/contatti">
                    <Button variant="primary">Contattaci</Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {COLLECTIONS.filter((c) => c.id === activeId).map((collection) => (
        <section key={`${collection.id}-masonry`} id={galleryId} className="py-6">
          <div className="px-2 sm:px-4">
            <div className="max-w-[1024px] mx-auto">
              <div className="flex items-baseline justify-between border-b border-brand-gold/25 pb-4">
                <h3 className="font-serif text-2xl md:text-3xl leading-none text-brand-dark">Galleria</h3>
                <span className="uppercase tracking-widest text-[11px] md:text-[12px] font-bold text-gray-400">{collection.gallery.length} SCATTI</span>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-8 columns-1 sm:columns-2 lg:columns-3 gap-x-6 [column-fill:balance]">
              {collection.gallery.map((img, idx) => (
                <div key={idx} className="mb-6 break-inside-avoid break-inside-avoid-column inline-block w-full align-top">
                  <div className="relative overflow-hidden rounded-sm" style={{ height: `${seededVH(idx)}vh` }}>
                    <motion.img
                      src={toJpg(img)}
                      alt={`${collection.title} ${idx + 1}`}
                      className="block w-full h-full object-cover origin-center"
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: 'tween', duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ willChange: 'transform' }}
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-4 right-4 text-white hover:text-gray-300">
              <X size={40} />
            </button>
            <motion.img src={selectedImage} alt="Zoom" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="max-h-[90vh] max-w-full object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
