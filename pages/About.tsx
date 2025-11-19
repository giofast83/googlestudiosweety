import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="fade-in pt-10">
      {/* Hero About */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">Chi Siamo</h4>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8">
            Due cuori, <br /> un'unica visione sartoriale
          </h1>
        </div>
      </section>

      {/* Founders Story */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="bg-gray-100 h-[600px] relative overflow-hidden">
             <img 
               src="https://picsum.photos/seed/founders/800/1000" 
               alt="Veronica ed Eleonora" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
           </div>
           <div>
             <h3 className="font-serif text-3xl mb-6">Veronica Piccari & Eleonora Riga</h3>
             <p className="text-gray-600 leading-loose mb-6">
               Il nostro viaggio inizia con una passione condivisa per la materia prima e per la costruzione dell'abito. Sweety Lab è nato nel 2023 non solo come brand, ma come laboratorio di idee.
             </p>
             <p className="text-gray-600 leading-loose mb-6">
               Complementari nel lavoro e nella visione, uniamo la precisione tecnica alla creatività fluida. Per noi, la moda non è solo apparire, ma un modo intimo di esprimere chi siamo, nel rispetto dell'ambiente che ci circonda.
             </p>
             <img src="https://picsum.photos/seed/signature/200/80" alt="Firme" className="opacity-60 mt-4"/>
           </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="bg-brand-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white shadow-sm border-t-4 border-brand-sage">
              <h3 className="font-serif text-2xl mb-4">Slow Fashion</h3>
              <p className="text-gray-600 leading-relaxed">
                Andiamo controcorrente rispetto ai ritmi frenetici del fast fashion. Produciamo meno, ma meglio. Ogni capo richiede tempo, cura e dedizione.
              </p>
            </div>
            <div className="p-8 bg-white shadow-sm border-t-4 border-brand-powder">
              <h3 className="font-serif text-2xl mb-4">Inclusività</h3>
              <p className="text-gray-600 leading-relaxed">
                La moda deve adattarsi al corpo, non il contrario. Le nostre creazioni sono pensate per valorizzare ogni fisicità, con la possibilità del su misura.
              </p>
            </div>
            <div className="p-8 bg-white shadow-sm border-t-4 border-brand-gold">
              <h3 className="font-serif text-2xl mb-4">Artigianalità</h3>
              <p className="text-gray-600 leading-relaxed">
                Il Made in Italy per noi è un valore tangibile: scelta dei fornitori locali, lavorazione manuale e controllo qualità su ogni singolo punto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Images */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
           <h2 className="font-serif text-4xl text-center mb-12">Momenti in Atelier</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
             <div className="col-span-2 row-span-2 overflow-hidden h-full">
               <img src="https://picsum.photos/seed/atelier1/800/800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Tessuti" />
             </div>
             <div className="overflow-hidden h-full">
               <img src="https://picsum.photos/seed/atelier2/400/400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Dettaglio macchina da cucire" />
             </div>
             <div className="overflow-hidden h-full">
               <img src="https://picsum.photos/seed/atelier3/400/400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Bozzetti" />
             </div>
             <div className="col-span-2 overflow-hidden h-full">
               <img src="https://picsum.photos/seed/atelier4/800/400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Mani che lavorano" />
             </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Vieni a trovarci in laboratorio</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Saremo felici di mostrarti come nascono le nostre creazioni e discutere il tuo prossimo capo su misura.
        </p>
        <Link to="/contatti">
          <Button variant="secondary">Prenota un appuntamento</Button>
        </Link>
      </section>
    </div>
  );
};