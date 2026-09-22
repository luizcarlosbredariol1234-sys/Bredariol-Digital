import { PortfolioProject, ServiceItem, TestimonialItem } from '../types';

export const AGENCY_INFO = {
  name: "Bredariol Digital",
  niche: "Vendas e Criação de Sites de Alto Padrão",
  tagline: "Mais presença. Mais clientes. Mais resultados.",
  whatsappNumber: "14997188099",
  whatsappFormatted: "(14) 99718-8099",
  whatsappUrl: "https://wa.me/5514997188099?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20site%20profissional%20para%20minha%20empresa%20com%20a%20Bredariol%20Digital.",
  instagramHandle: "@bredariol.digital",
  instagramUrl: "https://instagram.com/bredariol.digital",
  email: "contato@bredarioldigital.com.br",
  location: "Atendimento em todo o Brasil",
  differentiator: "Entregamos no mesmo dia, sites profissionais de qualidade comprovada.",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "landing-page",
    title: "Landing Pages de Alta Conversão",
    badge: "Mais Procurado • Entrega no Mesmo Dia",
    shortDesc: "Páginas únicas focadas em transformar tráfego pago (Google e Meta Ads) em clientes reais chamando no seu WhatsApp.",
    fullDesc: "Desenvolvemos Landing Pages estratégicas com copywriting persuasivo, velocidade de carregamento instantânea (abaixo de 1 segundo) e botões estrategicamente posicionados para disparar o seu volume de contatos e vendas.",
    idealFor: "Campanhas de tráfego pago, lançamentos, produtos únicos e captação de leads qualificados.",
    features: [
      "Entrega expressa no mesmo dia",
      "Copywriting focado em conversão e persuasão",
      "Integração direta com WhatsApp e Pixel Meta/Google",
      "Design 100% responsivo para celulares",
      "Otimização extrema de velocidade (PageSpeed 95+)"
    ],
    deliveryEstimate: "Hoje mesmo (em até 12 horas)",
    iconName: "Zap"
  },
  {
    id: "site-institucional",
    title: "Sites Institucionais Corporativos",
    badge: "Alto Padrão & Autoridade",
    shortDesc: "Posicione sua empresa como líder do seu segmento com uma estrutura digital impecável que gera respeito e credibilidade imediata.",
    fullDesc: "Um site institucional de classe executiva transmite solidez perante investidores, clientes de alto tíquete e parceiros. Estrutura completa de apresentação da empresa, serviços, equipe, cases e canais de contato.",
    idealFor: "Empresas consolidadas, escritórios de advocacia, clínicas médicas, construtoras e consultorias B2B.",
    features: [
      "Design exclusivo alinhado à identidade visual da sua marca",
      "Seções de autoridade, clientes e diferenciais",
      "Páginas de serviços completas e detalhadas",
      "Formulários dinâmicos e conexão direta com CRM/WhatsApp",
      "SEO técnico para indexação privilegiada no Google"
    ],
    deliveryEstimate: "No mesmo dia ou até 24h",
    iconName: "Building2"
  },
  {
    id: "ecommerce",
    title: "E-commerce & Catálogos Digitais",
    badge: "Venda 24/7 sem Parar",
    shortDesc: "Lojas virtuais modernas, rápidas e descomplicadas, preparadas para receber pagamentos e pedidos diretamente.",
    fullDesc: "Sua loja pronta para faturar dia e noite com catálogo visual atraente, fluxo de checkout limpo, cálculo automático de frete e integração ágil para fechamento rápido via cartão, Pix ou WhatsApp.",
    idealFor: "Marcas de produtos físicos, moda, cosméticos, atacado e varejo.",
    features: [
      "Catálogo de produtos com fotos em alta resolução",
      "Checkout otimizado para evitar abandono de carrinho",
      "Integração nativa com Pix, Mercado Pago e Cartões",
      "Botão de compra rápida direto no WhatsApp",
      "Painel intuitivo para você gerenciar seus produtos"
    ],
    deliveryEstimate: "Express (1 a 2 dias)",
    iconName: "ShoppingBag"
  },
  {
    id: "servicos-agendamento",
    title: "Sites para Clínicas & Prestadores de Serviços",
    badge: "Agenda Cheia de Clientes",
    shortDesc: "Estruturas perfeitas para profissionais liberais e consultórios que precisam de novos agendamentos todos os dias.",
    fullDesc: "Apresente seus procedimentos, especialidades e diferenciais com requinte visual. Seus futuros pacientes encontram todas as respostas e agendam consultas com facilidade em poucos toques no smartphone.",
    idealFor: "Médicos, dentistas, psicólogos, clínicas de estética, nutricionistas e consultores.",
    features: [
      "Apresentação sofisticada de tratamentos e procedimentos",
      "Botões de agendamento prioritário com 1 clique",
      "Depoimentos e prova social de pacientes satisfeitos",
      "Localização integrada com Google Maps e rotas Waze",
      "Conformidade com padrões éticos de cada profissão"
    ],
    deliveryEstimate: "No mesmo dia",
    iconName: "CalendarCheck"
  },
  {
    id: "redesign",
    title: "Redesign & Modernização de Sites",
    badge: "Upgrade Visual Imediato",
    shortDesc: "Seu site atual parece antigo, lento ou parou de gerar clientes? Transformamos sua presença digital em uma máquina de vendas.",
    fullDesc: "Reconstruímos sua presença digital do zero usando as tecnologias mais modernas do mercado global. Mantemos o que sua marca tem de melhor enquanto renovamos a arquitetura visual, velocidade e taxa de conversão.",
    idealFor: "Negócios que possuem sites criados há mais de 2 anos e que perdem clientes para a concorrência.",
    features: [
      "Auditoria completa de pontos de perda de vendas no site atual",
      "Nova roupagem visual com design moderno e arrojado",
      "Migração sem perda de relevância no Google",
      "Aumento drástico na velocidade e experiência mobile",
      "Entrega ágil sem tirar seu negócio do ar"
    ],
    deliveryEstimate: "No mesmo dia",
    iconName: "Sparkles"
  },
  {
    id: "seo-performance",
    title: "Otimização de Performance & SEO Google",
    badge: "Top 1 no Google",
    shortDesc: "Estruturação técnica avançada para colocar sua empresa nas buscas do Google na sua região de atuação.",
    fullDesc: "De nada adianta ter um site se ele não for encontrado ou se demorar mais de 2 segundos para abrir. Implementamos as melhores práticas de SEO on-page, microdados Schema.org e compressão de ponta.",
    idealFor: "Empresas que desejam clientes orgânicos qualificados sem depender exclusivamente de anúncios.",
    features: [
      "Configuração de meta tags, Open Graph e títulos estratégicos",
      "Cadastro e validação no Google Search Console",
      "Carregamento ultraveloz com notas 95+ no PageSpeed",
      "Estratégia de palavras-chave locais para sua cidade",
      "Certificado de Segurança SSL incluso"
    ],
    deliveryEstimate: "No mesmo dia",
    iconName: "SearchCheck"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "nexus-health",
    title: "Clínica Lumina Prime — Dermatologia & Estética",
    client: "Lumina Saúde & Estética Integrada",
    category: "servicos",
    categoryLabel: "Clínicas & Serviços",
    description: "Site premium de alta sofisticação com apresentação de tratamentos, bio dos especialistas e integração direta com WhatsApp para agendamento de consultas particulares.",
    deliveryTime: "Entregue no mesmo dia (8h de produção)",
    metrics: [
      { label: "Novos agendamentos", value: "+210%" },
      { label: "Tempo de carregamento", value: "0.5s" },
      { label: "Aumento no WhatsApp", value: "3.2x" }
    ],
    tags: ["Design Premium", "Agendamento Ágil", "Mobile First", "SEO Local"],
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Layout em paleta escura com detalhes dourados e roxos sofisticados",
      "Catálogo de procedimentos com fotos antes/depois elegantes",
      "Integração instantânea com a secretária via WhatsApp",
      "PageSpeed 98 no mobile e desktop"
    ],
    highlight: "Selo de Qualidade Bredariol Digital: Entregue no mesmo dia com padrão internacional."
  },
  {
    id: "orion-engenharia",
    title: "Orion Engenharia & Empreendimentos",
    client: "Grupo Orion Construtora",
    category: "institucional",
    categoryLabel: "Site Institucional",
    description: "Portal institucional corporativo para construtora de médio e grande porte, destacando obras entregues, certificações técnicas e canal direto para investidores.",
    deliveryTime: "Entregue no mesmo dia (11h de produção)",
    metrics: [
      { label: "Contratos fechados", value: "R$ 4.2M" },
      { label: "Retenção de visitantes", value: "+175%" },
      { label: "Score Google", value: "99/100" }
    ],
    tags: ["Corporativo", "Galeria de Obras", "Projetos 3D", "Autoridade"],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Apresentação interativa dos empreendimentos com filtros",
      "Formulário seguro para propostas comerciais",
      "Página de investidores com downloads de relatórios",
      "Visual sóbrio e imponente que passa confiança total"
    ],
    highlight: "Selo de Qualidade Bredariol Digital: Máxima autoridade visual e performance."
  },
  {
    id: "aura-joias",
    title: "Aura Joalheria Contemporânea",
    client: "Aura Luxo & Joias",
    category: "ecommerce",
    categoryLabel: "E-commerce & Catálogo",
    description: "Loja virtual moderna e minimalista focada no público A/B, com fotografia impecável, checkout simplificado em 1 página e compra direta com consultoras pelo WhatsApp.",
    deliveryTime: "Entregue em 24h com catálogo importado",
    metrics: [
      { label: "Faturamento no 1º mês", value: "+R$ 115k" },
      { label: "Taxa de conversão", value: "4.8%" },
      { label: "Abandono de carrinho", value: "-62%" }
    ],
    tags: ["E-commerce", "Luxo", "Checkout Rápido", "Pix Instantâneo"],
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Design clean com tipografia refinada e fundos contrastantes",
      "Zoom em detalhes de cada joia em alta definição",
      "Botão flutuante para atendimento VIP com personal shopper",
      "Gateway integrado com Pix sem taxas intermediárias"
    ],
    highlight: "Selo de Qualidade Bredariol Digital: Experiência de compra fluida e encantadora."
  },
  {
    id: "apex-advocacia",
    title: "Brito & Silveira Sociedade de Advogados",
    client: "Brito & Silveira Advocacia Empresarial",
    category: "institucional",
    categoryLabel: "Site Institucional",
    description: "Site corporativo de alto padrão focado em Direito Tributário e Empresarial, transmitindo rigor técnico, solidez institucional e conformidade ética com o código da OAB.",
    deliveryTime: "Entregue no mesmo dia (9h de produção)",
    metrics: [
      { label: "Leads qualificados", value: "+190%" },
      { label: "Ticket médio de clientes", value: "+80%" },
      { label: "Velocidade de abertura", value: "0.4s" }
    ],
    tags: ["Direito B2B", "Compliance", "Artigos & Notícias", "Autoridade"],
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Seções de áreas de atuação com linguagem executiva clara",
      "Perfis individuais dos sócios com currículo e titulações",
      "Canal prioritário de agendamento de consulta jurídica",
      "Otimização para busca orgânica de grandes empresas"
    ],
    highlight: "Selo de Qualidade Bredariol Digital: Rigor corporativo e elegância jurídica."
  },
  {
    id: "solar-energy",
    title: "Voltz Brasil — Energia Solar Inteligente",
    client: "Voltz Soluções Fotovoltaicas",
    category: "landing-page",
    categoryLabel: "Landing Page de Alta Conversão",
    description: "Landing Page desenvolvida especificamente para tráfego pago no Google Ads, contendo simulador de economia na conta de luz e chamada irresistível para cotação rápida.",
    deliveryTime: "Entregue no mesmo dia (7h de produção)",
    metrics: [
      { label: "Custo por Lead (CPL)", value: "-54%" },
      { label: "Leads por semana", value: "+380" },
      { label: "Conversão na página", value: "14.2%" }
    ],
    tags: ["Tráfego Pago", "Simulador Interativo", "Alta Conversão", "WhatsApp Leads"],
    imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Simulador dinâmico de economia mensal em 3 passos",
      "Gatilhos de urgência e prova social com clientes reais",
      "Redirecionamento automático com a cidade do lead",
      "Conexão com disparo de WhatsApp em 5 segundos"
    ],
    highlight: "Selo de Qualidade Bredariol Digital: Máxima taxa de conversão em vendas."
  },
  {
    id: "tech-saas",
    title: "CoreFlow — Software de Gestão para Franquias",
    client: "CoreFlow Tech Soluções",
    category: "landing-page",
    categoryLabel: "Landing Page de Alta Conversão",
    description: "Página de produto com visual futurista em tons roxos e pretos, microinterações 3D e demonstração interativa da plataforma para diretores de franquias.",
    deliveryTime: "Entregue no mesmo dia (10h de produção)",
    metrics: [
      { label: "Demonstrações agendadas", value: "+340%" },
      { label: "NPS dos visitantes", value: "96" },
      { label: "Tempo médio na página", value: "4m 12s" }
    ],
    tags: ["SaaS Tech", "Dark Mode", "Microinterações", "B2B"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Design tecnológico em roxo e preto com efeitos de luz",
      "Tabela comparativa de planos e calculadora de ROI",
      "Vídeo de tour demonstrativo sem travamento",
      "Formulário direto de teste grátis por 14 dias"
    ],
    highlight: "Selo de Qualidade Bredariol Digital: Design moderno que posiciona como líder de tecnologia."
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Matheus Albuquerque",
    role: "Diretor Clínico",
    company: "Instituto Albuquerque de Medicina",
    location: "São Paulo, SP",
    avatarUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    text: "Estávamos inaugurando uma nova unidade e nossa antiga agência pediu 35 dias para criar uma página. Procurei a Bredariol Digital às 9h da manhã; às 18h do mesmo dia o site estava no ar, impecável, rápido e com um bom gosto visual impressionante. Foi surreal!",
    resultMetric: "+220% de consultas particulares agendadas no 1º mês",
    deliveryHighlight: "⚡ Site entregue no mesmo dia às 18h"
  },
  {
    id: "test-2",
    name: "Camila Nogueira",
    role: "Fundadora & CEO",
    company: "Bellavita Cosméticos",
    location: "Curitiba, PR",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    text: "O diferencial de entrega no mesmo dia com padrão de agência de luxo parecia bom demais para ser verdade, mas a Bredariol Digital superou todas as expectativas. Minhas vendas pelo WhatsApp dispararam no dia seguinte!",
    resultMetric: "3.4x mais mensagens de compra no WhatsApp",
    deliveryHighlight: "⚡ Catálogo e site no ar em 10 horas"
  },
  {
    id: "test-3",
    name: "Rodrigo Mendonça",
    role: "Sócio-Diretor",
    company: "Mendonça & Associados Engenharia",
    location: "Belo Horizonte, MG",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    text: "A presença visual que a Bredariol Digital nos deu elevou nosso patamar nas reuniões corporativas. Nossos clientes elogiam a rapidez de navegação e a sobriedade do design. É um investimento que se paga em poucos dias.",
    resultMetric: "Fechamento de 2 grandes contratos de obras",
    deliveryHighlight: "⚡ Entrega cumprida rigorosamente no prazo"
  },
  {
    id: "test-4",
    name: "Fernanda Castanheira",
    role: "Head de Marketing",
    company: "SolarMax Brasil",
    location: "Goiânia, GO",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    text: "Nosso custo por lead no Google Ads caiu pela metade assim que trocamos a landing page antiga pela desenvolvida pela Bredariol Digital. Eles entendem de vendas e conversão, não apenas de código. Recomendo de olhos fechados!",
    resultMetric: "Custo por lead reduzido de R$ 42 para R$ 19",
    deliveryHighlight: "⚡ Pronto no mesmo dia para subir a campanha"
  }
];

