import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Send, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Building, 
  User, 
  FileText,
  Zap,
  ArrowRight
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { ContactFormData } from '../types';

interface ContactFormSectionProps {
  initialSiteType?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ 
  initialSiteType = 'Landing Page de Alta Conversão' 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    segment: '',
    whatsapp: '',
    siteType: initialSiteType,
    timeline: 'Hoje mesmo (Urgente)',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const siteTypes = [
    'Landing Page de Alta Conversão',
    'Site Institucional Corporativo',
    'E-commerce & Catálogo Digital',
    'Site para Clínica / Prestador de Serviços',
    'Redesign & Modernização de Site',
    'Outro Projeto Sob Medida'
  ];

  const timelineOptions = [
    'Hoje mesmo (Urgente)',
    'Em até 24 a 48 horas',
    'Nesta semana',
    'Sem urgência (estou planejando)'
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

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#bd00ff', '#9333ea', '#c084fc', '#ffffff']
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  // Build formatted WhatsApp link
  const getPreparedWhatsAppUrl = () => {
    const message = `Olá Bredariol Digital! Acabei de solicitar um site pelo formulário:
- *Nome*: ${formData.fullName || 'Não informado'}
- *Empresa*: ${formData.companyName || 'Minha Empresa'} (${formData.segment || 'Geral'})
- *Tipo de Site*: ${formData.siteType}
- *Prazo*: ${formData.timeline}
- *Observações*: ${formData.notes || 'Gostaria de um orçamento e consultoria rápida.'}`;

    return `https://wa.me/55${AGENCY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-[#05020a]">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-950/25 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-700/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Atendimento Prioritário</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Solicitar um site para <span className="text-gradient-vibrant">minha empresa</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Preencha os campos abaixo em menos de 1 minuto. Analisamos seu projeto imediatamente e podemos entregar sua estrutura hoje mesmo!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Guarantees and Direct WhatsApp Contact */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Same Day Delivery Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-950/60 to-[#0c0716] border border-purple-700/40 shadow-xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/50 flex items-center justify-center text-purple-300 mb-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Clock className="w-6 h-6 text-purple-300 animate-pulse" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Compromisso de Entrega no Mesmo Dia
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Entendemos que cada dia sem um site moderno é um dia de clientes perdidos para a concorrência. Desenvolvemos com agilidade e foco cirúrgico no seu negócio.
              </p>

              <div className="space-y-2 pt-4 border-t border-purple-900/40 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Atendimento humano direto pelo WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem burocracia ou termos técnicos complicados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garantia de satisfação e suporte dedicado</span>
                </div>
              </div>
            </div>

            {/* Direct Instant WhatsApp Box */}
            <div className="p-6 rounded-2xl bg-[#0e0818]/90 border border-emerald-900/40 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Prefere falar direto pelo WhatsApp?</h4>
                  <p className="text-xs text-emerald-400 font-medium">Resposta em menos de 5 minutos</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Clique no botão abaixo para iniciar uma conversa direta com nosso especialista:
              </p>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp ({AGENCY_INFO.whatsappFormatted})</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact & Briefing Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-1 bg-gradient-to-b from-purple-700/30 via-purple-950/20 to-transparent shadow-2xl">
              <div className="rounded-[15px] bg-[#0c0716] border border-purple-800/40 p-6 sm:p-8">
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-purple-600/30 border border-purple-500/50 flex items-center justify-center text-purple-300 mb-5 shadow-[0_0_30px_rgba(189,0,255,0.4)]">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Solicitação Recebida com Sucesso!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                      Recebemos seu pedido para a empresa <strong className="text-white">{formData.companyName || 'sua empresa'}</strong>. Para acelerar o início do seu site, clique no botão abaixo para confirmar no WhatsApp:
                    </p>

                    <a
                      href={getPreparedWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-[0_0_25px_rgba(16,185,129,0.45)] flex items-center gap-2.5 transition-all hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Confirmar e Iniciar no WhatsApp Agora</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-xs text-purple-400 hover:text-purple-300 underline"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    
                    {/* Row 1: Full Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-purple-400" />
                          <span>Seu Nome Completo *</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Ex: Carlos Eduardo"
                          className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-800/40 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-purple-400" />
                          <span>Nome da Sua Empresa *</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Ex: Nova Era Engenharia"
                          className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-800/40 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: WhatsApp & Segment */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-purple-400" />
                          <span>WhatsApp com DDD *</span>
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          required
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          placeholder="Ex: (11) 99999-8888"
                          className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-800/40 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Segmento do Negócio
                        </label>
                        <input
                          type="text"
                          name="segment"
                          value={formData.segment}
                          onChange={handleInputChange}
                          placeholder="Ex: Clínica Médica, Construtora, E-commerce..."
                          className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-800/40 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Site Type Select */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Tipo de Site Desejado *
                      </label>
                      <select
                        name="siteType"
                        value={formData.siteType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-800/40 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm outline-none transition-all cursor-pointer"
                      >
                        {siteTypes.map((type, idx) => (
                          <option key={idx} value={type} className="bg-[#0b0614] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 4: Urgency / Delivery Timeline */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-purple-400" />
                        <span>Qual é a sua urgência de entrega?</span>
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-800/40 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white text-sm outline-none transition-all cursor-pointer"
                      >
                        {timelineOptions.map((opt, idx) => (
                          <option key={idx} value={opt} className="bg-[#0b0614] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 5: Notes / Project Description */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-purple-400" />
                        <span>O que sua empresa precisa? (Opcional)</span>
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Ex: Quero aumentar minhas vendas no Google, preciso de um site moderno que transmita confiança..."
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/30 border border-purple-800/40 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-full font-bold text-base text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 hover:from-purple-500 hover:to-fuchsia-500 transition-all shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(189,0,255,0.7)] flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processando solicitação...</span>
                      ) : (
                        <>
                          <Zap className="w-5 h-5" />
                          <span>Solicitar um site para minha empresa</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-slate-400">
                      🔒 Seus dados estão 100% seguros. Não enviamos spam.
                    </p>

                  </form>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
