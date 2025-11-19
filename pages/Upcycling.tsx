import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { RefreshCw, Heart, Scissors } from 'lucide-react';

export const Upcycling: React.FC = () => {
  return (
    <div className="fade-in pt-10">
       <section className="px-6 mb-20 text-center max-w-4xl mx-auto">
        <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">Sostenibilità Creativa</h4>
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8">Upcycling</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Non buttare, trasforma. Diamo nuova vita a capi vintage o tessuti dimenticati, 
          creando pezzi unici con un'anima e una storia da raccontare.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-brand-sage/20 rounded-none p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <img src="https://picsum.photos/seed/denim/800/600" alt="Denim Remade" className="w-full shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl mb-6">Dal vecchio al nuovo</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              L'industria della moda è una delle più inquinanti al mondo. Noi di Sweety Lab crediamo in un'alternativa. 
              Selezioniamo capi vintage di alta qualità (denim, giacche, camicie) e li decostruiamo per creare qualcosa di totalmente nuovo e moderno.
            </p>
            <div className="flex space-x-8 mb-8">
               <div className="text-center">
                 <RefreshCw className="mx-auto mb-2 text-brand-dark" />
                 <span className="text-xs uppercase tracking-widest">Rigenera</span>
               </div>
               <div className="text-center">
                 <Scissors className="mx-auto mb-2 text-brand-dark" />
                 <span className="text-xs uppercase tracking-widest">Ridisegna</span>
               </div>
               <div className="text-center">
                 <Heart className="mx-auto mb-2 text-brand-dark" />
                 <span className="text-xs uppercase tracking-widest">Riama</span>
               </div>
            </div>
            <Link to="/contatti">
              <Button variant="primary">Hai un capo da trasformare?</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl mb-12 text-center">Progetti recenti</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="group">
             <div className="relative aspect-[4/5] overflow-hidden mb-4">
               <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase z-10">Prima</div>
               <img src="https://picsum.photos/seed/before1/600/800" className="w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity absolute" alt="Prima" />
               <div className="absolute top-4 left-4 bg-brand-gold text-white px-3 py-1 text-xs font-bold uppercase z-10 opacity-0 group-hover:opacity-100 transition-opacity">Dopo</div>
               <img src="https://picsum.photos/seed/after1/600/800" className="w-full h-full object-cover" alt="Dopo" />
             </div>
             <h3 className="font-serif text-xl">Blazer Remixed</h3>
             <p className="text-sm text-gray-500">Giacca uomo &rarr; Corpino donna</p>
           </div>

           <div className="group">
             <div className="relative aspect-[4/5] overflow-hidden mb-4">
               <img src="https://picsum.photos/seed/after2/600/800" className="w-full h-full object-cover" alt="Patchwork" />
             </div>
             <h3 className="font-serif text-xl">Denim Patchwork</h3>
             <p className="text-sm text-gray-500">Scarti di jeans &rarr; Borsa Tote</p>
           </div>

           <div className="group">
             <div className="relative aspect-[4/5] overflow-hidden mb-4">
               <img src="https://picsum.photos/seed/after3/600/800" className="w-full h-full object-cover" alt="Shirt Dress" />
             </div>
             <h3 className="font-serif text-xl">Camicia Dad</h3>
             <p className="text-sm text-gray-500">Camicie XL &rarr; Abito estivo</p>
           </div>
        </div>
      </section>
    </div>
  );
};