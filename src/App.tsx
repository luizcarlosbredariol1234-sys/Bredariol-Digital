import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactFormSection } from './components/ContactFormSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PortfolioProject } from './types';
import { AGENCY_INFO } from './data/agencyData';

export default function App() {
  const [selectedSiteType, setSelectedSiteType] = useState<string>('Landing Page de Alta Conversão');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const scrollToContact = (siteType?: string) => {
    if (siteType) {
      setSelectedSiteType(siteType);
    }
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestSimilarProject = (project: PortfolioProject) => {
    const message = encodeURIComponent(
      `Olá! Vi o projeto "${project.title}" no portfólio da Bredariol Digital e gostaria de um site semelhante entregue para o meu negócio.`
    );
    window.open(`https://wa.me/55${AGENCY_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#04010a] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white relative font-sans overflow-x-hidden">
      {/* 0. Navbar with VYROVA circular menu and BREDARIOL DIGITAL® logo */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* 1. Hero: SEU FUTURO COMEÇA NA TELA. + digital experience (Screenshot 1) */}
      <HeroSection onOpenContact={() => scrollToContact()} />

      {/* 2. Manifesto: Seu site não precisa apenas existir. (Screenshot 3) */}
      <ManifestoSection />

      {/* 3. Philosophy: NÃO USAMOS FÓRMULAS PRONTAS. + Accordion (Screenshot 2) */}
      <PhilosophySection />

      {/* 4. Services: O que criamos + 01/WEB, 02/LANDING, 03/DESIGN, 04/CODE (Screenshot 4) */}
      <ServicesSection onSelectService={(service) => scrollToContact(service)} />

      {/* 5. Process: Giant Outlined Numbers 01, 02, 03, 04, 05 (Screenshot 5) */}
      <ProcessSection onOpenContact={() => scrollToContact()} />

      {/* 6. Selected Projects Portfolio with direct "Entrar no Site" */}
      <PortfolioSection 
        onSelectProject={(project) => setActiveModalProject(project)}
        onRequestSimilar={handleRequestSimilarProject}
      />

      {/* 7. Contact: Vamos criar algo que não passa despercebido. */}
      <ContactFormSection initialSiteType={selectedSiteType} />

      {/* 8. Minimalist Editorial Footer */}
      <Footer onOpenContact={() => scrollToContact()} />

      {/* WhatsApp Flutuante com Balão Interativo */}
      <FloatingWhatsApp />

      {/* Modal de Detalhes do Projeto com Simulação Desktop/Mobile */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onRequestQuote={handleRequestSimilarProject}
      />
    </div>
  );
}
