import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { worldClocks } from '@/data/mockData';

export function ClockSection() {
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {};
      worldClocks.forEach((clock) => {
        const date = new Date();
        const timeString = date.toLocaleTimeString('en-US', {
          timeZone: clock.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        newTimes[clock.city] = timeString;
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {worldClocks.map((clock) => (
            <Card key={clock.city} className="border-border">
              <CardContent className="p-6 text-center">
                <p className="heading-lg mb-2">{times[clock.city] || '00:00:00'}</p>
                <p className="heading-sm mb-2">
                  {clock.city}, {clock.country}
                </p>
                <p className="body-sm text-muted-foreground">{clock.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}