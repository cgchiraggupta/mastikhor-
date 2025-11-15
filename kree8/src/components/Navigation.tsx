import { Button } from '@/components/ui/button';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">kree8</div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="body-md hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('our-achievement')}
              className="body-md hover:text-primary transition-colors"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('our-work')}
              className="body-md hover:text-primary transition-colors"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('comparision')}
              className="body-md hover:text-primary transition-colors"
            >
              Compare
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="body-md hover:text-primary transition-colors"
            >
              FAQs
            </button>
          </div>

          <Button
            onClick={() => scrollToSection('pricing')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
          >
            Plans and Pricing
          </Button>
        </div>
      </div>
    </nav>
  );
}