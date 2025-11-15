import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { BrandsSection } from './components/sections/BrandsSection';
import { QuoteSection } from './components/sections/QuoteSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ClockSection } from './components/sections/ClockSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { PauseSection } from './components/sections/PauseSection';
import { PricingSection } from './components/sections/PricingSection';
import { FAQSection } from './components/sections/FAQSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { Footer } from './components/sections/Footer';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BrandsSection />
        <QuoteSection />
        <AchievementsSection />
        <BenefitsSection />
        <ProcessSection />
        <ServicesSection />
        <PortfolioSection />
        <ClockSection />
        <ComparisonSection />
        <PauseSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <MarqueeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;