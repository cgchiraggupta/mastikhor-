import { Card, CardContent } from '@/components/ui/card';
import { Clock, LayoutDashboard, Infinity } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: '48 Hours Delivery',
    },
    {
      icon: LayoutDashboard,
      title: 'Access to Private Design Portal',
    },
    {
      icon: Infinity,
      title: 'Unlimited Design Requests',
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-8 text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="heading-sm">{feature.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}