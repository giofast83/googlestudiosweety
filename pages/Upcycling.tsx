import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { RefreshCw, Heart, Scissors, ArrowRight, Search, Sparkles } from 'lucide-react';

export const Upcycling: React.FC = () => {
  return (
    <div className="fade-in pt-10">
      {/* Hero Section */}
      <section className="px-6 text-center max-w-4xl mx-auto pt-28 md:pt-32 mb-20">
        <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">Sostenibilità Creativa</h4>
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8">L'arte del recupero</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Ogni capo ha una seconda vita che aspetta di essere scoperta. 
          Trasformiamo tessuti dimenticati e abiti vintage in nuovi pezzi di design contemporaneo.
        </p>
      </section>

      {/* Intro Philosophy */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-brand-cream/50 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-brand-sage/20">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-sage/20 -z-10"></div>
             <img src="https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1000&auto=format&fit=crop" alt="Denim Remade" className="w-full shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl mb-6 text-brand-dark">Non è solo riuso,<br/>è rinascita.</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              L'industria della moda è satura. Noi di Sweety Lab crediamo nel valore di ciò che esiste già. 
              Selezioniamo materiali di alta qualità — denim pesanti, sete vintage, lane infeltrite — e li trattiamo come tele bianche.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Decostruiamo la forma originale per liberare il tessuto, poi lo ricomponiamo seguendo linee moderne e sartoriali.
            </p>
            <Link to="/contatti">
              <Button variant="primary">Hai un capo da trasformare?</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="font-serif text-3xl md:text-4xl mb-4">Come Funziona</h2>
             <p className="text-gray-500">Dal tuo armadio al nostro laboratorio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gray-200 -z-10"></div>

            <div className="flex flex-col items-center text-center bg-white p-4 transition-all duration-500 hover:-translate-y-3 group cursor-default">
              <div className="w-24 h-24 bg-brand-powder rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-dark transition-transform duration-500 group-hover:scale-110 group-hover:bg-rose-200">
                <Search size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-3">1. Analisi</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Portaci il capo che non usi più. Valutiamo lo stato del tessuto, la struttura e le potenzialità di recupero. Non tutto si può salvare, ma molto si può trasformare.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-4 transition-all duration-500 hover:-translate-y-3 group cursor-default">
              <div className="w-24 h-24 bg-brand-sage/40 rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-dark transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-sage/60">
                <Scissors size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-3">2. Progettazione</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Definiamo il nuovo design. Smontiamo il capo originale (decostruzione) e studiamo il nuovo cartamodello per sfruttare ogni centimetro di stoffa.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-4 transition-all duration-500 hover:-translate-y-3 group cursor-default">
              <div className="w-24 h-24 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-dark transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-gold/40">
                <Sparkles size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-3">3. Rinascita</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Confezioniamo il nuovo capo con tecniche sartoriali. Aggiungiamo fodere nuove, bottoni e dettagli contemporanei. Il tuo vecchio abito è ora un pezzo unico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-24 bg-brand-dark text-brand-cream px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl mb-16 text-center">Storie di Trasformazione</h2>
          
          {/* Case Study 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-32">
             <div className="lg:col-span-5 order-2 lg:order-1">
               <div className="bg-white/5 p-8 border border-white/10">
                 <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">Project #01</div>
                 <h3 className="font-serif text-3xl mb-4 text-white">The Heritage Blazer</h3>
                 
                 <div className="space-y-4 mb-6 text-gray-300 text-sm leading-relaxed">
                   <p>
                     <strong className="text-white block mb-1">Origine:</strong> 
                     Giacca da uomo anni '80, lana pesante, taglio squadrato e spalle eccessive.
                   </p>
                   <p>
                     <strong className="text-white block mb-1">Intervento:</strong>
                     Abbiamo rimosso le maniche e stretto il punto vita creando delle <em>pinces</em> profonde. Il rever è stato assottigliato per una linea più femminile.
                   </p>
                   <p>
                     <strong className="text-white block mb-1">Risultato:</strong>
                     Un gilet strutturato over-size, perfetto da indossare su abiti leggeri o camicie di seta.
                   </p>
                 </div>
                 <Link to="/contatti" className="inline-flex items-center text-white hover:text-brand-gold transition-colors text-sm uppercase tracking-widest font-semibold">
                   Vuoi qualcosa di simile? <ArrowRight className="ml-2 w-4 h-4" />
                 </Link>
               </div>
             </div>
             <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] uppercase font-bold px-2 py-1">Prima</span>
                  <img src="https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-70" alt="Giacca Uomo Prima" />
                </div>
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-brand-gold text-brand-dark text-[10px] uppercase font-bold px-2 py-1">Dopo</span>
                  <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Gilet Donna Dopo" />
                </div>
             </div>
          </div>

          {/* Case Study 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
             <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] uppercase font-bold px-2 py-1">Prima</span>
                  <img src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-70" alt="Jeans Vecchi" />
                </div>
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-brand-gold text-brand-dark text-[10px] uppercase font-bold px-2 py-1">Dopo</span>
                  <img src="https://images.unsplash.com/photo-1548624150-f31571026195?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Borsa Patchwork" />
                </div>
             </div>
             <div className="lg:col-span-5">
               <div className="bg-white/5 p-8 border border-white/10">
                 <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">Project #02</div>
                 <h3 className="font-serif text-3xl mb-4 text-white">Denim Mosaic</h3>
                 
                 <div className="space-y-4 mb-6 text-gray-300 text-sm leading-relaxed">
                   <p>
                     <strong className="text-white block mb-1">Origine:</strong> 
                     Tre paia di jeans rovinati che non potevano più essere indossati (strappi interni, macchie).
                   </p>
                   <p>
                     <strong className="text-white block mb-1">Intervento:</strong>
                     Tecnica del <em>Patchwork</em> geometrico. Abbiamo selezionato le parti sane del tessuto, creando una nuova metratura giocando con le diverse gradazioni di indaco.
                   </p>
                   <p>
                     <strong className="text-white block mb-1">Risultato:</strong>
                     Una Maxi Tote Bag resistente e foderata in cotone biologico. Zero sprechi.
                   </p>
                 </div>
                 <Link to="/contatti" className="inline-flex items-center text-white hover:text-brand-gold transition-colors text-sm uppercase tracking-widest font-semibold">
                   Hai dei vecchi jeans? <ArrowRight className="ml-2 w-4 h-4" />
                 </Link>
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 text-center px-6 bg-brand-sage/20">
         <h2 className="font-serif text-3xl md:text-4xl mb-6">Dai valore ai tuoi ricordi</h2>
         <p className="text-gray-600 max-w-2xl mx-auto mb-8">
           Hai un abito della mamma, una camicia a cui sei legata o un tessuto vintage che adori? 
           Scrivici e inviaci una foto: ti diremo cosa possiamo realizzare.
         </p>
         <Link to="/contatti">
           <Button variant="primary">Inizia il Progetto</Button>
         </Link>
      </section>
    </div>
  );
};