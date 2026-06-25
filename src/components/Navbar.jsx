import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Paket Umrah', href: '#packages' },
    { name: 'Keunggulan', href: '#features' },
    { name: 'Testimoni', href: '#testimonials' },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass-nav py-3 shadow-md'
        : 'bg-transparent py-5 border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain rounded-md flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105" />
            <div>
              <span className="font-serif font-bold text-xl sm:text-2xl text-maroon tracking-wide block leading-none">
                ICHSAN KAMIL
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-gold block leading-none mt-1">
                Tour & Travel
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
                className="font-medium text-charcoal/80 hover:text-maroon transition-colors duration-200 text-sm tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6285720988031?text=Assalamualaikum,%20saya%20ingin%20tanya%20paket%20Umrah%20Ichsan%20Kamil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-sm font-semibold text-cream bg-maroon hover:bg-maroon/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-maroon hover:text-gold focus:outline-none transition-colors duration-200"
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
        className={`md:hidden absolute top-full left-0 right-0 bg-cream/98 backdrop-blur-md shadow-lg border-b border-maroon/5 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        id="mobile-menu"
      >
        <div className="px-4 space-y-3 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block font-medium text-charcoal/90 hover:text-maroon py-2 text-base border-b border-charcoal/5 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/6285720988031?text=Assalamualaikum,%20saya%20ingin%20tanya%20paket%20Umrah%20Ichsan%20Kamil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-base font-semibold text-cream bg-maroon hover:bg-maroon/90 shadow-md transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami (WhatsApp)
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
