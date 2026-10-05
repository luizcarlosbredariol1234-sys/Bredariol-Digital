import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PurpleBackgroundSparkles } from './PurpleBackgroundSparkles';

interface ContactFormSectionProps {
  initialSiteType?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ 
  initialSiteType = 'Landing Page de Alta Conversão' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: initialSiteType,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Landing Page de Alta Conversão',
    'Site Institucional Corporativo',
    'E-commerce & Catálogo Digital',
    'Redesign & Modernização de Marca',
    'Outro Projeto Sob Medida'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#c084fc', '#ffffff']
      });
    } catch {
      // safe
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const getDirectWhatsAppUrl = () => {
    const msg = `Olá Bredariol Digital! Meu nome é ${formData.name || 'Cliente'}.
- WhatsApp: ${formData.phone || 'Não informado'}
- Projeto: ${formData.projectType}
- Mensagem: ${formData.message || 'Gostaria de iniciar um projeto com entrega no mesmo dia.'}`;

    return `https://wa.me/55${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-gradient-to-b from-black via-[#0a031a] to-black text-white relative overflow-hidden border-t border-purple-900/30">
      
      {/* Brilhos e atmosfera roxa de fundo */}
      <PurpleBackgroundSparkles position="both" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-left">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-widest text-purple-400 uppercase mb-4">
            ● 05 / CONTATO
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight font-['Space_Grotesk'] text-white">
            Vamos criar algo que não passa despercebido.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-1">
                WhatsApp Comercial
              </p>
              <a 
                href={AGENCY_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl font-bold text-white hover:text-purple-400 transition-colors font-['Space_Grotesk']"
              >
                {AGENCY_INFO.whatsappFormatted}
              </a>
            </div>

            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-1">
                Atendimento
              </p>
              <p className="text-sm text-slate-300">
                Empresas em todo o Brasil · Entrega no mesmo dia
              </p>
            </div>

            <div className="pt-4">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(147,51,234,0.4)]"
              >
                <span>Fale Conosco no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            {isSubmitted ? (
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-sm text-slate-400 mb-6">
                  Seus dados foram recebidos. Clique abaixo para abrir a conversa no WhatsApp diretamente com nossa equipe.
                </p>
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Iniciar no WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu Nome Completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Seu WhatsApp ou Telefone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all"
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-purple-300 block">
                    Opções de Projeto:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectTypes.map((type, idx) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <motion.button
                          key={idx}
                          type="button"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: idx * 0.06 }}
                          onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                          className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-purple-600/30 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:border-purple-500/50 hover:bg-white/10'
                          }`}
                        >
                          <span className="font-medium truncate">{type}</span>
                          {isSelected ? (
                            <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0 ml-1.5" />
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0 ml-1.5" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Fale um pouco sobre sua empresa e o que você precisa..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-[0_0_25px_rgba(147,51,234,0.4)] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Enviando...' : 'Fale Conosco →'}</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
