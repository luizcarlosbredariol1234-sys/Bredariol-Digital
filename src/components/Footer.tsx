import React from 'react';
import { ArrowUp, Instagram, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-black via-[#090217] to-black border-t border-purple-900/40 pt-16 pb-12 relative overflow-hidden text-white">
      
      {/* Glow roxo de horizonte sutil no topo do footer */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-32 blur-[80px] opacity-45 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(168,85,247,0.45) 0%, transparent 75%)'
        }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-left">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <a
              href="#inicio"
              className="flex items-center gap-1 text-white font-extrabold text-xl tracking-wider uppercase font-['Space_Grotesk']"
            >
              <span>BREDARIOL</span>
              <span className="text-purple-400">DIGITAL</span>
              <span className="text-[10px] text-slate-400 font-normal ml-0.5 align-super">®</span>
            </a>
            <p className="text-xs text-slate-400 mt-2 max-w-md">
              Criamos experiências digitais que transformam ideias, negócios e marcas em presenças que não passam despercebidas.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-purple-400 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 hover:border-purple-400 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-purple-400 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer ml-2"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} BREDARIOL DIGITAL®. TODOS OS DIREITOS RESERVADOS.</p>
          <p>ENTREGA NO MESMO DIA · ATENDIMENTO NACIONAL</p>
        </div>

      </div>
    </footer>
  );
};
