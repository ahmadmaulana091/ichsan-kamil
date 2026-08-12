import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import AdminWAModal from './AdminWAModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWaPopup, setShowWaPopup] = useState(false);
  const WA_MESSAGE = "Assalamualaikum, saya ingin tanya paket Umrah Ichsan Kamil Tour & Travel";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Keunggulan', href: '#features' },
    { name: 'Paket Umrah', href: '#packages' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 glass-nav py-3 transition-all duration-400${isScrolled ? ' scrolled shadow-md' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              {/* nav-logo class handles the white→original filter transition via CSS */}
              <img
                src={isScrolled ? '/logo/LogoRemoveBg.png' : '/logo/LogoPutihRemoveBg.png'}
                alt="Logo Ichsan Kamil"
                className={`w-14 h-14 object-contain transition-all duration-400${!isScrolled ? ' scale-[1.35]' : ''}`}
              />
              <div>
                <span
                  className="font-serif font-bold text-xl sm:text-2xl tracking-wide block leading-none transition-colors duration-400"
                  style={{ color: isScrolled ? '#6A0F1A' : '#ffffff' }}
                >
                  ICHSAN KAMIL
                </span>
                <span
                  className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold block leading-none mt-1 transition-colors duration-400"
                  style={{ color: isScrolled ? '#CBA358' : 'rgba(255,255,255,0.80)' }}
                >
                  Tour &amp; Travel
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="nav-link font-medium transition-colors duration-200 text-sm tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => setShowWaPopup(true)}
                className="nav-cta inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="nav-hamburger inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Slide-down */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-md shadow-lg border-b border-maroon/5 transition-all duration-300 overflow-hidden ${isScrolled ? 'bg-cream/98' : 'bg-maroon/90'
            } ${isOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'}`}
          id="mobile-menu"
        >
          <div className="px-4 space-y-3 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`block font-medium py-2 text-base border-b transition-colors duration-200 ${isScrolled
                  ? 'text-charcoal/90 hover:text-maroon border-charcoal/5'
                  : 'text-white/90 hover:text-white border-white/10'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => { setIsOpen(false); setShowWaPopup(true); }}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold shadow-md transition-all duration-200 ${isScrolled
                  ? 'text-cream bg-maroon hover:bg-maroon/90'
                  : 'text-maroon bg-white hover:bg-white/90'
                  }`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami (WhatsApp)
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Admin WA Popup */}
      {showWaPopup && (
        <AdminWAModal
          message={WA_MESSAGE}
          onClose={() => setShowWaPopup(false)}
        />
      )}
    </>
  );
}
