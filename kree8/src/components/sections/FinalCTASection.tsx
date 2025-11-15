import { Button } from '@/components/ui/button';

export function FinalCTASection() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="heading-xl mb-6">
          If you scrolled this far, It's time to LEVEL UP
        </h2>
        <Button
          onClick={scrollToPricing}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
        >
          Join the Elite Club
        </Button>
        <p className="body-md text-muted-foreground mt-6">
          Trust me we are good at this :)
        </p>
      </div>
    </section>
  );
}