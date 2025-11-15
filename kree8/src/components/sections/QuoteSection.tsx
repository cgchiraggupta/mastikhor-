import { Button } from '@/components/ui/button';

export function QuoteSection() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl text-center">
        <blockquote className="mb-8">
          <p className="heading-lg mb-4">
            Brand is not what you say,
            <br />
            It is what they say.
          </p>
          <footer className="body-lg text-muted-foreground">
            - Marty Neumeier
          </footer>
        </blockquote>

        <Button
          onClick={scrollToPricing}
          variant="outline"
          className="rounded-full px-6"
        >
          and they say what they see!
        </Button>
      </div>
    </section>
  );
}