import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactFormSection } from './components/ContactFormSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PortfolioProject, ServiceItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [selectedSiteType, setSelectedSiteType] = useState<string>('Landing Page de Alta Conversão');

  const scrollToContact = (siteType?: string) => {
    if (siteType) {
      setSelectedSiteType(siteType);
    }
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    scrollToContact(service.title);
  };

  const handleRequestSimilar = (project: PortfolioProject) => {
    scrollToContact(project.categoryLabel);
  };

  return (
    <div className="min-h-screen bg-[#030106] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white relative">
      {/* Global Navbar */}
      <Navbar 
        onOpenContact={() => scrollToContact()} 
      />

      {/* 1. Seção Inicial Impactante (Hero) */}
      <HeroSection onOpenContact={() => scrollToContact()} />

      {/* 2. Sobre / Quem Sou */}
      <AboutSection onOpenContact={() => scrollToContact()} />

      {/* 3. Serviços */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 4. Portfólio / Projetos */}
      <PortfolioSection
        onSelectProject={(project) => setSelectedProject(project)}
        onRequestSimilar={handleRequestSimilar}
      />

      {/* 5. Depoimentos */}
      <TestimonialsSection />

      {/* 6. Formulário de Contato */}
      <ContactFormSection initialSiteType={selectedSiteType} />

      {/* Footer */}
      <Footer 
        onOpenContact={() => scrollToContact()} 
      />

      {/* 7. WhatsApp Flutuante */}
      <FloatingWhatsApp />

      {/* Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={handleRequestSimilar}
      />
    </div>
  );
}
