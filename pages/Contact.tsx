import React, { useState } from 'react';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="fade-in pt-10">
      <section className="px-6 mb-12 text-center">
        <h1 className="font-serif text-5xl text-brand-dark mb-4">Contattaci</h1>
        <p className="text-gray-600">Prenota un appuntamento o richiedi informazioni sulle collezioni.</p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Side */}
        <div className="space-y-12">
          <div>
            <h3 className="font-serif text-2xl mb-6 border-b border-brand-gold/30 pb-2 inline-block">Atelier Sweety Lab</h3>
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start">
                <MapPin className="mr-4 text-brand-gold mt-1" />
                <p>Via della Moda Artigiana, 23<br/>00100 Roma, RM</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 text-brand-gold" />
                <p>+39 333 000 0000</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 text-brand-gold" />
                <p>info@sweetylab.it</p>
              </div>
              <div className="flex items-start">
                <Clock className="mr-4 text-brand-gold mt-1" />
                <div>
                  <p>Lun - Ven: 09:00 - 18:00</p>
                  <p>Sab: Su appuntamento</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-cream p-8">
            <h4 className="font-serif text-xl mb-4">Domande Frequenti</h4>
            <details className="mb-4 cursor-pointer group">
              <summary className="font-bold text-sm uppercase tracking-wide mb-2 list-none flex justify-between items-center">
                Quanto tempo richiede un capo su misura?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-brand-gold">
                Generalmente dalle 3 alle 5 settimane, a seconda della complessità del modello e della disponibilità dei tessuti.
              </p>
            </details>
            <details className="cursor-pointer group">
              <summary className="font-bold text-sm uppercase tracking-wide mb-2 list-none flex justify-between items-center">
                Posso portare un mio tessuto?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-brand-gold">
                Assolutamente sì. Valuteremo insieme se è adatto al modello che desideri realizzare.
              </p>
            </details>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white p-8 shadow-lg border-t-4 border-brand-dark">
          {formStatus === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-serif text-2xl mb-2">Messaggio Inviato</h3>
              <p className="text-gray-600 mb-6">Grazie per averci contattato. Ti risponderemo entro 24 ore.</p>
              <Button onClick={() => setFormStatus('idle')} variant="outline">Invia un altro messaggio</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-serif text-2xl mb-6">Scrivici</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nome</label>
                  <input required type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition-colors bg-transparent" placeholder="Il tuo nome" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Cognome</label>
                  <input required type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition-colors bg-transparent" placeholder="Il tuo cognome" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input required type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition-colors bg-transparent" placeholder="tua@email.com" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Interesse</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition-colors bg-transparent text-gray-700">
                  <option>Informazioni Generali</option>
                  <option>Capo su Misura</option>
                  <option>Progetto Upcycling</option>
                  <option>Collezioni</option>
                  <option>Appuntamento in Atelier</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Messaggio</label>
                <textarea required rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition-colors bg-transparent resize-none" placeholder="Come possiamo aiutarti?"></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" disabled={formStatus === 'submitting'} fullWidth variant="primary">
                  {formStatus === 'submitting' ? 'Invio in corso...' : 'Invia Messaggio'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};