import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { services } from '@/data/mockData';

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4">We are here to Serve...</h2>
          <p className="body-lg text-muted-foreground mb-2">
            Stop stressing yourself in finding out the perfect person for a
            particular design needs
          </p>
          <p className="body-sm text-muted-foreground italic">
            Tip: Hover on the images
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="border-border overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={
                      hoveredId === service.id
                        ? service.afterImage
                        : service.beforeImage
                    }
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-white heading-sm p-6 whitespace-pre-line">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="heading-md">That's not it we do even More…</p>
          <p className="body-lg text-muted-foreground mt-2">
            Still confused about us
          </p>
        </div>
      </div>
    </section>
  );
}