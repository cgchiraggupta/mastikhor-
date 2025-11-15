import { Card, CardContent } from '@/components/ui/card';
import { Trophy, CalendarDays, DollarSign } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: '95+ Brands Served',
      description: 'Helping businesses across various industries achieve their goals',
    },
    {
      icon: CalendarDays,
      title: '8 Years of Experience',
      description: 'Bringing seasoned expertise to every project',
    },
    {
      icon: DollarSign,
      title: '$100,000+ Saved for Brands',
      description: 'so they can reinvest where it matters the most',
    },
  ];

  return (
    <section id="our-achievement" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4">Our Achievement</h2>
          <p className="body-lg text-muted-foreground">
            Curious about what we've accomplished? Let our track record speak for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-8 text-center">
                <achievement.icon className="w-16 h-16 mx-auto mb-4 text-secondary" />
                <h3 className="heading-sm mb-3">{achievement.title}</h3>
                <p className="body-md text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            {[
              'Mobile App Design',
              'Webflow Development',
              'Framer Development',
              'Social Media Posts',
              'Web Designs',
              'Pitch Decks',
              'Email Designs',
              'Branding',
            ].map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-muted rounded-full body-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}