import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonials } from '@/data/mockData';

export function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <img
                        src={testimonial.logoUrl}
                        alt="Logo"
                        className="w-10 h-10 rounded"
                      />
                    </div>

                    <p className="body-md mb-6 text-foreground/80">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center gap-3 mb-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatarUrl} />
                        <AvatarFallback>
                          {testimonial.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="body-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted p-3 rounded-lg">
                      <p className="body-sm text-muted-foreground">
                        {testimonial.response}
                      </p>
                      <p className="body-sm font-semibold mt-1">kree8</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="body-sm font-semibold">{testimonial.author}</p>
                      <p className="body-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}