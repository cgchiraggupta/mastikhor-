import { Button } from '@/components/ui/button';

export function PauseSection() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="heading-hero mb-6">
          Pause or Cancel
          <br />
          anytime
        </h2>
        <p className="body-lg mb-8 max-w-2xl mx-auto">
          Don't commit to a Designer you've gotta pay even when there's no work to
          give them. Oh heck no!
        </p>
        <Button
          onClick={scrollToPricing}
          size="lg"
          variant="secondary"
          className="rounded-full px-8"
        >
          View Plans and Pricing
        </Button>
      </div>
    </section>
  );
}