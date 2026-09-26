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

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [];

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
