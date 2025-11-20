import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, BRAND_NAME } from '../constants';
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Determine if we are on the home page to handle transparency
  const isHome = location.pathname === '/';
  
  // Header is transparent if we are on Home AND at the top
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    // Reset scroll state on page change
    setIsScrolled(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-dark selection:bg-brand-sage selection:text-brand-dark">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 ${
          isTransparent && !isMobileMenuOpen
            ? 'bg-transparent text-white shadow-none opacity-0 -translate-y-12 pointer-events-none' 
            : 'bg-brand-cream/95 backdrop-blur-md shadow-sm text-brand-dark opacity-100 translate-y-0 pointer-events-auto'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="z-50 pointer-events-auto">
            <img 
              src="/images/sweety-lab-logo.png" 
              alt="Sweety Lab Logo" 
              className="h-12 md:h-16 w-auto object-contain filter brightness-0"
              loading="eager"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 pointer-events-auto">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] transition-colors relative group ${
                  isTransparent ? 'hover:text-white/80' : 'hover:text-brand-gold'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  isTransparent ? 'bg-white' : 'bg-brand-gold'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-inherit pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen 
              ? <X size={28} className={`${isTransparent ? 'text-white' : 'text-brand-dark'}`} /> 
              : <Menu size={28} className={`${isTransparent ? 'text-white' : 'text-brand-dark'}`} />}
          </button>
        </div>

      </header>

      {/* Mobile Nav Overlay (outside header to ensure full-screen coverage) */}
      <div className={`fixed inset-0 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-[9999] pointer-events-auto bg-brand-cream text-brand-dark backdrop-blur-md md:hidden`}>
        <div className="flex flex-col min-h-screen w-screen overflow-y-auto">
          <div className="flex justify-center pt-8">
            <img src="/images/sweety-lab-logo.png" alt="Sweety Lab" className="h-12 w-auto object-contain filter brightness-0" />
          </div>
          <nav className="flex flex-col space-y-10 text-center px-8 flex-1 justify-center items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-serif text-3xl md:text-4xl uppercase tracking-[0.15em] hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-8 pb-10">
            <Link to="/contatti">
              <Button variant="primary" fullWidth>Prenota un appuntamento</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-brand-sage/30 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/images/sweety-lab-logo.png" 
              alt="Sweety Lab Logo" 
              className="h-16 w-auto object-contain mb-6 filter brightness-0"
              loading="lazy"
            />
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Moda artigianale Made in Italy. <br/>
              Creazioni uniche, sostenibili e su misura per valorizzare la tua unicità.
            </p>
            <div className="flex space-x-4 text-brand-dark">
              <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="mailto:info@sweetylab.it" className="hover:text-brand-gold transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Esplora</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/collezioni" className="hover:text-brand-gold">Collezioni</Link></li>
              <li><Link to="/su-misura" className="hover:text-brand-gold">Su Misura</Link></li>
              <li><Link to="/upcycling" className="hover:text-brand-gold">Upcycling</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-brand-gold">Chi Siamo</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Contatti</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Roma, Italia</li>
              <li>Riceviamo su appuntamento</li>
              <li><a href="mailto:info@sweetylab.it" className="hover:text-brand-gold">info@sweetylab.it</a></li>
              <li>+39 333 000 0000</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">Iscriviti per aggiornamenti sulle nuove capsule.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="bg-brand-cream border border-gray-200 p-3 text-sm focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-dark text-white text-xs uppercase tracking-widest py-3 hover:bg-gray-800 transition-colors">
                Iscriviti
              </button>
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          <p className="mb-4 text-gray-400 uppercase">
            SweetyLab è un progetto d'impresa cofinanziato dal fondo sociale Europero Plus (FSE+) 2021-2027 Avviso "Impresa Formativia" della Regione Lazio
          </p>
          <img src="/images/LogoRegione.png" alt="Logo Regione" className="mx-auto h-12 mb-4 object-contain" />
          <p>&copy; {new Date().getFullYear()} Sweety Lab. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};