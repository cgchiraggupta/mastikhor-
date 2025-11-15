import { Card, CardContent } from '@/components/ui/card';

export function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Choose Your Plan',
      description: 'Select the best plan that suits your requirement',
    },
    {
      number: '2',
      title: 'Submit Your Request',
      description: 'Use our private design portal to submit your design needs.',
    },
    {
      number: '3',
      title: 'We Deliver :)',
      description: 'Our talented team delivers in 2-3 days',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4">
            How simple it can be to get your Projects Done
          </h2>
          <p className="body-lg text-muted-foreground">
            Just step away from those traditional old methods of hiring plus managing
            and see for yourself
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="border-border relative">
              <CardContent className="p-8 text-center">
                <div className="absolute top-4 left-4 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center heading-sm">
                  {step.number}
                </div>
                <div className="mt-8">
                  <h3 className="heading-sm mb-3">
                    Step {step.number}
                    <br />
                    {step.title}
                  </h3>
                  <p className="body-md text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}