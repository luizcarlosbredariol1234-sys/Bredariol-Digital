export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: "landing-page" | "institucional" | "ecommerce" | "servicos";
  categoryLabel: string;
  description: string;
  deliveryTime: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  imageUrl: string;
  previewUrl?: string;
  features: string[];
  highlight: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  idealFor: string;
  features: string[];
  deliveryEstimate: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarUrl: string;
  rating: number;
  text: string;
  resultMetric: string;
  deliveryHighlight: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  segment: string;
  whatsapp: string;
  siteType: string;
  timeline: string;
  budgetRange?: string;
  notes: string;
}
