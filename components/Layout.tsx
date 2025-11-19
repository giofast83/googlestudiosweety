import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, BRAND_NAME } from '../constants';
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    // Reset scroll state on page change
    setIsScrolled(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar as soon as user scrolls down a bit (e.g., 50px)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-dark selection:bg-brand-sage selection:text-brand-dark">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 bg-brand-cream/90 backdrop-blur-md shadow-sm py-4 transform ${
          isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="z-50 pointer-events-auto">
            <h1 className="font-serif text-2xl tracking-widest font-bold uppercase text-brand-dark">
              {BRAND_NAME}
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 pointer-events-auto">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs uppercase tracking-[0.2em] hover:text-brand-gold transition-colors relative group text-brand-dark"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle (Always clickable if visible, but header is hidden so button hides too) */}
          <button 
            className="md:hidden z-50 text-brand-dark pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-brand-cream flex flex-col justify-center items-center transition-transform duration-500 ease-in-out z-40 pointer-events-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <nav className="flex flex-col space-y-8 text-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-serif text-3xl text-brand-dark hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      {/* Removed pt-20 since header is initially hidden/overlay, letting hero hit top */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-brand-sage/30 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-xl mb-6">{BRAND_NAME}</h3>
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
          <p>&copy; {new Date().getFullYear()} Sweety Lab. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};