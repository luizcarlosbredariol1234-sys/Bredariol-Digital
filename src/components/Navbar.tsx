import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Manifesto', href: '#manifesto', num: '01' },
    { name: 'Filosofia', href: '#filosofia', num: '02' },
    { name: 'O Que Criamos', href: '#servicos', num: '03' },
    { name: 'Processo', href: '#processo', num: '04' },
    { name: 'Portfólio', href: '#portfolio', num: '05' },
    { name: 'Contato', href: '#contato', num: '06' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06020e]/90 backdrop-blur-md border-b border-purple-900/30 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo - VYROVA style: BREDARIOL DIGITAL® */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#inicio');
            }}
            className="flex items-center gap-1 text-white font-extrabold text-lg sm:text-xl tracking-wider uppercase font-['Space_Grotesk'] group"
          >
            <span>BREDARIOL</span>
            <span className="text-purple-400">DIGITAL</span>
            <span className="text-[10px] text-slate-400 font-normal ml-0.5 align-super">®</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Fale Conosco + Round Hamburger Button */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/55${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de conversar com a Bredariol Digital para criar uma experiência digital.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)] cursor-pointer"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* VYROVA signature circular 2-bar menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir Menu"
              className="w-11 h-11 rounded-full border border-white/20 hover:border-purple-500/80 bg-black/60 hover:bg-purple-950/40 flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer group"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-white" />
              ) : (
                <>
                  <span className="w-4 h-[1.5px] bg-white group-hover:bg-purple-400 transition-colors" />
                  <span className="w-4 h-[1.5px] bg-white group-hover:bg-purple-400 transition-colors" />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#070213]/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-14 pt-28"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-purple-400 mb-8 font-mono">
                ● MENU / NAVEGAÇÃO
              </p>
              <div className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="flex items-baseline gap-4 group"
                  >
                    <span className="text-xs font-mono text-slate-500 group-hover:text-purple-400 transition-colors">
                      {link.num}
                    </span>
                    <span className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white group-hover:text-purple-300 transition-colors font-['Space_Grotesk']">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Contato Direto</p>
                <a href={AGENCY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-purple-400 transition-colors">
                  {AGENCY_INFO.whatsappFormatted}
                </a>
              </div>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-purple-600 text-white font-bold text-xs uppercase tracking-widest"
              >
                <span>Fale Conosco</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
