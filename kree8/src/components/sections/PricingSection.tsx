import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { pricingPlans } from '@/data/mockData';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4">No Contract, No Surprises</h2>
          <p className="body-lg text-muted-foreground">
            Consistent Pricing and Value Each Month, with the Flexibility to Cancel
            Anytime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan) => (
            <Card key={plan.id} className="border-border">
              <CardHeader>
                <CardTitle className="heading-md">{plan.name}</CardTitle>
                {plan.subtitle && (
                  <p className="body-lg text-muted-foreground">{plan.subtitle}</p>
                )}
                <p className="body-md text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="heading-hero">{plan.price}</span>
                  <span className="body-lg text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>

                <Separator className="my-6" />

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="body-md flex items-start">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    {plan.ctaText}
                    <br />
                    <span className="text-sm">{plan.ctaSubtext}</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full rounded-full"
                  >
                    {plan.telegramText}
                    <br />
                    <span className="text-sm">{plan.telegramSubtext}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}