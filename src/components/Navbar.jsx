import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-6'
      } ${isOpen ? 'bg-black' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
          className="text-white text-2xl font-black tracking-tight"
        >
          Nithyashree<span className="text-[#ff2a2a]">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-semibold relative group transition-colors duration-300 ${
                activeSection === link.id ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </div>

        {/* Hire Me CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-bold hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(255,42,42,0.35)] hover:shadow-[0_0_30px_rgba(255,42,42,0.5)]"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-4 border-t border-white/10' : 'max-h-0'}`}>
        <div className="flex flex-col px-6 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.id)}
              className="text-white/80 hover:text-white font-semibold text-base py-3 border-b border-white/10 text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 pb-2">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-black hover:bg-red-700 transition-colors text-center shadow-lg"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
