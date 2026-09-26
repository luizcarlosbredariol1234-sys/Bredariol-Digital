import React from 'react';
import { 
  Instagram, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { BredariolLogo } from './BredariolLogo';
import { AGENCY_INFO } from '../data/agencyData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030106] border-t border-purple-950/60 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle bottom lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-purple-950/20 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-purple-950/60">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <BredariolLogo variant="horizontal" size="md" />
            
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Agência especializada na criação de sites modernos, profissionais e responsivos de alto padrão. Entregamos seu site no mesmo dia para empresas em todo o Brasil.
            </p>

            <p className="mt-3 text-xs font-semibold text-purple-300">
              "{AGENCY_INFO.tagline}"
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={AGENCY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Bredariol Digital"
                className="w-10 h-10 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-800/40 hover:border-purple-600 flex items-center justify-center text-purple-300 hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Bredariol Digital"
                className="w-10 h-10 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800/40 hover:border-emerald-600 flex items-center justify-center text-emerald-300 hover:text-white transition-all shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Serviços */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Space_Grotesk']">
              Nossos Serviços
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#servicos" className="hover:text-purple-300 transition-colors">
                  Landing Pages de Alta Conversão
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-purple-300 transition-colors">
                  Sites Institucionais Corporativos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-purple-300 transition-colors">
                  E-commerce & Lojas Virtuais
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-purple-300 transition-colors">
                  Sites para Clínicas & Prestadores
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-purple-300 transition-colors">
                  Redesign & Otimização SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Space_Grotesk']">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-purple-300 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-purple-300 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-purple-300 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-purple-300 transition-colors">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Atendimento */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Space_Grotesk']">
              Atendimento & Contato
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Atendemos clientes em todo o Brasil (100% online)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a 
                  href={AGENCY_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white font-medium"
                >
                  WhatsApp: {AGENCY_INFO.whatsappFormatted}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <a 
                  href={AGENCY_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white font-medium"
                >
                  {AGENCY_INFO.instagramHandle}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Entrega Expressa: Sites no mesmo dia</span>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="mt-5 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pedir Meu Site Hoje</span>
            </button>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Bredariol Digital. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
