import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function BenefitsSection() {
  const benefits = [
    {
      title: 'Conversion-Focused Design',
      description:
        'We help brands exceed $20M monthly by turning visitors into loyal customers and accelerating growth.',
    },
    {
      title: 'Lightning-Fast Turnaround',
      description:
        'Your design requests are provided to you within a few days, not weeks or months.',
    },
    {
      title: 'Affordable Excellence',
      description:
        'No surprises here! Pay the same fixed price each month. No sneaky extras on your bill',
    },
    {
      title: 'Problem Solving',
      description:
        'We solve your brand challenges with innovative solutions that drive real results.',
    },
    {
      title: 'Private Design Portal',
      description:
        'Easily manage your subscription, and design requests from your own personal portal.',
    },
    {
      title: 'Access to Senior Designers',
      description:
        'Access to top-tier, experienced designers without the need for long-term contracts or full-time salaries',
    },
  ];

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4">Benefit of Kree8</h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            Why Settle for Less? Before you dive in, let's show you why our
            subscription is the game-changer your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <h3 className="heading-sm mb-3">{benefit.title}</h3>
                <p className="body-md text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
          >
            View Plans and Pricing
            <span className="ml-2">Let's Go</span>
          </Button>
        </div>
      </div>
    </section>
  );
}