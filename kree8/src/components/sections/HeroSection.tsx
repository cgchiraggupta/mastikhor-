import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <Badge
          variant="secondary"
          className="mb-8 bg-secondary text-secondary-foreground px-4 py-2 rounded-full"
        >
          <span className="inline-block w-2 h-2 bg-secondary-foreground rounded-full mr-2"></span>
          Available for New Projects
        </Badge>

        <h1 className="heading-hero mb-6">
          A DEDICATED DESIGN TEAM
          <br />
          FOR <span className="relative inline-block">STARTUPS</span>
        </h1>

        <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          We don't just design, we solve your brand's biggest challenges
        </p>

        <Button
          onClick={scrollToPricing}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg"
        >
          View Plans and Pricing
          <span className="ml-2">Let's Go</span>
        </Button>
      </div>
    </section>
  );
}