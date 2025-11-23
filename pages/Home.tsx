import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight, Scissors, Leaf, Heart } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Hero1.png" 
            alt="Abito sartoriale Sweety Lab" 
            className="w-full h-full object-cover object-[100%_2%]"
          />
          {/* Increased overlay opacity for better text contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 text-white pb-24 md:pb-32 pt-24 md:pt-32">
          <img src="/images/sweety-lab-logo.png" alt="Sweety Lab" className="mx-auto h-20 md:h-28 mb-6 filter invert drop-shadow-md" />
          <p className="text-sm md:text-base tracking-[0.2em] uppercase mb-6 font-light drop-shadow-md">Est. 2023 — Made in Italy · Atelier indipendente di sartoria</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight drop-shadow-lg">
            Moda artigianale,<br/>
            <span className="italic font-light">sostenibile</span> e su misura.
          </h1>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto drop-shadow-md">
            Creazioni uniche fatte per valorizzarti, realizzate con cura sartoriale da Veronica ed Eleonora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collezioni">
              <Button variant="white">Scopri le Collezioni</Button>
            </Link>
          <Link to="/su-misura">
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-brand-powder !hover:text-black hover:border-brand-powder"
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'black'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = ''; }}
            >
              Richiedi su Misura
            </Button>
          </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <div className="flex flex-col items-center p-6 transition-all duration-500 hover:-translate-y-3 group cursor-default">
            <div className="w-16 h-16 bg-brand-sage/30 rounded-full flex items-center justify-center mb-6 text-brand-dark transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-sage/50">
              <Scissors size={32} strokeWidth={1} />
            </div>
            <h3 className="font-serif text-2xl mb-4">Sartorialità</h3>
            <p className="text-gray-600 leading-relaxed">
              Ogni capo è realizzato a mano nel nostro laboratorio, dal figurino al taglio, fino all'ultima cucitura.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 transition-all duration-500 hover:-translate-y-3 group cursor-default">
            <div className="w-16 h-16 bg-brand-powder rounded-full flex items-center justify-center mb-6 text-brand-dark transition-transform duration-500 group-hover:scale-110 group-hover:bg-rose-200">
              <Leaf size={32} strokeWidth={1} />
            </div>
            <h3 className="font-serif text-2xl mb-4">Sostenibilità</h3>
            <p className="text-gray-600 leading-relaxed">
              Scegliamo tessuti naturali e diamo nuova vita a materiali vintage attraverso l'arte dell'upcycling.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 transition-all duration-500 hover:-translate-y-3 group cursor-default">
            <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6 text-brand-dark transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-gold/40">
              <Heart size={32} strokeWidth={1} />
            </div>
            <h3 className="font-serif text-2xl mb-4">Unicità</h3>
            <p className="text-gray-600 leading-relaxed">
              Pezzi unici e mini collezioni pensate per esaltare la personalità di chi li indossa, lontano dai trend passeggeri.
            </p>
          </div>

        </div>
      </section>

      {/* Introduction / Story Teaser */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/tailor1/400/500" alt="Dettaglio sartoriale" className="w-full h-auto object-cover translate-y-8" />
              <img src="https://picsum.photos/seed/tailor2/400/500" alt="Atelier" className="w-full h-auto object-cover -translate-y-8" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h4 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-4">Sweety Lab</h4>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-brand-dark">L'arte di creare moda lenta</h2>
            <p className="text-gray-600 mb-6 leading-loose">
              Fondato nel 2023 da Veronica Piccari ed Eleonora Riga, Sweety Lab nasce dal desiderio di recuperare il valore del tempo nella moda. In un mondo che corre veloce, noi scegliamo di fermarci per curare ogni dettaglio.
            </p>
            <p className="text-gray-600 mb-8 leading-loose">
              Il nostro atelier è un luogo creativo dove tradizione e innovazione si incontrano per dare vita a capi che raccontano una storia: la tua.
            </p>
            <Link to="/chi-siamo" className="inline-flex items-center text-brand-dark uppercase tracking-widest text-sm font-bold hover:text-brand-gold transition-colors">
              La nostra storia <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-24 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Le Collezioni</h2>
              <p className="text-gray-600 max-w-md">Scopri le nostre capsule collection stagionali e i progetti di upcycling.</p>
            </div>
            <Link to="/collezioni" className="hidden md:block">
              <Button variant="secondary">Vedi Tutto</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Link to="/collezioni" key={i} className="group cursor-pointer">
                <div className="overflow-hidden mb-4 h-[500px] relative">
                  <img 
                    src={`https://picsum.photos/seed/fashion${i}/600/800`} 
                    alt="Collezione" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white uppercase tracking-widest text-sm border border-white px-4 py-2">Esplora</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl group-hover:text-brand-gold transition-colors">Collezione 0{i}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Stagione {2023 + i}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 md:hidden text-center">
            <Link to="/collezioni">
              <Button variant="secondary" fullWidth>Vedi Tutto</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
