import React from 'react';
import { BESPOKE_STEPS } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Ruler, PenTool, CheckCircle } from 'lucide-react';

export const Bespoke: React.FC = () => {
  return (
    <div className="fade-in pt-10">
      
      <section className="px-6 text-center max-w-4xl mx-auto pt-28 md:pt-32 mb-20">
        <h4 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">Atelier</h4>
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8">Il tuo capo su misura</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Un'esperienza sartoriale esclusiva. Dalla scelta del tessuto alla definizione del taglio, 
          creiamo insieme a te un abito che parla la tua lingua.
        </p>
      </section>

      {/* Process Steps */}
      <section className="bg-brand-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BESPOKE_STEPS.map((step) => (
              <div key={step.number} className="bg-white p-8 relative group hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                <div className="text-6xl font-serif text-brand-sage/30 absolute top-4 right-4 font-bold group-hover:text-brand-gold/20 transition-colors">
                  {step.number}
                </div>
                <h3 className="font-serif text-2xl mb-4 relative z-10">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6">Perché scegliere il su misura?</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Ruler className="mr-4 text-brand-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Vestibilità Perfetta</h4>
                    <p className="text-gray-600 text-sm">Nessun compromesso. Il capo è modellato sulle tue misure uniche.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <PenTool className="mr-4 text-brand-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Personalizzazione Totale</h4>
                    <p className="text-gray-600 text-sm">Scegli scollo, lunghezza, bottoni e rifiniture.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-4 text-brand-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Qualità Duratura</h4>
                    <p className="text-gray-600 text-sm">Cuciture rinforzate e tessuti premium garantiscono longevità.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <Link to="/contatti">
                  <Button variant="primary">Prenota Consulenza Gratuita</Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/seed/bespoke1/400/600" alt="Prova abito" className="w-full h-auto object-cover mt-12" />
               <img src="https://picsum.photos/seed/bespoke2/400/600" alt="Dettaglio tessuto" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Real Brides / Clients Gallery (Placeholder) */}
      <section className="py-24 bg-brand-dark text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-12">Realizzato per Voi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-square overflow-hidden relative group">
                <img 
                  src={`https://picsum.photos/seed/client${i}/500/500`} 
                  alt="Cliente felice" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};