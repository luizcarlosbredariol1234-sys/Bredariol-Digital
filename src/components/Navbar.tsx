import React, { useState, useEffect } from 'react';
import { BredariolLogo } from './BredariolLogo';
import { AGENCY_INFO } from '../data/agencyData';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Instagram, 
  MessageCircle, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
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
            ? 'bg-[#06040a]/90 backdrop-blur-md border-b border-purple-900/25 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#inicio');
            }}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
          >
            <BredariolLogo variant="horizontal" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-purple-950/30"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions (Social + CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram link */}
            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Bredariol Digital"
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-purple-300 hover:text-white bg-purple-950/40 hover:bg-purple-900/50 border border-purple-800/40 rounded-full transition-all duration-200"
            >
              <Instagram className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden xl:inline">{AGENCY_INFO.instagramHandle}</span>
            </a>

            {/* Direct WhatsApp Call */}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/50 rounded-full transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">{AGENCY_INFO.whatsappFormatted}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenContact}
              className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white transition-all duration-300 shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(189,0,255,0.7)]"
            >
              {/* Button gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-600 to-fuchsia-600 transition-all duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-200" />
                <span>Solicitar Site</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
            >
              Pedir Site
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="p-2 text-slate-300 hover:text-white bg-purple-950/40 border border-purple-800/30 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-purple-300" /> : <Menu className="w-6 h-6 text-purple-300" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#07030e]/98 border-b border-purple-900/40 backdrop-blur-xl px-6 py-6 shadow-2xl lg:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-purple-950/50 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-purple-900/30 flex flex-col gap-3">
              <a
                href={AGENCY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-950/50 border border-purple-800/50 text-sm font-semibold text-purple-200"
              >
                <Instagram className="w-4 h-4 text-purple-400" />
                <span>Seguir no Instagram {AGENCY_INFO.instagramHandle}</span>
              </a>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-sm font-semibold text-emerald-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Falar no WhatsApp ({AGENCY_INFO.whatsappFormatted})</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 shadow-[0_0_25px_rgba(168,85,247,0.5)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar um site para minha empresa</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
