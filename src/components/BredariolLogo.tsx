import React from 'react';
import { cn } from '../lib/utils';

interface BredariolLogoProps {
  variant?: 'full' | 'horizontal' | 'symbol';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  withGlow?: boolean;
}

/**
 * Official Bredariol Digital Logo Component
 * Renders the official brand logo directly from vector assets with zero deviations.
 */
export const BredariolLogo: React.FC<BredariolLogoProps> = ({
  variant = 'full',
  size = 'md',
  className,
  withGlow = false,
}) => {
  // Variant: Symbol Only
  if (variant === 'symbol') {
    const sizeClasses = {
      sm: 'w-7 h-7',
      md: 'w-10 h-10',
      lg: 'w-16 h-16',
      xl: 'w-24 h-24',
      '2xl': 'w-36 h-36',
    };

    return (
      <div className={cn("relative flex items-center justify-center shrink-0", sizeClasses[size], className)}>
        {withGlow && (
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-75 pointer-events-none scale-125"
            style={{ 
              background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(124,58,237,0.25) 45%, transparent 75%)' 
            }}
          />
        )}
        <img
          src="/bredariol-symbol.svg"
          alt="Bredariol Digital Símbolo"
          className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(168,85,247,0.35)]"
          loading="eager"
        />
      </div>
    );
  }

  // Variant: Horizontal Lockup (for Navbar & Footer)
  if (variant === 'horizontal') {
    const symbolSizes = {
      sm: 'w-7 h-7',
      md: 'w-9 h-9',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
      '2xl': 'w-20 h-20',
    };

    const textSizes = {
      sm: 'text-sm tracking-[0.18em]',
      md: 'text-base sm:text-lg tracking-[0.2em]',
      lg: 'text-xl sm:text-2xl tracking-[0.22em]',
      xl: 'text-3xl tracking-[0.24em]',
      '2xl': 'text-4xl tracking-[0.26em]',
    };

    const subSizes = {
      sm: 'text-[9px] tracking-[0.35em]',
      md: 'text-[10px] sm:text-[11px] tracking-[0.4em]',
      lg: 'text-xs sm:text-sm tracking-[0.45em]',
      xl: 'text-sm tracking-[0.5em]',
      '2xl': 'text-base tracking-[0.55em]',
    };

    return (
      <div className={cn("inline-flex items-center gap-3 cursor-pointer group select-none", className)}>
        <div className={cn("relative flex items-center justify-center shrink-0", symbolSizes[size])}>
          {withGlow && (
            <div 
              className="absolute inset-0 rounded-full blur-lg opacity-60 pointer-events-none scale-125"
              style={{ 
                background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)' 
              }}
            />
          )}
          <img
            src="/bredariol-symbol.svg"
            alt="Bredariol Digital"
            className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className={cn("font-black text-white uppercase font-['Space_Grotesk'] leading-none flex items-center drop-shadow-[0_0_12px_rgba(168,85,247,0.25)]", textSizes[size])}>
            <span>BRED</span>
            <span className="inline-block scale-y-95">Ʌ</span>
            <span>RIOL</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-[1.5px] w-3.5 bg-gradient-to-r from-transparent to-purple-500 rounded-full" />
            <span className={cn("font-bold text-purple-400 uppercase leading-none font-['Space_Grotesk']", subSizes[size])}>
              DIGITAL
            </span>
            <span className="h-[1.5px] w-3.5 bg-gradient-to-l from-transparent to-purple-500 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // Variant: Full Stacked Lockup (Exact match to the uploaded screenshot)
  const fullSizes = {
    sm: 'max-w-[200px]',
    md: 'max-w-[280px] sm:max-w-[320px]',
    lg: 'max-w-[380px] sm:max-w-[440px]',
    xl: 'max-w-[500px]',
    '2xl': 'max-w-[620px]',
  };

  return (
    <div className={cn("flex flex-col items-center justify-center text-center select-none group relative", className)}>
      {withGlow && (
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-60 pointer-events-none scale-110"
          style={{ 
            background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(124,58,237,0.15) 50%, transparent 75%)' 
          }}
        />
      )}
      <div className={cn("w-full transition-transform duration-300 group-hover:scale-[1.02]", fullSizes[size])}>
        <img
          src="/bredariol-logo.svg"
          alt="Bredariol Digital Logo Oficial"
          className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.25)] rounded-2xl"
          loading="eager"
        />
      </div>
    </div>
  );
};
