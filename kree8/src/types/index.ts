// Navigation menu items
export type NavItem = "Home" | "Achievements" | "Our Work" | "Compare" | "FAQs" | "Plans and Pricing";

// Service types
export type ServiceType = "Website Design" | "Mobile App Design" | "Framer and Webflow Development" | "Social Media Graphics" | "Pitch Decks" | "Branding" | "Business Cards" | "Logos" | "Packaging";

// Comparison entities
export type ComparisonEntity = "kree8" | "full-time Designer" | "Other agencies";

// Pricing plan types
export type PricingPlan = "Retainer" | "Landing Page Design";

// Props types
export interface TestimonialProps {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  logoUrl: string;
  response: string;
}

export interface PortfolioItemProps {
  id: string;
  imageUrl: string;
  logoUrl: string;
  title: string;
  link: string;
}

export interface ServiceItemProps {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
}

export interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  avatarUrl: string;
  avatarName: string;
}

export interface ProblemSolutionProps {
  id: string;
  number: string;
  title: string;
  problem: string;
  solution: string;
}

export interface WorldClockProps {
  city: string;
  country: string;
  timezone: string;
  message: string;
}

export interface ComparisonRowProps {
  feature: string;
  kree8: string | boolean;
  fullTimeDesigner: string | boolean;
  otherAgencies: string | boolean;
}

export interface PricingPlanProps {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  ctaText: string;
  ctaSubtext: string;
  telegramText: string;
  telegramSubtext: string;
}