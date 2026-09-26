import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle, Sparkles, Clock, TrendingUp } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-[#06030c] border-t border-purple-950/30">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-900/15 blur-[160px] pointer-events-none" />

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
            <span>Depoimentos & Casos Reais</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            O que dizem os empresários que <span className="text-gradient-vibrant">confiaram na Bredariol</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Histórias reais de quem precisava de velocidade, profissionalismo e resultados imediatos de faturamento.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS_LIST.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl p-1 bg-gradient-to-b from-purple-800/30 via-purple-950/15 to-transparent hover:from-purple-600/40 transition-all duration-300 flex flex-col group"
            >
              <div className="rounded-[15px] bg-[#0b0614]/95 border border-purple-900/30 group-hover:border-purple-600/40 p-6 sm:p-8 flex flex-col h-full transition-all duration-300 shadow-xl relative overflow-hidden">
                
                {/* Subtle Quote icon */}
                <Quote className="absolute right-6 top-6 w-12 h-12 text-purple-900/20 group-hover:text-purple-600/15 transition-colors pointer-events-none" />

                {/* Rating stars & Delivery speed tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-slate-300">5.0</span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-purple-300 bg-purple-950/70 border border-purple-800/40 flex items-center gap-1">
                    {testimonial.deliveryHighlight}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6 relative z-10 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Metric achieved pill */}
                <div className="mb-6 p-3 rounded-xl bg-purple-950/40 border border-purple-800/30 flex items-center gap-2.5 text-xs text-purple-200 font-semibold">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Resultado: {testimonial.resultMetric}</span>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-purple-950/60 flex items-center gap-3">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-600/60 shadow-md"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{testimonial.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" title="Cliente Verificado" />
                    </h4>
                    <p className="text-xs text-slate-400">
                      {testimonial.role} • {testimonial.company}
                    </p>
                    <p className="text-[11px] text-purple-400 font-medium">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner with WhatsApp Invitation */}
        <div className="mt-16 p-6 rounded-2xl bg-purple-950/20 border border-purple-800/30 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-300 font-medium">
            Junte-se aos empresários que transformaram seus resultados digitais com a Bredariol Digital.
          </p>
        </div>

      </div>
    </section>
  );
};