export const TRUST_STATS = [
  { value: "100%", label: "Entrega no Mesmo Dia", desc: "Velocidade recorde sem abrir mão do padrão premium" },
  { value: "+180", label: "Projetos Criados", desc: "Empresas atendidas com sucesso em todo o Brasil" },
  { value: "99.8%", label: "Satisfação dos Clientes", desc: "Aprovação unânime de empresários e gestores" },
  { value: "3.2x", label: "Aumento Médio em Conversão", desc: "Mais visitantes virando clientes reais no WhatsApp" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Entrega Expressa no Mesmo Dia",
    desc: "Enquanto outras agências demoram de 30 a 60 dias para entregar seu projeto, nós entregamos seu site profissional hoje mesmo. Seu negócio não pode esperar para faturar.",
    icon: "ClockFast"
  },
  {
    title: "Design de Alto Padrão Corporativo",
    desc: "Visual clean, organizado e exclusivo que passa confiança imediata aos seus clientes. Destaque-se da concorrência com uma identidade que valoriza seu tíquete médio.",
    icon: "ShieldCheck"
  },
  {
    title: "Foco 100% em Alta Conversão",
    desc: "Não fazemos sites apenas 'bonitos'. Cada título, botão e seção é projetado psicologicamente para conduzir o visitante a clicar e fechar negócio com você.",
    icon: "TrendingUp"
  },
  {
    title: "Atendimento em Todo o Brasil",
    desc: "Processo 100% desburocratizado e ágil, com comunicação direta via WhatsApp e suporte dedicado para empresas de qualquer região do país.",
    icon: "Globe2"
  }
];
