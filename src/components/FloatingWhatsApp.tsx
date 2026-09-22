import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Sparkles, Clock, Check } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { BredariolLogo } from './BredariolLogo';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  // Pop up an invitation speech bubble after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const preFilledMessage = encodeURIComponent(
    "Olá Bredariol Digital! Quero solicitar um site profissional para minha empresa com entrega no mesmo dia."
  );
  const whatsappUrl = `https://wa.me/55${AGENCY_INFO.whatsappNumber}?text=${preFilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Speech Bubble / Mini Chat Popup */}
      <AnimatePresence>
        {hasPrompted && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="mb-3 max-w-[290px] sm:max-w-[320px] rounded-2xl bg-[#0e071a]/95 border border-purple-600/50 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setHasPrompted(false)}
              aria-label="Fechar mensagem"
              className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-white rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="relative">
                <BredariolLogo variant="symbol" size="sm" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0e071a]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Bredariol Digital</p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online agora • Resposta rápida</span>
                </div>
              </div>
            </div>

            {/* Bubble message */}
            <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-900/30 text-xs text-slate-200 leading-relaxed mb-3">
              <p>
                👋 Olá! Precisa de um <strong>site profissional de alto padrão</strong> para a sua empresa?
              </p>
              <p className="mt-1.5 text-[11px] text-purple-300 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Entregamos no mesmo dia!</span>
              </p>
            </div>

            {/* Action CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp agora</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp com a Bredariol Digital"
        className="relative group p-4 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow" />

        {/* Online dot indicator */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-emerald-900" />
      </a>

    </div>
  );
};
